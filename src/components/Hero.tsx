"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="home" className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-text-primary">Hello Berlin 365</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
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

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-text-secondary max-w-2xl text-center">
              Ihre Geschichte verdient Aufmerksamkeit – wir sorgen dafür. 365
              Tage im Jahr. Ob online oder offline – wir machen Ihre Marke
              sichtbar.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              <Link href="/#contact">Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
