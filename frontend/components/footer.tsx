import { Sword } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sword className="h-5 w-5 text-secondary" />
          <span className="font-serif font-semibold text-foreground">ADA TTRPG Club</span>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} ADA TTRPG Club. All rights reserved. May your rolls be ever in your favor.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-secondary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
