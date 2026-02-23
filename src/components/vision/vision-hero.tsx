"use client";
import { motion } from "framer-motion";

export function VisionHero() {
  return (
    <motion.section
      className="bg-black text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
        Our Vision
      </h1>
      <div className="w-24 h-1 bg-primary my-6"></div>
      <p className="text-xl md:text-2xl text-muted-foreground">
        Golf with a Purpose.
      </p>
    </motion.section>
  );
}