import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ContactHero } from "@/components/contact/hero";
import { ContactSection } from "@/components/contact/contact-section";

export default function ContactPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}