import { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { GolfLessonsHero } from "@/components/golf-lessons/hero";
import { GolfLessonsCoach } from "@/components/golf-lessons/coach";
import { GolfLessonsOverview } from "@/components/golf-lessons/overview";
import { GolfLessonsPricing } from "@/components/golf-lessons/pricing";
import { GolfLessonsTestimonials } from "@/components/golf-lessons/testimonials";
import { GolfLessonsFinalCta } from "@/components/golf-lessons/final-cta";

export const metadata: Metadata = {
  title: "Golf Lessons Kansas City | Private Instruction by Loading Golf",
  description: "Looking for golf lessons in Kansas City? Serving Kingdom KC proudly partners with Loading Golf and Coach Kobe for expert, faith-based golf instruction at Golf Ranch Shoal Creek.",
};

export default function GolfLessonsPage() {
  return (
    <>
      <Header variant="transparent" />
      <main className="bg-gray-50">
        <GolfLessonsHero />
        <GolfLessonsCoach />
        <GolfLessonsOverview />
        <GolfLessonsPricing />
        <GolfLessonsTestimonials />
        <GolfLessonsFinalCta />
      </main>
      <Footer />
    </>
  );
}