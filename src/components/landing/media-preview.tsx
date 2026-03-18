"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function MediaPreview() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Kingdom Conversations & Our Tribe
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            Listen to conversations about faith, leadership, community impact, and purpose-driven living with Jeff McCubbins on the Kingdom Conversations podcast. We are also proud to highlight "Our Tribe"—the dedicated partners and businesses, such as Loading Golf and Bridge Integrative Medicine, who help make our mission possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <a href="https://www.youtube.com/@JeffMcCubbins" target="_blank" rel="noopener noreferrer">
                Watch the Podcast
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/tribe">Meet the Tribe</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}