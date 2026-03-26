import { Metadata } from "next";
import { Header } from "../../components/landing/header";
import { Footer } from "../../components/landing/footer";
import { MembershipsHero } from "../../components/memberships-sponsorships/hero";
import { WhySponsor } from "../../components/memberships-sponsorships/why-sponsor";
import { PricingSections } from "../../components/memberships-sponsorships/pricing";
import { FinalCta } from "../../components/memberships-sponsorships/final-cta";

export const metadata: Metadata = {
  title: "Golf Tournament Sponsorships & Memberships | Serving Kingdom KC",
  description: "Secure your golf tournament sponsorships and memberships in Kansas City. Elevate your brand, entertain clients, and support local nonprofits with Serving Kingdom KC.",
};

export default function MembershipsSponsorshipsPage() {
  return (
    <>
      <Header variant="transparent" />
      <main className="bg-gray-50">
        <MembershipsHero />
        <WhySponsor />
        <PricingSections />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}