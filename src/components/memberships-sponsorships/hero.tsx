"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export function MembershipsHero() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
          alt="Corporate Golf Networking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-tight">
          Golf Tournament Sponsorships & Memberships in Kansas City
        </h1>
        
        <div className="w-24 h-1 bg-primary mb-8"></div>
        
        <p className="text-lg md:text-xl text-gray-200 mb-4 font-medium max-w-3xl">
          Serving Kingdom KC offers exclusive golf tournament sponsorships and memberships designed to elevate your brand while making a tangible impact in our community.
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-medium max-w-3xl">
          By partnering with us, you secure your place in premium Kansas City golf events, gain valuable marketing visibility, and directly support local nonprofits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">View Upcoming Events Schedule</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent">
            <a href="#pricing">Subscribe to a Package Now</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}