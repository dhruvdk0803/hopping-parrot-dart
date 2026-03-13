"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const partners = [
  "Loading Golf",
  "Bridge Integrative Medicine",
  "Smithville Golf",
  "Golf Ranch"
];

export function TribePreview() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Our Tribe</h2>
            <div className="w-12 h-1 bg-primary mt-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/tribe">Meet the Tribe</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="aspect-square border border-black/10 flex items-center justify-center p-6 text-center hover:border-primary hover:bg-gray-50 transition-colors duration-300 group"
            >
              <h3 className="font-bold uppercase tracking-widest text-sm md:text-base group-hover:text-primary transition-colors">
                {partner}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}