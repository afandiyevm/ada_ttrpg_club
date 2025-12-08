import { ImageIcon } from "lucide-react"

export function GallerySection() {
  const galleryItems = [
    { id: 1, title: "Epic Battle", description: "An intense dungeon encounter" },
    { id: 2, title: "Character Creation", description: "New adventurers joining the party" },
    { id: 3, title: "Treasure Hunt", description: "The party discovers hidden gold" },
    { id: 4, title: "Dragon's Lair", description: "Face-off with a fearsome beast" },
    { id: 5, title: "Tavern Meeting", description: "Planning the next adventure" },
    { id: 6, title: "Victory Celebration", description: "Triumph after a tough campaign" },
  ]

  return (
    <section id="gallery" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Gaming Gallery</h2>
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-secondary/50" />
          <div className="w-2 h-2 bg-accent rotate-45" />
          <div className="h-px w-24 bg-secondary/50" />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Moments captured from our epic gaming sessions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-background border border-border hover:border-secondary transition-all duration-300 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
