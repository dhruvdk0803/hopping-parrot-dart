"use client";
import { motion } from "framer-motion";

export function SignatureBlock() {
  return (
    <motion.section
      className="py-24 sm:py-32 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-right max-w-md ml-auto">
          <p className="text-lg italic text-muted-foreground">Take care and be blessed,</p>
          <p className="text-2xl font-bold mt-4 border-b-2 border-primary inline-block pb-1">
            Jeff McCubbins
          </p>
          <p className="mt-2 text-muted-foreground">
            Executive Director / Founder
            <br />
            Serving Kingdom KC, INC
          </p>
        </div>
      </div>
    </motion.section>
  );
}