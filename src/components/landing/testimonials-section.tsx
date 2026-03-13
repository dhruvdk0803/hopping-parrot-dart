"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote: "Working with Serving Kingdom has been a transformative experience for our organization. Their dedication and professionalism are unmatched.",
    name: "Jane Doe",
    org: "CEO, LevelUp Kids",
  },
  {
    quote: "The funds raised from their golf tournament allowed us to expand our youth programs significantly. We are incredibly grateful for their partnership.",
    name: "John Smith",
    org: "Director, Young Life Blue Springs",
  },
];

const QuoteBlock = ({ testimonial, delay }: { testimonial: (typeof testimonials)[0], delay: number }) => (
  <motion.div 
    className="relative border-l-2 border-primary pl-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    <p className="text-xl md:text-2xl leading-relaxed font-medium">"{testimonial.quote}"</p>
    <p className="mt-8 font-bold uppercase tracking-widest text-sm">{testimonial.name}</p>
    <p className="text-muted-foreground text-sm mt-1">{testimonial.org}</p>
  </motion.div>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {testimonials.map((testimonial, index) => (
            <QuoteBlock key={testimonial.name} testimonial={testimonial} delay={index * 0.1} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/vision">See Our Impact</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}