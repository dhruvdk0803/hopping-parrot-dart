"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function FounderStory() {
  return (
    <motion.section
      className="bg-white text-black py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1887&auto=format&fit=crop"
              alt="Portrait of Jeff McCubbins, Founder"
              width={500}
              height={600}
              className="object-cover w-full h-full max-h-[600px] grayscale"
            />
          </div>
          <div className="md:col-span-7 flex">
            <div className="w-1 bg-primary mr-8 flex-shrink-0" />
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Beginning</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  My story of Serving Kingdom KC really began in 2018. I was running a small business and felt a strong calling to use my skills for something more significant. I saw so many incredible nonprofits in Kansas City doing life-changing work, but struggling to fund their missions effectively.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The traditional fundraising models seemed broken, often resulting in high costs and low net returns for the organizations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Turning Point</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In January 2025, after years of planning and consulting with nonprofit leaders, I decided to take a leap of faith. I hosted the first "Serving Kingdom" golf tournament with a single beneficiary. We focused on creating a premium, purpose-driven experience, not just another charity golf event. The result was astounding. We didn't just raise money; we built a community and delivered a net return that was five times what the nonprofit had ever achieved on their own. That was the moment I knew this was my path.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is to help all nonprofits, big or small, maximize their fundraising potential through world-class events. We handle the logistics, sponsorship, and execution, allowing them to focus on what they do best: serving our community. We believe that when we unite for a common purpose, we can create a kingdom of service that transforms Kansas City for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}