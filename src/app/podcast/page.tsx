import { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { PodcastHero } from "@/components/podcast/hero";
import { PodcastTopics } from "@/components/podcast/topics";
import { PodcastEpisodes } from "@/components/podcast/episodes";
import { PodcastHost } from "@/components/podcast/host";
import { PodcastJoin } from "@/components/podcast/join";
import { PodcastFinalCta } from "@/components/podcast/final-cta";

export const metadata: Metadata = {
  title: "Serving Kingdom KC Podcast | Nonprofit KC",
  description: "Watch the Serving Kingdom KC podcast the Bob & Jeff show. Join Bob Robinson and Jeff McCubbins on faith, leadership, and community giving in Kansas City.",
};

export default function PodcastPage() {
  return (
    <>
      <Header variant="transparent" />
      <main className="bg-gray-50">
        <PodcastHero />
        <PodcastTopics />
        <PodcastEpisodes />
        <PodcastHost />
        <PodcastJoin />
        <PodcastFinalCta />
      </main>
      <Footer />
    </>
  );
}