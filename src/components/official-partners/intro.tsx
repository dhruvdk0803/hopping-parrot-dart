"use client";
import { motion } from "framer-motion";

export function OfficialPartnersIntro() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto text-center"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight">
            “We surround Serving Kingdom KC with partners who elevate performance, health, character, and community.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}