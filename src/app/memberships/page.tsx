import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { MembershipsHero } from "@/components/memberships/hero";
import { SponsorMemberships } from "@/components/memberships/sponsor-memberships";
import { TeamMemberships } from "@/components/memberships/team-memberships";
import { SponsorTeamMemberships } from "@/components/memberships/sponsor-team-memberships";

export default function MembershipsPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <MembershipsHero />
        <SponsorMemberships />
        <TeamMemberships />
        <SponsorTeamMemberships />
      </main>
      <Footer />
    </>
  );
}