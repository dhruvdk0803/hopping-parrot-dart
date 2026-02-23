"use client";
import { motion } from "framer-motion";

export function SignatureBlock() {
  return (
    <motion.section
      className="bg-white text-black py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl ml-auto text-right">
          <p className="text-lg">Take care and be blessed,</p>
          <p className="text-3xl font-bold mt-4 border-b-2 border-primary pb-2 inline-block">
            Jeff McCubbins
          </p>
          <p className="mt-2 text-muted-foreground">Executive Director / Founder</p>
          <p className="text-muted-foreground">Serving Kingdom KC, INC</p>
        </div>
      </div>
    </motion.section>
  );
}