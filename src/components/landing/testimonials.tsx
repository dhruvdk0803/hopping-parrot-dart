"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Partnering with Serving Kingdom KC was a game-changer for our annual fundraiser. Their professionalism and passion helped us exceed our goals and reach a new audience.",
    name: "Jane Doe",
    organization: "Executive Director, Young Life Blue Springs",
  },
  {
    quote: "The impact of their events goes beyond the funds raised. They build community and shine a spotlight on the incredible work being done by nonprofits across Kansas City.",
    name: "John Smith",
    organization: "Founder, LevelUp Kids",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16"
        >
          What Our Partners Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="absolute -top-8 -left-4 text-[12rem] font-bold text-black/5 -z-10"
                aria-hidden="true"
              >
                “
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-6">
                <p className="text-lg font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.organization}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};