"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] text-white overflow-hidden flex items-center justify-center">
      {/* Background Video with Zoom Animation and Cinematic Filter */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none"
        style={{ filter: 'brightness(0.85) contrast(1.1)' }}
      >
        <iframe
          src="https://player.vimeo.com/video/1174024600?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120vh] min-w-[213.33vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-90"
        ></iframe>
      </motion.div>

      {/* Layered Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center container mx-auto px-4 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="max-w-[700px] mx-auto text-[40px] md:text-[64px] font-bold tracking-tighter leading-[1.05] drop-shadow-lg mb-4">
            Supporting Kansas City<br />
            Nonprofits Through<br />
            <span className="block text-[24px] md:text-[36px] font-semibold text-white/90 mt-2 tracking-[4px]">
              Purpose-Driven Golf Events
            </span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-[60px] h-[2px] bg-primary mx-auto origin-center mt-3 mb-5"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="max-w-[460px] mx-auto text-base md:text-lg text-gray-200 drop-shadow-md mb-7 leading-[1.6]"
          >
            We bring together businesses, teams, and communities to create high-impact golf events that raise funds and strengthen local nonprofits across Kansas City.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-3"
          >
            <Button 
              asChild 
              className="w-full sm:w-auto rounded-none bg-primary hover:bg-[#3e6341] text-white uppercase font-semibold py-4 px-8 transition-all duration-300 hover:scale-[1.03] h-auto"
              style={{ letterSpacing: '0.5px', boxShadow: '0 10px 25px rgba(82,126,85,0.35)' }}
            >
              <Link href="/tournaments">View upcoming Tournaments</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-black hover:border-white uppercase font-semibold py-4 px-8 transition-all duration-300 bg-transparent backdrop-blur-none h-auto"
              style={{ letterSpacing: '0.5px' }}
            >
              <Link href="/contact">Partner with us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4 opacity-80"
          >
            <span className="w-8 h-[1px] bg-white/50 hidden md:block"></span>
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-medium">
              Trusted by leading Kansas City organizations
            </p>
            <span className="w-8 h-[1px] bg-white/50 hidden md:block"></span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none" 
        style={{ background: 'linear-gradient(to bottom, transparent 60%, black 100%)' }}
      />
    </section>
  );
}