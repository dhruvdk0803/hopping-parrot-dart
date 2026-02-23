import { CtaSection } from "@/components/landing/cta-section";
import { EventsSection } from "@/components/landing/events-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { VisionSection } from "@/components/landing/vision-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <EventsSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}