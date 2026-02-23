import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Vision } from "@/components/landing/vision";
import { Events } from "@/components/landing/events";
import { PartnerCTA } from "@/components/landing/partner-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Vision />
        <Events />
        <PartnerCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}