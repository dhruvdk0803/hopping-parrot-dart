"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const memberships = [
  {
    title: "Sponsor Membership",
    description: "Market your business across Serving Kingdom KC events while supporting local nonprofits.",
  },
  {
    title: "Team Membership",
    description: "Secure your 4-person team's spot in multiple premium golf tournaments throughout the year.",
  },
  {
    title: "Sponsor + Team",
    description: "Maximum impact. Includes sponsor marketing visibility plus a 4-person team entry.",
  }
];

export function MembershipsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Become a Member</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Secure your place in upcoming Serving Kingdom KC events while supporting local nonprofits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="border border-white/20 p-8 hover:border-primary transition-colors duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{membership.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {membership.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/memberships">View Membership Options</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}