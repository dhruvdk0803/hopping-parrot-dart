import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { VisionSection } from "@/components/landing/vision-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { EventsSection } from "@/components/landing/events-section";
import { MembershipsPreview } from "@/components/landing/memberships-preview";
import { NonprofitsPreview } from "@/components/landing/nonprofits-preview";
import { TribePreview } from "@/components/landing/tribe-preview";
import { MediaPreview } from "@/components/landing/media-preview";
import { ShopPreview } from "@/components/landing/shop-preview";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <HowItWorks />
        <EventsSection />
        <MembershipsPreview />
        <NonprofitsPreview />
        <TribePreview />
        <MediaPreview />
        <ShopPreview />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}