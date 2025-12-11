import { Users, BookOpen, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Welcoming Community",
    description:
      "Whether you're a seasoned dungeon master or have never rolled a d20, our doors are open to all adventurers.",
  },
  {
    icon: BookOpen,
    title: "Learn & Play",
    description:
      "We offer tutorials for beginners and host campaigns for experienced players. Everyone finds their table.",
  },
  {
    icon: Heart,
    title: "Make Friends",
    description: "Form lasting bonds with fellow students who share your passion for storytelling and adventure.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">About Our Guild</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-border" />
            <div className="w-2 h-2 bg-secondary rotate-45" />
            <div className="h-px w-24 bg-border" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The ADA TTRPG Club is a student-led tabletop role-playing game club at ADA University. We bring together students from all faculties to explore fantastical worlds, craft compelling stories, and experience the magic of collaborative storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border p-8 text-center group hover:border-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
