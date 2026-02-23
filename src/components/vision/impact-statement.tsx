"use client";
import { motion } from "framer-motion";

export function ImpactStatement() {
  return (
    <motion.section
      className="bg-black text-white py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          "We exist to help Kansas City nonprofits increase their event net proceeds by 5x or more."
        </p>
        <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm">A Model for Sustainable Impact</p>
      </div>
    </motion.section>
  );
}