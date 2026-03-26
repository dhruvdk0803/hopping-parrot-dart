"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black text-center border-t border-black/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
            Secure Your Membership Today
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
            Don't miss your opportunity to be part of something bigger. Our memberships and sponsorships are limited to ensure maximum value for our partners.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Join our tribe of purpose-driven businesses and individuals today, and help us transform Kansas City through the power of golf.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/tournaments">View Upcoming Events Schedule</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/contact">Contact Us for Custom Sponsorships</Link>
            </Button>
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <a href="#pricing">Subscribe to a Package Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}