import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GamesSection } from "@/components/games-section"
import { ScheduleSection } from "@/components/schedule-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { GallerySection } from "@/components/gallery-section"
import { GameMastersSection } from "@/components/game-masters-section"
import { BecomeGMSection } from "@/components/become-gm-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <ScheduleSection />
      <GallerySection />
      <GameMastersSection />
      <BecomeGMSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
