"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function TournamentsHero() {
  return (
    <section className="relative text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Tournaments Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center drop-shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase drop-shadow-xl">
          Tournaments & Events
        </h1>
        <div className="w-24 h-1 bg-primary my-8 shadow-sm"></div>
        <p className="text-2xl md:text-3xl font-medium mb-4 drop-shadow-md text-white">
          Serving Kingdom KC 2026 Event Calendar
        </p>
        <p className="text-lg text-white drop-shadow-md font-medium">
          Partnering with local nonprofits to deliver high-impact golf experiences.
        </p>
      </motion.div>
    </section>
  );
}