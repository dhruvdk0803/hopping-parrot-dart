"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GolfLessonsFinalCta() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Get Ready for Your Next Charity Golf Tournament
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            If you are planning to participate in an upcoming Kansas City charity golf event hosted by Serving Kingdom KC, there is no better way to prepare than by booking a session with Loading Golf. Build your confidence, improve your swing, and get ready to hit the fairway for a great cause.
          </p>
          <Button asChild className="w-full sm:w-auto h-14 px-12 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://loadinggolf.com/" target="_blank" rel="noopener noreferrer">
              Visit LoadingGolf.com to Get Started
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-12 border-t border-black/10"
        >
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://loadinggolf.com/" target="_blank" rel="noopener noreferrer">
              Book a Lesson at LoadingGolf.com
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/tournaments">
              View Upcoming Charity Tournaments
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/official-partners">
              Meet Our Official Partners
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}