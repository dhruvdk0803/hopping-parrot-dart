"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Tots",
    age: "Ages 6-12",
    single: "$50.00",
    pack: "$185.00"
  },
  {
    name: "Youngsters",
    age: "Ages 13-17",
    single: "$60.00",
    pack: "$225.00"
  },
  {
    name: "Adults",
    age: "Ages 18+",
    single: "$70.00",
    pack: "$265.00"
  }
];

export function GolfLessonsPricing() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-y border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Golf Instruction Pricing & Packages
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Loading Golf offers age-based lesson tiers to ensure every player gets the right level of attention. You can book a single lesson or save by purchasing a four-pack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-gray-50 border border-black/10 p-8 flex flex-col text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold uppercase tracking-widest text-black mb-2">
                {tier.name}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-8">
                {tier.age}
              </p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Single Lesson</p>
                  <p className="text-4xl font-bold tracking-tighter">{tier.single}</p>
                </div>
                <div className="w-12 h-px bg-black/10 mx-auto"></div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">4-Lesson Package</p>
                  <p className="text-4xl font-bold tracking-tighter">{tier.pack}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-lg font-medium text-gray-800 italic">
            Note: Range balls are not included. Buckets are $25 per lesson.
          </p>
          
          <Button asChild className="w-full sm:w-auto h-14 px-12 rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <a href="https://loadinggolf.com/" target="_blank" rel="noopener noreferrer">
              Book Your Lesson with Loading Golf
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}