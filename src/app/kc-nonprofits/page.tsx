import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { KcNonprofitsHero } from "@/components/kc-nonprofits/hero";
import { DirectorySection } from "@/components/kc-nonprofits/directory-section";
import { AddOrgSection } from "@/components/kc-nonprofits/add-org-section";

export default function KcNonprofitsPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <KcNonprofitsHero />
        <DirectorySection />
        <AddOrgSection />
      </main>
      <Footer />
    </>
  );
}