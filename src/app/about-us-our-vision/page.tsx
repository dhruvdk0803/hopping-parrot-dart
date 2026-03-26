import { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { AboutHero } from "@/components/about/hero";
import { AboutStory } from "@/components/about/story";
import { AboutVision } from "@/components/about/vision";
import { AboutServices } from "@/components/about/services";
import { AboutJoinMission } from "@/components/about/join-mission";
import { AboutFinalCta } from "@/components/about/final-cta";

export const metadata: Metadata = {
  title: "About Serving Kingdom KC | Support Local Nonprofits KC",
  description: "Learn about Serving Kingdom KC, a faith-based nonprofit fundraising organization. We help Kansas City charities exceed their goals through charity golf tournaments and events.",
};

export default function AboutUsOurVisionPage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutVision />
        <AboutServices />
        <AboutJoinMission />
        <AboutFinalCta />
      </main>
      <Footer />
    </>
  );
}