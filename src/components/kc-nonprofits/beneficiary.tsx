"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function KcNonprofitsBeneficiary() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            Become a Beneficiary Organization
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
            Are you a 501(c)(3) organization looking for nonprofit fundraising help in Kansas City?
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Serving Kingdom KC takes the stress out of event planning. We handle the logistics, marketing, and execution of premium charity golf tournaments, allowing your team to focus on what you do best: serving the community. Our proven model helps nonprofits increase their event net profits by up to 5x.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            If you are interested in becoming a beneficiary of an upcoming Serving Kingdom KC event, we want to hear from you.
          </p>
          <Button asChild className="h-14 px-8 rounded-none bg-black hover:bg-primary text-white uppercase tracking-widest font-bold transition-colors duration-300">
            <Link href="/contact">Apply to be a Beneficiary</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}