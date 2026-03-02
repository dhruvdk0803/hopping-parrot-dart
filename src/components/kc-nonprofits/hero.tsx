"use client";
import { motion } from "framer-motion";

export function KcNonprofitsHero() {
  return (
    <section className="bg-white text-black min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          KC Nonprofits
        </h1>
        <div className="w-24 h-1 bg-primary my-8 mx-auto"></div>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Explore and connect with verified Kansas City nonprofit organizations.
        </p>
      </motion.div>
    </section>
  );
}