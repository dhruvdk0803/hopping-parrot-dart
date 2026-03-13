"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-primary text-white">
      <div className="container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Serve With Us
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
            Join us in strengthening nonprofits across Kansas City.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="w-full sm:w-auto h-14 px-12 rounded-none bg-black hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-12 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}