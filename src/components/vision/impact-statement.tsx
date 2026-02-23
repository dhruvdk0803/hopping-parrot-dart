"use client";
import { motion } from "framer-motion";

export function ImpactStatement() {
  return (
    <motion.section
      className="py-24 sm:py-32 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
          "We help Kansas City nonprofits increase event net proceeds by 5x or more."
        </p>
        <p className="mt-6 text-muted-foreground">A model built for maximum impact.</p>
      </div>
    </motion.section>
  );
}