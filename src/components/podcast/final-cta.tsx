"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export function PodcastFinalCta() {
  return (
    <section className="py-24 bg-white text-black text-center border-t border-black/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
        >
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://www.youtube.com/@ServingKingdomKC" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/contact">Inquire About Being a Guest</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/about-us-our-vision">Learn More About Our Vision</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}