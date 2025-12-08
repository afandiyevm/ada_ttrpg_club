"use client"

import type React from "react"
import { useState } from "react"
import { Wand2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BecomeGMSection() {
  const [formData, setFormData] = useState({ name: "", email: "", experience: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
      setFormData({ name: "", email: "", experience: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="become-gm" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Wand2 className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Want to Become a Game Master?
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-border" />
            <div className="w-2 h-2 bg-secondary rotate-45" />
            <div className="h-px w-24 bg-border" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always looking for new Game Masters to lead epic adventures. Whether you're experienced or completely
            new to GMing, we'll support your journey!
          </p>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">Why Become a GM?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Lead epic stories and shape player destinies",
              "Build a passionate gaming community",
              "Showcase your creativity and imagination",
              "Develop skills in worldbuilding and storytelling",
              "Get recognition and support from the club",
              "Access resources and GM guides",
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in becoming a Game Master? Send us an email and tell us about yourself!
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif">
            <a href="mailto:ttrpg@university.edu?subject=I%20want%20to%20become%20a%20Game%20Master!&body=Hi%2C%0A%0AI'm%20interested%20in%20becoming%20a%20Game%20Master%20for%20the%20ADA%20TTRPG%20Club.%0A%0AMy%20name%3A%20%0AMy%20experience%20level%3A%20%0AGames%20I'd%20like%20to%20run%3A%20%0A%0AThanks!">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us to Become a GM
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
