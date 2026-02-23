"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold tracking-tighter max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Interested in partnering with Serving Kingdom KC?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Button variant="secondary" size="lg" className="mt-8">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}