import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { TribeHero } from "@/components/tribe/hero";
import { TribeIntro } from "@/components/tribe/intro";
import { TribePartners } from "@/components/tribe/partners";

export default function TribePage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <TribeHero />
        <TribeIntro />
        <TribePartners />
      </main>
      <Footer />
    </>
  );
}