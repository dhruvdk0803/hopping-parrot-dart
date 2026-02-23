"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DonateCta() {
  return (
    <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <motion.div
        className="container mx-auto text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Support the Mission
        </h2>
        <Button variant="secondary" size="lg" className="mt-8 hover:bg-white hover:text-black transition-colors duration-300">
          Donate
        </Button>
      </motion.div>
    </section>
  );
}