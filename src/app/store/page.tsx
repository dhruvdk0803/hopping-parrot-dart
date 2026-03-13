import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { StoreHero } from "@/components/store/hero";
import { StoreContent } from "@/components/store/store-content";

export default function StorePage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <StoreHero />
        <StoreContent />
      </main>
      <Footer />
    </>
  );
}