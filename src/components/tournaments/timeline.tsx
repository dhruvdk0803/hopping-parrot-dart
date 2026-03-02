"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    id: 1,
    date: "March 28th, 2026",
    season: "Spring",
    nonprofit: "Varsity Skateboarding Organization",
    eventName: "Golf Tournament",
    location: "Golf Ranch Shoal Creek",
    time: "Shotgun Start 12:00pm",
    hasLink: true,
    link: "#"
  },
  {
    id: 2,
    date: "April 27th, 2026",
    season: "Spring",
    nonprofit: "Blue Springs Young Life",
    eventName: "Golf Tournament",
    location: "Adams Pointe Golf Club",
    time: "Shotgun Start 8:00am",
    hasLink: true,
    link: "#"
  },
  {
    id: 3,
    date: "May 8th, 2026",
    season: "Spring",
    nonprofit: "Valor Ranch",
    eventName: "Golf Tournament",
    location: "Paradise Pointe Golf Complex",
    hasLink: false
  },
  {
    id: 4,
    date: "May 11th, 2026",
    season: "Spring",
    nonprofit: "Team Central Wrestling Club",
    eventName: "5th Annual Dave and Kristi Gleason Memorial Scramble Golf Tournament",
    location: "Staley Farms Golf Club",
    hasLink: true,
    link: "#"
  },
  {
    id: 5,
    date: "June 8th, 2026",
    season: "Summer",
    nonprofit: "Northland Workforce Development Center",
    eventName: "Golf Tournament",
    location: "Staley Farms Golf Club",
    hasLink: false
  },
  {
    id: 6,
    date: "July 2026",
    season: "Summer",
    nonprofit: "E6 Ministries",
    eventName: "Golf Tournament",
    location: "Golf Ranch Shoal Creek",
    time: "Shotgun Start 9:00am",
    hasLink: false
  },
  {
    id: 7,
    date: "August 2026",
    season: "Summer",
    nonprofit: "Liberty Women’s Clinic",
    eventName: "Golf Tournament",
    location: "Excelsior Springs Golf Course",
    hasLink: false
  },
  {
    id: 8,
    date: "September 11th, 2026",
    season: "Fall",
    nonprofit: "People Of All Communities (P.O.A.C.)",
    eventName: "Golf Tournament",
    location: "Paradise Pointe Golf Complex",
    hasLink: false
  },
  {
    id: 9,
    date: "September 21st, 2026",
    season: "Fall",
    nonprofit: "LevelUp Kids, INC.",
    eventName: "Golf Tournament",
    location: "Shoal Creek Golf Course",
    hasLink: false
  },
  {
    id: 10,
    date: "October 5th, 2026",
    season: "Fall",
    nonprofit: "Parkville Women’s Clinic",
    eventName: "Golf Tournament",
    location: "Staley Farms Golf Club",
    hasLink: false
  },
  {
    id: 11,
    date: "Date – TBD",
    season: "TBD",
    nonprofit: "All Nations Kansas City",
    eventName: "Golf Tournament",
    location: "Golf Ranch Shoal Creek",
    hasLink: false
  },
  {
    id: 12,
    date: "Date – TBD",
    season: "TBD",
    nonprofit: "Help Our Heroes",
    eventName: "Golf Tournament",
    location: "Location TBD",
    hasLink: false
  }
];

const filters = ["All", "Spring", "Summer", "Fall", "TBD"];

export function TournamentsTimeline() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents = events.filter(event => 
    activeFilter === "All" ? true : event.season === activeFilter
  );

  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-black/10 pb-6"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors duration-300 relative ${
                activeFilter === filter ? "text-primary" : "text-muted-foreground hover:text-black"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-4 md:gap-12 items-start group"
              >
                {/* Date Column (Desktop) */}
                <div className="hidden md:block md:w-1/4 shrink-0 pt-8 text-right">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {event.date}
                  </h3>
                </div>

                {/* Event Card */}
                <div className="w-full md:w-3/4 border border-black bg-white relative p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20" />
                  
                  {/* Date (Mobile Only) */}
                  <h3 className="md:hidden text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    {event.date}
                  </h3>

                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {event.nonprofit}
                  </h4>
                  <p className="text-lg md:text-xl mb-4">
                    {event.eventName}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-8">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                    {event.time && (
                      <>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                      </>
                    )}
                  </div>

                  {event.hasLink && (
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto h-[52px] px-8 rounded-none border-black text-black hover:bg-primary hover:border-primary hover:text-white uppercase tracking-widest font-bold transition-colors duration-300"
                    >
                      <Link href={event.link!}>Learn More Here</Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredEvents.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-muted-foreground"
            >
              No events found for this season.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}