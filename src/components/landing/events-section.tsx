"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Varsity Skateboarding Organization",
    date: "March 28th, 2026",
    location: "Golf Ranch Shoal Creek",
    image: "https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2670&auto=format&fit=crop",
    link: "/tournaments",
  },
  {
    title: "Blue Springs Young Life",
    date: "April 27th, 2026",
    location: "Adams Pointe Golf Club",
    image: "https://images.unsplash.com/photo-1556762029-3b4d3f91e72d?q=80&w=2670&auto=format&fit=crop",
    link: "/tournaments",
  },
  {
    title: "Valor Ranch",
    date: "May 8th, 2026",
    location: "Paradise Pointe Golf Complex",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
    link: "/tournaments",
  },
];

const EventCard = ({ event, delay }: { event: (typeof events)[0], delay: number }) => (
  <motion.div 
    className="bg-white text-black group border border-black/10 hover:border-black transition-colors duration-300 flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    <div className="overflow-hidden relative h-64">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
    </div>
    <div className="p-8 flex flex-col flex-grow relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{event.date}</p>
      <h3 className="text-2xl font-bold tracking-tight mb-2">{event.title}</h3>
      <p className="text-muted-foreground mb-8 flex-grow">{event.location}</p>
      <Link href={event.link} className="inline-block font-bold text-sm uppercase tracking-widest underline-animate text-black w-fit">
        Learn More
      </Link>
    </div>
  </motion.div>
);

export function EventsSection() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Upcoming Tournaments
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} delay={index * 0.15} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">View Full Event Calendar</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}