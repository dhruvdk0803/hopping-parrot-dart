"use client";
import { motion } from "framer-motion";

export function MembershipsHero() {
  return (
    <section className="bg-black text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
          Memberships
        </h1>
        <div className="w-24 h-1 bg-primary my-8"></div>
        <p className="text-2xl md:text-3xl font-medium mb-4">
          Secure Your Place in Serving Kingdom KC Events
        </p>
        <p className="text-lg text-muted-foreground">
          Flexible annual packages designed for sponsors and teams.
        </p>
      </motion.div>
    </section>
  );
}