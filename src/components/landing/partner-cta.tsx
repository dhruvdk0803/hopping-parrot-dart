"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export const PartnerCTA = () => {
  return (
    <section className="bg-brand-green text-white py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto">
          Interested in partnering with Serving Kingdom KC?
        </h2>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-black text-white hover:bg-gray-800 uppercase tracking-widest px-8 h-14 text-base"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </section>
  );
};