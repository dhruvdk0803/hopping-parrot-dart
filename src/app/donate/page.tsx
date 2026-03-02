import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { DonateHero } from "@/components/donate/hero";
import { MissionMessage } from "@/components/donate/mission-message";
import { DonationModule } from "@/components/donate/donation-module";
import { WhyItMatters } from "@/components/donate/why-it-matters";

export default function DonatePage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <DonateHero />
        <MissionMessage />
        <DonationModule />
        <WhyItMatters />
      </main>
      <Footer />
    </>
  );
}