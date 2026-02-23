import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { VisionHero } from "@/components/vision/vision-hero";
import { FounderStory } from "@/components/vision/founder-story";
import { ImpactStatement } from "@/components/vision/impact-statement";
import { SignatureBlock } from "@/components/vision/signature-block";
import { DonateCta } from "@/components/vision/donate-cta";

export default function VisionPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-20">
        <VisionHero />
        <FounderStory />
        <ImpactStatement />
        <SignatureBlock />
        <DonateCta />
      </main>
      <Footer />
    </>
  );
}