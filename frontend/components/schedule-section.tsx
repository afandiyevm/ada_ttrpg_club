import { Calendar, Clock, MapPin } from "lucide-react"
import scheduleData from "@/data/schedule.json"

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Meeting Schedule</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-border" />
            <div className="w-2 h-2 bg-secondary rotate-45" />
            <div className="h-px w-24 bg-border" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for regular gaming sessions throughout the week. All skill levels welcome!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="font-serif text-xl font-semibold text-foreground">{item.day}</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.event}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
