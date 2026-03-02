"use client";
import { motion } from "framer-motion";

export function TournamentsHero() {
  return (
    <section className="bg-black text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase">
          Tournaments & Events
        </h1>
        <div className="w-24 h-1 bg-primary my-8"></div>
        <p className="text-2xl md:text-3xl font-medium mb-4">
          Serving Kingdom KC 2026 Event Calendar
        </p>
        <p className="text-lg text-muted-foreground">
          Partnering with local nonprofits to deliver high-impact golf experiences.
        </p>
      </motion.div>
    </section>
  );
}