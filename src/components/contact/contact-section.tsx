"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-primary/30 pb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </p>
                <a 
                  href="mailto:servingkingdomkc@gmail.com" 
                  className="text-xl md:text-2xl font-medium hover:text-primary transition-colors"
                >
                  servingkingdomkc@gmail.com
                </a>
              </div>
              
              <div className="border-b border-primary/30 pb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Phone
                </p>
                <a 
                  href="tel:+18165199450" 
                  className="text-xl md:text-2xl font-medium hover:text-primary transition-colors"
                >
                  (816) 519-9450
                </a>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg text-muted-foreground italic">
                We aim to respond within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="border border-black p-8 md:p-12 bg-white">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-widest mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full border-b border-black bg-transparent py-3 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-widest mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full border-b border-black bg-transparent py-3 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full border-b border-black bg-transparent py-3 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full border-b border-black bg-transparent py-3 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none resize-none min-h-[120px]"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full h-[52px] rounded-none bg-primary hover:bg-black text-white text-base uppercase tracking-widest font-bold transition-all duration-300 hover:scale-[1.02] mt-4"
                    >
                      Submit
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">Message Sent</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}