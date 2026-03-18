"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with Serving Kingdom has been a transformative experience for our organization. Their dedication and professionalism are unmatched. The funds raised from their golf tournament allowed us to expand our youth programs significantly. We are incredibly grateful for their partnership.",
    name: "John Smith",
    org: "Director, Young Life Blue Springs",
  },
  {
    quote: "Partnering with Serving Kingdom KC has been one of the best decisions for our community outreach. Not only did our team have an incredible time at the tournament, but the visibility and networking opportunities were outstanding. It is a privilege to align our brand with such a meaningful cause.",
    name: "Jane Doe",
    org: "CEO, LevelUp Kids",
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
    <p className="text-muted-foreground text-sm mt-1">{testimonial.org}</p>
  </motion.div>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24">
          {testimonials.map((testimonial, index) => (
            <QuoteBlock key={testimonial.name} testimonial={testimonial} delay={index * 0.1} />
          ))}
        </div>
        
        {/* Logo Grid Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-black/10 pt-12 md:pt-16"
        >
          <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by our partners and sponsors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 opacity-50 grayscale">
            {/* Replace these with actual img tags when logos are available */}
            <div className="text-sm sm:text-lg md:text-xl font-bold tracking-tighter">SPONSOR LOGO</div>
            <div className="text-sm sm:text-lg md:text-xl font-bold tracking-tighter">PARTNER LOGO</div>
            <div className="text-sm sm:text-lg md:text-xl font-bold tracking-tighter">SPONSOR LOGO</div>
            <div className="text-sm sm:text-lg md:text-xl font-bold tracking-tighter">PARTNER LOGO</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}