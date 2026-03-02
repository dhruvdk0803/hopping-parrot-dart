"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function SponsorTeamMemberships() {
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
            Sponsor with Team Memberships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maximum visibility. Maximum participation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sponsor + Team 6 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative border border-black p-8 md:p-12 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4">
              Best Value
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Sponsor + Team 6 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $700
              </span>
              <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-10 flex-grow">
              Includes sponsor marketing + a 4-person team in 6 events.
            </p>
            <Button className="w-full h-[52px] rounded-none bg-primary hover:bg-primary/90 text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
              Subscribe
            </Button>
          </motion.div>

          {/* Sponsor + Team 3 Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group border border-black p-8 md:p-12 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Sponsor + Team 3 Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 inline-block transition-transform duration-300 origin-left">
                $400
              </span>
              <span className="block text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                per month / 12 months
              </span>
            </div>
            <p className="text-base leading-relaxed mb-10 flex-grow">
              Includes sponsor marketing + a 4-person team in 3 events.
            </p>
            <Button className="w-full h-[52px] rounded-none bg-black hover:bg-gray-800 text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
              Subscribe
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}