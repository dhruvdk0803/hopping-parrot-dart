"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function GolfLessonsHero() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Golf lessons in Kansas City with Coach Kobe at Loading Golf — Serving Kingdom KC partner"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-tight">
          Golf Lessons in Kansas City
        </h1>
        
        <div className="w-24 h-1 bg-primary mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-200 mb-6 font-medium max-w-3xl leading-relaxed">
          At Serving Kingdom KC, we believe that good golf and a good life happen when you have the right people around you. That is why we are proud to partner with Loading Golf as our exclusive provider for golf lessons in Kansas City.
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-medium max-w-3xl leading-relaxed">
          Whether you are picking up a club for the first time to play in one of our upcoming charity golf tournaments, or you are an experienced player looking to shave strokes off your handicap, Loading Golf provides the modern, personalized instruction you need to level up your game.
        </p>

        <Button asChild className="w-full sm:w-auto h-14 px-10 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
          <a href="https://loadinggolf.com/" target="_blank" rel="noopener noreferrer">
            Book Your Lesson with Loading Golf
          </a>
        </Button>
      </motion.div>
    </section>
  );
}