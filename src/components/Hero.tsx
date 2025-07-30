"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

  return (
    <section id="home" className="w-full relative overflow-hidden">
      <div className="relative">
        <Glow variant="navbar" />
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-8 lg:py-40 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-black">
                <span className="text-text-primary drop-shadow-lg">
                  Hello Berlin{" "}
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-5xl md:text-7xl font-bold shadow-lg">
                    365
                  </span>
                </span>
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
              <Button
                size="lg"
                className="gap-4 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/#contact">Kontaktieren Sie uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
