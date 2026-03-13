"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Partner With Nonprofits",
    description: "We identify and collaborate with impactful Kansas City organizations that need funding and exposure."
  },
  {
    number: "02",
    title: "Host High-Impact Golf Events",
    description: "We manage premium, professionally run golf tournaments that attract sponsors and players."
  },
  {
    number: "03",
    title: "Raise Funds & Build Community",
    description: "Net proceeds are multiplied, delivering critical resources to our nonprofit partners while uniting the community."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-t border-black/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">How It Works</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="text-5xl font-bold text-black/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-6 w-12 h-[1px] bg-black/20"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">Explore Events</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}