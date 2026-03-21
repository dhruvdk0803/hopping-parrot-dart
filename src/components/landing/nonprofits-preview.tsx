"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function NonprofitsPreview() {
  return (
    <section className="pt-16 sm:pt-20 pb-24 sm:pb-32 bg-white text-black border-t border-b border-black/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Supporting Local Kansas City Charities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Explore organizations making a difference throughout the Kansas City community with the UnCoverKC website. If you are searching for nonprofits near me to support, our directory connects you with vetted, impactful charities. Discover causes to champion or add your own organization to our growing network of local nonprofits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/kc-nonprofits">Browse Nonprofits</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/kc-nonprofits">Add Your Organization</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}