"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "Young Life Blue Springs",
    date: "October 14, 2024",
    location: "Lakewood Oaks Golf Club",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "LevelUp Kids",
    date: "Spring 2025",
    location: "To be announced",
    image: "https://images.unsplash.com/photo-1500930287526-901e7c76a36e?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

export const Events = () => {
  return (
    <section id="events" className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16"
        >
          Upcoming Tournaments & Events
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <Card className="bg-white text-black border-none group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold tracking-tight">{event.title}</h3>
                  <p className="text-gray-500 mt-2">{event.date}</p>
                  <p className="text-gray-500">{event.location}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="p-0 text-brand-green font-bold group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};