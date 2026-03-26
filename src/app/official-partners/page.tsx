import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { OfficialPartnersHero } from "@/components/official-partners/hero";
import { OfficialPartnersIntro } from "@/components/official-partners/intro";
import { OfficialPartnersList } from "@/components/official-partners/partners";

export default function OfficialPartnersPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <OfficialPartnersHero />
        <OfficialPartnersIntro />
        <OfficialPartnersList />
      </main>
      <Footer />
    </>
  );
}