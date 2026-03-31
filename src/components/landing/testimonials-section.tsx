"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with Serving Kingdom KC infused new excitement into our team and had a real impact on our fundraising efforts. They brought energy, strategy and heart to every step of the process. Their support was exactly what we needed and we’re truly grateful for their partnership.",
    name: "Haiti Joy Hope",
    org: "",
  },
  {
    quote: "We see the value and additional connections that Serving Kingdom KC brings to our nonprofit.",
    name: "Young Life Blue Springs",
    org: "",
  },
];

const QuoteBlock = ({ testimonial, delay }: { testimonial: (typeof testimonials)[0], delay: number }) => (
  <motion.div 
    className="relative border-l-2 border-primary pl-6 md:pl-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium">"{testimonial.quote}"</p>
    <p className="mt-6 md:mt-8 font-bold uppercase tracking-widest text-sm">{testimonial.name}</p>
    {testimonial.org && <p className="text-muted-foreground text-sm mt-1">{testimonial.org}</p>}
  </motion.div>
);

export function TestimonialsSection() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            The Impact of Your Support
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((testimonial, index) => (
            <QuoteBlock key={testimonial.name} testimonial={testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}