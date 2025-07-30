"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";

export function Hero() {
  const [sloganNumber, setSloganNumber] = useState(0);
  const slogans = useMemo(
    () => ["Your Brand.", "Our Mission.", "Every Day."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (sloganNumber === slogans.length - 1) {
        setSloganNumber(0);
      } else {
        setSloganNumber(sloganNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [sloganNumber, slogans]);

  const renderTitleMobile = (className: string) => (
    <h1 className={className}>
      <span className="text-text-primary drop-shadow-lg">
        Hello Berlin{" "}
        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
          365
        </span>
      </span>
      <span className="relative flex w-full justify-center overflow-hidden">
        &nbsp;
        {slogans.map((slogan, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold text-center"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              sloganNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: sloganNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {slogan}
          </motion.span>
        ))}
      </span>
    </h1>
  );

  const renderTitleDesktop = (className: string) => (
    <h1 className={className}>
      <span className="text-text-primary drop-shadow-lg">
        Hello Berlin{" "}
        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
          365
        </span>
      </span>
      <span className="relative flex w-full overflow-hidden">
        &nbsp;
        {slogans.map((slogan, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              sloganNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: sloganNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {slogan}
          </motion.span>
        ))}
      </span>
    </h1>
  );

  const renderDescription = (className: string) => (
    <p className={className}>
      Ihre Geschichte verdient Aufmerksamkeit – wir sorgen dafür. 365 Tage im
      Jahr. Ob online oder offline – wir machen Ihre Marke sichtbar.
    </p>
  );

  const renderButton = () => (
    <Button
      size="lg"
      className="gap-4 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Phone className="h-5 w-5" />
      <Link href="/#contact">Kontaktieren Sie uns</Link>
    </Button>
  );

  const renderImage = (width: number, height: number, className?: string) => (
    <Image
      src="/images/gadgets.png"
      alt="Laptop, DSLR camera, and pen holder setup"
      width={width}
      height={height}
      priority
      className={className}
    />
  );

  return (
    <section id="home" className="w-full relative overflow-hidden">
      <div className="relative">
        <Glow variant="navbar" />
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="flex gap-4 py-4 lg:hidden items-center justify-center flex-col">
            <div className="flex gap-2 flex-col">
              {renderTitleMobile(
                "text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-black"
              )}
              {renderDescription(
                "text-lg md:text-xl leading-relaxed tracking-tight text-text-secondary max-w-2xl text-center"
              )}
            </div>

            <div className="flex justify-center">{renderImage(250, 250)}</div>

            <div className="flex flex-row gap-3">{renderButton()}</div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:py-20 lg:mt-12 items-center justify-center gap-8 max-w-6xl mx-auto">
            {/* Left side  */}
            <div className="flex-2 flex flex-col gap-6">
              {renderTitleDesktop(
                "text-6xl xl:text-7xl tracking-tighter font-black"
              )}
              {renderDescription(
                "text-xl xl:text-2xl leading-relaxed tracking-tight text-text-secondary max-w-2xl"
              )}
              <div className="flex flex-row gap-3">{renderButton()}</div>
            </div>

            {/* Right side  */}
            <div className="flex-1 flex justify-center">
              {renderImage(400, 400, "max-w-full h-auto")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
