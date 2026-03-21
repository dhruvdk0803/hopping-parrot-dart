"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        {/* 
          Using Vimeo's background=1 parameter to automatically hide controls, 
          mute, autoplay, and loop the video. The CSS classes ensure it covers 
          the entire screen while maintaining a 16:9 aspect ratio.
        */}
        <iframe
          src="https://player.vimeo.com/video/1174024600?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120vh] min-w-[213.33vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-90"
        ></iframe>
        {/* Vertical gradient for centered readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-10" />
      </div>

      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="max-w-[700px] mx-auto text-[40px] md:text-[64px] font-bold tracking-tighter leading-[1.05] drop-shadow-lg">
            Supporting Kansas City<br />
            Nonprofits Through<br />
            Purpose-Driven Golf Events
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-16 h-[2px] bg-primary mt-6 mx-auto origin-center"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-6 max-w-[500px] mx-auto text-base md:text-lg leading-relaxed text-gray-200 drop-shadow-md"
          >
            We bring together businesses, teams, and communities to create high-impact golf events that raise funds and strengthen local nonprofits across Kansas City.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Button asChild size="lg" className="w-full sm:w-auto rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300 shadow-lg">
              <Link href="/tournaments">View upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300 shadow-lg bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              <Link href="/contact">Partner with us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-4 opacity-80"
          >
            <span className="w-8 h-[1px] bg-white/50 hidden md:block"></span>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-medium">
              Trusted by leading Kansas City organizations
            </p>
            <span className="w-8 h-[1px] bg-white/50 hidden md:block"></span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}