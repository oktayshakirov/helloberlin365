import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/i18n/config";

function resolveGeoLocale(request: NextRequest): Locale {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "DE") {
    return "de";
  }

  return defaultLocale;
}

function extractLocaleFromPath(pathname: string): Locale | null {
  const locale = pathname.split("/")[1];
  return isLocale(locale) ? locale : null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathLocale = extractLocaleFromPath(pathname);

  if (pathLocale) {
    // Make locale available to downstream server components.
    // `headers()` in server components reads from the request headers.
    request.headers.set("x-locale", pathLocale);

    const response = NextResponse.next();
    response.cookies.set(localeCookieName, pathLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  if (pathname === "/") {
    const cookieLocale = request.cookies.get(localeCookieName)?.value;
    const preferredLocale = isLocale(cookieLocale ?? "")
      ? cookieLocale
      : resolveGeoLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}`;
    return NextResponse.redirect(url);
  }

  const fallbackUrl = request.nextUrl.clone();
  fallbackUrl.pathname = `/${defaultLocale}`;
  return NextResponse.redirect(fallbackUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|images).*)"],
};
