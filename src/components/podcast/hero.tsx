"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export function PodcastHero() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Serving Kingdom KC podcast — faith, leadership, and community giving"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-tight">
          Serving Kingdom KC Podcast
        </h1>
        
        <div className="w-24 h-1 bg-primary mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-200 mb-6 font-medium max-w-3xl leading-relaxed">
          Welcome to the Serving Kingdom KC podcast hosted by Jeff McCubbins. This podcast is a dedicated space for exploring the intersection of faith, leadership and community impact.
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-medium max-w-3xl leading-relaxed">
          If you are passionate about nonprofit fundraising, purpose-driven living and making a tangible difference in the Kansas City area, you are in the right place. We bring together local leaders, nonprofit directors and community advocates to share their stories, challenges and triumphs.
        </p>

        <Button asChild className="w-full sm:w-auto h-14 px-10 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
          <a href="https://www.youtube.com/@ServingKingdomKC" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </Button>
      </motion.div>
    </section>
  );
}