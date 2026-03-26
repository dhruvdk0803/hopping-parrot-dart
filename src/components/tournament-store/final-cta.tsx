"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StoreFinalCta() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black text-center border-t border-black/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
            Ready to Upgrade Your Event?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            If you are ready to make your next nonprofit golf tournament the best one yet, explore our full catalog at the Serving Kingdom KC store on Perfect Golf Event. You can request a free virtual proof on any item to see exactly how your sponsor logos will look before you commit.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button asChild className="w-full sm:w-auto h-16 px-12 rounded-none bg-primary hover:bg-black text-white text-lg uppercase tracking-widest font-bold transition-colors duration-300">
              <a href="https://perfectgolfevent.com/home-skkc/" target="_blank" rel="noopener noreferrer">
                Shop the Serving Kingdom KC Store Now
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mt-4">
              <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
                <a href="https://perfectgolfevent.com/home-skkc/" target="_blank" rel="noopener noreferrer">
                  Browse the Tournament Store
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
                <a href="https://perfectgolfevent.com/home-skkc/" target="_blank" rel="noopener noreferrer">
                  Request a Free Virtual Proof
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
                <Link href="/tournaments">View Upcoming Tournaments</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
                <Link href="/memberships-sponsorships">Learn About Sponsorships</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold transition-colors duration-300">
                <Link href="/contact">Contact Us for Event Planning Help</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}