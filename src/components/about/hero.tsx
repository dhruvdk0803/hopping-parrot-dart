"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative text-white min-h-[90vh] flex items-center p-4 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1587174469332-3TT5b48cad33?q=80&w=2127&auto=format&fit=crop"
          alt="Jeff McCubbins, founder of Serving Kingdom KC, at a charity golf tournament in Kansas City"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability while keeping the image dynamic */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10" />
      </div>
      
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tighter uppercase mb-8 leading-[1.05]">
            Empowering Kansas City Charities Through Purpose-Driven Events
          </h1>
          
          <div className="w-24 h-2 bg-primary mb-10"></div>
          
          <div className="max-w-2xl space-y-6 mb-12">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              Serving Kingdom KC is a 501(c)(3) nonprofit organization dedicated to helping other local nonprofits exceed their fundraising goals. We believe in the power of community, connection, and Kingdom giving. By organizing high-impact charity golf tournaments, galas, silent auctions, and raffles, we provide a platform where generosity leads to true community transformation.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
              When you partner with us or participate in our events, you are directly investing in the future of our city and helping to support local nonprofits in KC. Our mission is simple: to ensure that the organizations doing the most vital work in our community have the financial resources they need to thrive and expand their services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto h-14 px-8 rounded-none bg-primary hover:bg-white hover:text-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
              <Link href="/tournaments">View Upcoming Tournaments</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest font-bold transition-colors duration-300 bg-transparent">
              <Link href="/memberships">Explore Sponsorship Opportunities</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}