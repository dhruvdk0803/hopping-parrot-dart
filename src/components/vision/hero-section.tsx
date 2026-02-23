"use client";
import { motion } from "framer-motion";

export function VisionHero() {
  return (
    <motion.section
      className="bg-black text-white pt-48 pb-24 sm:pt-56 sm:pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Our Vision
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Golf with a Purpose.
        </p>
        <div className="mt-8 w-24 h-1 bg-primary mx-auto" />
      </div>
    </motion.section>
  );
}