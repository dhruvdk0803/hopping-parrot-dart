"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DonateCta() {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Support the Mission
        </h2>
        <Button
          variant="secondary"
          size="lg"
          className="mt-8 hover:bg-white hover:text-black transition-colors duration-300"
        >
          Donate
        </Button>
      </motion.div>
    </section>
  );
}