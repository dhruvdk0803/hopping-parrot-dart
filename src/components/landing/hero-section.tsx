"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const videoId = "1Vby1vXCcIcfXejI-B96U7CDfP3gjCCbF";

  return (
    <section className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        {/* 
          Using an iframe for Google Drive because direct streaming is blocked.
          We scale it up significantly (w-[300vw] etc.) and center it so the 
          Google Drive UI controls are pushed outside the visible screen area.
        */}
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview?autoplay=1&mute=1&loop=1`}
          allow="autoplay"
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-90"
        ></iframe>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center md:items-start md:text-left container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase">
            Serving Kingdom
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl">
            Supporting Kansas City Nonprofits Through Purpose-Driven Golf Events
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold h-14 px-8 transition-colors duration-300">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}