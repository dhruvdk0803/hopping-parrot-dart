"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const events = [
  {
    title: "Young Life Blue Springs",
    date: "October 28, 2024",
    location: "Adams Pointe Golf Club",
    image: "https://images.unsplash.com/photo-1556762029-3b4d3f91e72d?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "LevelUp Kids",
    date: "Spring 2025",
    location: "Venue To Be Announced",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
];

const EventCard = ({ event }: { event: (typeof events)[0] }) => (
  <motion.div 
    className="bg-white text-black group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold tracking-tighter">{event.title}</h3>
      <p className="mt-2 text-muted-foreground">{event.date} • {event.location}</p>
      <Link href={event.link} className="mt-6 inline-block font-semibold text-lg underline-animate text-primary">
        Learn More
      </Link>
    </div>
  </motion.div>
);

export function EventsSection() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Upcoming Tournaments & Events
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}