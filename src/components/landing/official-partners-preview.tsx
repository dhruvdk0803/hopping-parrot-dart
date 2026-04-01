"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    name: "Loading Golf",
    logo: "/loading-golf-logo.png",
    invert: true // White logo needs to be inverted on light background
  },
  {
    name: "Bridge Integrative Medicine",
    logo: "/bridge-integrative-logo.jpg"
  },
  {
    name: "Smithville Golf",
    logo: "/smithville-golf-logo.png"
  },
  {
    name: "Golf Ranch",
    logo: "/golf-ranch-logo.jpg"
  }
];

export function OfficialPartnersPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Official Partners</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative aspect-square border border-black/10 flex items-center justify-center p-6 text-center hover:border-primary transition-colors duration-300 group overflow-hidden bg-white"
            >
              {/* Background Logo */}
              <div className="absolute inset-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className={`object-contain grayscale ${partner.invert ? 'invert' : ''}`}
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="relative z-10 font-bold uppercase tracking-widest text-sm md:text-base group-hover:text-primary transition-colors drop-shadow-sm bg-white/80 px-3 py-1">
                {partner.name}
              </h3>
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
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/official-partners">Meet the Official Partners</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}