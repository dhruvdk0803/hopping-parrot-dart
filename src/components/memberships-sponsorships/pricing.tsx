"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const sponsorPackages = [
  {
    name: "Sponsorship 6 Package",
    investment: "$225 per month / 12 months",
    desc: "Participate in 6 Serving Kingdom KC events of your choice in 2026/2027.",
    highlight: false
  },
  {
    name: "Sponsorship 3 Package",
    investment: "$125 per month / 12 months",
    desc: "Participate in 3 Serving Kingdom KC events of your choice in 2026/2027.",
    highlight: false
  }
];

const teamPackages = [
  {
    name: "Team 6 Package",
    investment: "$400 per month / 12 months",
    desc: "Lock in your 4-person team for 6 events in 2026/2027.",
    highlight: false
  },
  {
    name: "Team 3 Package",
    investment: "$250 per month / 12 months",
    desc: "Secure your team of 4 players for 3 events in 2026/2027.",
    highlight: false
  }
];

const sponsorTeamPackages = [
  {
    name: "Sponsor + Team 6 Package",
    investment: "$700 per month / 12 months",
    desc: "Includes sponsor marketing + a 4-person team in 6 events.",
    highlight: true
  },
  {
    name: "Sponsor + Team 3 Package",
    investment: "$400 per month / 12 months",
    desc: "Includes sponsor marketing + a 4-person team in 3 events.",
    highlight: false
  }
];

const PricingCard = ({ pkg, index }: { pkg: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className={`relative border p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white ${
      pkg.highlight ? 'border-primary shadow-lg' : 'border-black'
    }`}
  >
    {pkg.highlight && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-6">
        Maximum Impact
      </div>
    )}
    <h3 className="text-lg font-bold uppercase tracking-widest text-muted-foreground mb-6">
      {pkg.name}
    </h3>
    <div className="mb-6">
      <span className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
        {pkg.investment.split(' ')[0]}
      </span>
      <span className="block text-sm text-muted-foreground mt-2 font-bold uppercase tracking-wider">
        {pkg.investment.replace(pkg.investment.split(' ')[0] + ' ', '')}
      </span>
    </div>
    <p className="text-base leading-relaxed mb-10 flex-grow text-gray-700">
      {pkg.desc}
    </p>
    <Button asChild className="w-full h-14 rounded-none bg-primary hover:bg-black text-white text-base uppercase tracking-widest font-bold transition-colors mt-auto">
      <a href="/store" target="_blank" rel="noopener noreferrer">Subscribe</a>
    </Button>
  </motion.div>
);

export function PricingSections() {
  return (
    <div id="pricing" className="bg-gray-50">
      {/* Sponsor Memberships */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
              Sponsor Memberships (Marketing & Visibility)
            </h2>
            <p className="text-lg text-muted-foreground">
              Market your business across Serving Kingdom KC events while supporting local nonprofits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorPackages.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} />)}
          </div>
        </div>
      </section>

      {/* Team Memberships */}
      <section className="py-20 sm:py-24 bg-white border-y border-black/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
              Team Memberships (Golf & Networking)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamPackages.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} />)}
          </div>
        </div>
      </section>

      {/* Sponsor + Team Memberships */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
              Sponsor with Team Memberships (Maximum Impact)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorTeamPackages.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} />)}
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-20 sm:py-24 bg-black text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border border-white/20 p-8 md:p-16 text-center bg-white/5 hover:border-primary transition-colors duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">
              Custom Sponsor Membership
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Looking for a tailored approach? We offer custom sponsorship packages designed to meet your specific marketing and philanthropic goals. Whether you want to be a title sponsor for a specific event or create a unique brand activation on the course, our team will work with you to maximize your impact and visibility.
            </p>
            <Button asChild className="w-full sm:w-auto h-14 px-12 rounded-none bg-primary hover:bg-white hover:text-black text-white text-base uppercase tracking-widest font-bold transition-colors">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}