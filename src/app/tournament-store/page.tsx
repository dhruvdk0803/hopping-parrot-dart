import { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { StoreHero } from "@/components/tournament-store/hero";
import { StoreIntro } from "@/components/tournament-store/intro";
import { StorePackages } from "@/components/tournament-store/packages";
import { StoreGifts } from "@/components/tournament-store/gifts";
import { StoreSignage } from "@/components/tournament-store/signage";
import { StoreFinalCta } from "@/components/tournament-store/final-cta";

export const metadata: Metadata = {
  title: "Charity Golf Tournament Store | Serving Kingdom KC",
  description: "Shop the Serving Kingdom KC Tournament Store for golf event packages, hole-in-one contests, player gifts, and custom signage to elevate your charity golf tournament.",
};

export default function TournamentStorePage() {
  return (
    <>
      <Header variant="transparent" />
      <main className="bg-gray-50">
        <StoreHero />
        <StoreIntro />
        <StorePackages />
        <StoreGifts />
        <StoreSignage />
        <StoreFinalCta />
      </main>
      <Footer />
    </>
  );
}