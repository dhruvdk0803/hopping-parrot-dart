"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function TeamMemberships() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Team Memberships
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Team 6 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group border border-white/20 p-8 md:p-12 bg-black hover:-translate-y-1 hover:border-white/50 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Team 6 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $400
              </span>
              <span className="block text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-10 flex-grow text-gray-300">
              Lock in your 4-person team for 6 events in 2026/2027.
            </p>
            <Button asChild className="w-full h-[52px] rounded-none bg-primary hover:bg-primary/90 text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
              <Link href="/store">Subscribe</Link>
            </Button>
          </motion.div>

          {/* Team 3 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group border border-white/20 p-8 md:p-12 bg-black hover:-translate-y-1 hover:border-white/50 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Team 3 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $250
              </span>
              <span className="block text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-10 flex-grow text-gray-300">
              Secure your team of 4 players for 3 events in 2026/2027.
            </p>
            <Button asChild className="w-full h-[52px] rounded-none bg-transparent border border-white hover:bg-white hover:text-black text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
              <Link href="/store">Subscribe</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}