"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const videoId = "N6ESFroo3eo";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0`;

  return (
    <section className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] object-cover transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={videoUrl}
          title="Serving Kingdom KC Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black/50 z-10" />
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
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline-white" size="lg" className="w-full sm:w-auto">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}