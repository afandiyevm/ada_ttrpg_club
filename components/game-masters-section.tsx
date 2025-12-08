import { User } from "lucide-react"

export function GameMastersSection() {
  const gameMasters = [
    {
      id: 1,
      name: "Alex Rivers",
      specialty: "D&D 5e Master",
      bio: "Specializing in high-fantasy campaigns with intricate storytelling and challenging encounters.",
    },
    {
      id: 2,
      name: "Jordan Blake",
      specialty: "Pathfinder Expert",
      bio: "Brings complex mechanics and tactical combat to life with detailed world-building.",
    },
    {
      id: 3,
      name: "Casey Mitchell",
      specialty: "Horror & Mystery",
      bio: "Creates atmospheric experiences for Call of Cthulhu and other horror-themed adventures.",
    },
    {
      id: 4,
      name: "Morgan Cross",
      specialty: "Campaign Creator",
      bio: "Designs custom campaigns tailored to player interests and group dynamics.",
    },
  ]

  return (
    <section id="game-masters" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Our Game Masters</h2>
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-secondary/50" />
          <div className="w-2 h-2 bg-accent rotate-45" />
          <div className="h-px w-24 bg-secondary/50" />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Meet the talented Game Masters who bring unforgettable worlds and stories to life at our club.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameMasters.map((gm) => (
            <div
              key={gm.id}
              className="group relative rounded-lg bg-card border border-border overflow-hidden hover:border-secondary transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4 relative overflow-hidden">
                <User className="h-20 w-20 text-muted-foreground group-hover:text-secondary transition-colors" />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{gm.name}</h3>
                <p className="text-sm text-secondary font-semibold mb-3">{gm.specialty}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{gm.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
