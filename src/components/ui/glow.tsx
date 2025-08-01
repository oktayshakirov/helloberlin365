import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      navbar: "-top-[300px]",
      footer: "bottom-[50px]",
    },
  },
  defaultVariants: {
    variant: "footer",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[512px] w-[90%] -translate-x-1/2 scale-[1.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--color-glow-primary)_10%,_var(--color-glow-primary-fade)_60%)]"
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[70%] -translate-x-1/2 scale-[1.2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--color-glow-secondary)_10%,_var(--color-glow-secondary-fade)_60%)]"
      )}
    />
  </div>
));
Glow.displayName = "Glow";

export { Glow };
