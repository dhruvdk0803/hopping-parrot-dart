"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function SponsorMemberships() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sponsor Memberships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Market your business across Serving Kingdom KC events while supporting local nonprofits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sponsorship 6 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative border border-black p-8 md:p-12 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4">
              Most Impact
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Sponsorship 6 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $225
              </span>
              <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-8 flex-grow">
              Participate in 6 Serving Kingdom KC events of your choice in 2026/2027.
            </p>
            <ul className="space-y-3 mb-10">
              {['Business exposure', 'Event participation', 'Sponsor recognition'].map((item) => (
                <li key={item} className="flex items-center text-sm font-medium">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="w-full h-[52px] rounded-none bg-primary hover:bg-primary/90 text-white text-base uppercase tracking-widest font-bold transition-colors">
              <Link href="/store">Subscribe</Link>
            </Button>
          </motion.div>

          {/* Sponsorship 3 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group border border-black p-8 md:p-12 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Sponsorship 3 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $125
              </span>
              <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-8 flex-grow">
              Participate in 3 Serving Kingdom KC events of your choice in 2026/2027.
            </p>
            <Button asChild className="w-full h-[52px] rounded-none bg-black hover:bg-gray-800 text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
              <Link href="/store">Subscribe</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}