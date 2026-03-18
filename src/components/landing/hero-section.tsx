"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        {/* 
          Using Vimeo's background=1 parameter to automatically hide controls, 
          mute, autoplay, and loop the video. The CSS classes ensure it covers 
          the entire screen while maintaining a 16:9 aspect ratio.
          Increased min-h and min-w to ensure it covers the background even if the section grows taller than 100vh on small screens.
        */}
        <iframe
          src="https://player.vimeo.com/video/1174024600?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120vh] min-w-[213.33vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-90"
        ></iframe>
        {/* Improved gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent z-10" />
      </div>

      {/* Replaced h-full with w-full and added generous top/bottom padding to prevent cutoff */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center md:items-start md:text-left container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="max-w-4xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[1.1] drop-shadow-lg">
            Supporting Kansas City Nonprofits Through Purpose-Driven Golf Events
          </h1>
          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 drop-shadow-md">
            We unite businesses, golf teams, and communities to create a lasting impact on local charities through premium fundraising tournaments. Whether you are looking for corporate sponsorship for nonprofits or want to register a team for a great cause, your participation drives real change in our city.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300 shadow-lg">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300 shadow-lg bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}