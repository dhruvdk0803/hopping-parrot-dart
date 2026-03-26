"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen bg-black">
      {/* Left Side: Content */}
      <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-32 pb-20 lg:py-32 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tighter uppercase mb-8 leading-[1.05]">
            Empowering Kansas City Charities Through Purpose-Driven Events
          </h1>
          
          <div className="w-20 h-1.5 bg-primary mb-10"></div>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
              Serving Kingdom KC is a 501(c)(3) nonprofit organization dedicated to helping other local nonprofits exceed their fundraising goals. We believe in the power of community, connection, and Kingdom giving. By organizing high-impact charity golf tournaments, galas, silent auctions, and raffles, we provide a platform where generosity leads to true community transformation.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
              When you partner with us or participate in our events, you are directly investing in the future of our city and helping to support local nonprofits in KC. Our mission is simple: to ensure that the organizations doing the most vital work in our community have the financial resources they need to thrive and expand their services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button asChild className="h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300 w-full sm:w-auto">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent w-full sm:w-auto">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent w-full sm:w-auto">
              <Link href="/memberships">Explore Sponsorship Opportunities</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-[45%] xl:w-[50%] relative min-h-[50vh] lg:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop"
          alt="Jeff McCubbins, founder of Serving Kingdom KC, at a charity golf tournament in Kansas City"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle inner shadow to blend the edge on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50 hidden lg:block" />
      </div>
    </section>
  );
}