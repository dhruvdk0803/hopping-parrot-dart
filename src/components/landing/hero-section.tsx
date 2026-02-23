"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={targetRef} className="relative h-screen text-white">
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1562592499-4b4a7a59155a?q=80&w=2574&auto=format&fit=crop"
          alt="Lush green golf course on a sunny day"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div 
        style={{ y: textY }}
        className="relative z-20 flex h-full flex-col items-center justify-center text-center md:items-start md:text-left container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase">
            Serving Kingdom
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl">
            Supporting Kansas City Nonprofits Through Purpose-Driven Golf Events
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">View Upcoming Tournaments</Button>
            <Button variant="outline-white" size="lg" className="w-full sm:w-auto">
              Donate
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}