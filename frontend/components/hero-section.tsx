import { Sparkles, Dice6 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23704214' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 text-secondary/30">
        <OrnamentCorner />
      </div>
      <div className="absolute top-24 right-8 text-secondary/30 rotate-90">
        <OrnamentCorner />
      </div>
      <div className="absolute bottom-8 left-8 text-secondary/30 -rotate-90">
        <OrnamentCorner />
      </div>
      <div className="absolute bottom-8 right-8 text-secondary/30 rotate-180">
        <OrnamentCorner />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">ada university</span>
          <Sparkles className="h-5 w-5 text-accent" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight text-balance">
          TTRPG Club
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-secondary/50" />
          <Dice6 className="h-6 w-6 text-secondary" />
          <div className="h-px w-16 bg-secondary/50" />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Embark on legendary adventures. Roll the dice. Forge your destiny.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-serif"
            asChild
          >
            <a href="#join">Begin Your Quest</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg font-serif bg-transparent text-foreground"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function OrnamentCorner() {
  return (
    <svg className="text-foreground" width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
      <path className="text-foreground" d="M0 0v20h4v-16h16v-4h-20zM0 40v-10h4v10h-4zM40 0h-10v4h10v-4zM20 20l10 10-10 10-10-10 10-10z" />
    </svg>
  )
}
