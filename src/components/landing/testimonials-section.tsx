"use client";

import { motion } from "framer-motion";

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
    className="relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    <p className="text-xl md:text-2xl leading-relaxed">"{testimonial.quote}"</p>
    <p className="mt-6 font-bold">{testimonial.name}</p>
    <p className="text-muted-foreground">{testimonial.org}</p>
  </motion.div>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black relative overflow-hidden">
      <div className="absolute -top-16 -left-16 text-gray-200/30 text-[20rem] font-bold z-0 select-none opacity-50">
        “
      </div>
      <div className="absolute -bottom-24 -right-16 text-gray-200/30 text-[20rem] font-bold z-0 select-none opacity-50">
        ”
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <QuoteBlock key={testimonial.name} testimonial={testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}