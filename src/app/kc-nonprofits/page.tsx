import { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { KcNonprofitsHero } from "@/components/kc-nonprofits/hero";
import { KcNonprofitsMission } from "@/components/kc-nonprofits/mission";
import { KcNonprofitsPartners } from "@/components/kc-nonprofits/partners";
import { KcNonprofitsEvents } from "@/components/kc-nonprofits/events";
import { KcNonprofitsDiscover } from "@/components/kc-nonprofits/discover";
import { KcNonprofitsBeneficiary } from "@/components/kc-nonprofits/beneficiary";
import { KcNonprofitsFinalCta } from "@/components/kc-nonprofits/final-cta";

export const metadata: Metadata = {
  title: "Support Local Nonprofits KC | Kansas City Charities Directory",
  description: "Discover and support local nonprofits in KC. Serving Kingdom KC partners with Kansas City charities to help them exceed their fundraising goals through charity golf events.",
};

export default function KcNonprofitsPage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <KcNonprofitsHero />
        <KcNonprofitsMission />
        <KcNonprofitsPartners />
        <KcNonprofitsEvents />
        <KcNonprofitsDiscover />
        <KcNonprofitsBeneficiary />
        <KcNonprofitsFinalCta />
      </main>
      <Footer />
    </>
  );
}