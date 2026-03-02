import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { TournamentsHero } from "@/components/tournaments/hero";
import { TournamentsTimeline } from "@/components/tournaments/timeline";

export default function TournamentsPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <TournamentsHero />
        <TournamentsTimeline />
      </main>
      <Footer />
    </>
  );
}