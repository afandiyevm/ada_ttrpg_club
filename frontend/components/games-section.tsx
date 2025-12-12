import Image from "next/image"

const games = [
  {
    name: "Dungeons & Dragons",
    description: "The world's most popular TTRPG. Slay dragons, explore dungeons, and become legends.",
    image: "/dungeons-and-dragons-fantasy-art-dark-dungeon-with.jpg",
  },
  {
    name: "Pathfinder",
    description: "A rich tactical experience with deep character customization and epic storylines.",
    image: "/pathfinder-fantasy-knights-and-mages-battle-scene.jpg",
  },
  {
    name: "Call of Cthulhu",
    description: "Investigate cosmic horrors in this classic investigative horror game.",
    image: "/call-of-cthulhu-lovecraft-horror-dark-mysterious.jpg",
  },
  {
    name: "Vampire: The Masquerade",
    description: "Navigate the politics and intrigue of the vampire underworld.",
    image: "/vampire-gothic-dark-castle-moonlight-atmospheric.jpg",
  },
  {
    name: "Cyberpunk RED",
    description: "Live on the edge in a dystopian future of chrome and neon.",
    image: "/cyberpunk-neon-city-night-futuristic-dark.jpg",
  },
  {
    name: "& Many More!",
    description: "We're always exploring new systems. Suggest your favorites!",
    image: "/various-dice-d20-tabletop-rpg-fantasy-warm-lightin.jpg",
  },
]

export function GamesSection() {
  return (
    <section id="games" className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Games We Play</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-border" />
            <div className="w-2 h-2 bg-secondary rotate-45" />
            <div className="h-px w-24 bg-border" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From high fantasy to cosmic horror, we explore countless worlds and systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-card border border-border overflow-hidden group hover:border-secondary/50 transition-all hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{game.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
