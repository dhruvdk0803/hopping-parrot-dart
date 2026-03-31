"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative text-white min-h-[90vh] flex items-center justify-center text-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Jeff McCubbins, founder of Serving Kingdom KC, at a charity golf tournament in Kansas City"
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
        className="relative z-20 max-w-5xl mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-8 leading-tight max-w-4xl">
          Empowering Kansas City Charities Through Purpose-Driven Events
        </h1>
        
        <div className="w-24 h-1 bg-primary mb-8"></div>
        
        <div className="space-y-6 mb-12 max-w-4xl">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            Serving Kingdom KC is a 501(c)(3) nonprofit organization dedicated to helping other local nonprofits exceed their fundraising goals. We believe in the power of community, connection, and Kingdom giving. By organizing high-impact charity golf tournaments, galas, silent auctions, and raffles, we provide a platform where generosity leads to true community transformation.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            When you partner with us or participate in our events, you are directly investing in the future of our city and helping to support local nonprofits in KC. Our mission is simple: to ensure that the organizations doing the most vital work in our community have the financial resources they need to thrive and expand their services.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full">
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">View Upcoming Tournaments</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent">
            <Link href="/contact">Partner With Us</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent">
            <Link href="/memberships-sponsorships">Explore Sponsorship Opportunities</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}