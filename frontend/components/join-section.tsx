"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, MessageCircle, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JoinSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="join" className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Join the Adventure</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-24 bg-primary-foreground/30" />
          <div className="w-2 h-2 bg-accent rotate-45" />
          <div className="h-px w-24 bg-primary-foreground/30" />
        </div>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          Ready to begin your journey? Connect with us through any of these channels and become part of our adventuring
          guild!
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-accent">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">Welcome to the guild, adventurer!</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-serif min-w-[200px]"
            >
              <a href="https://chat.whatsapp.com/YOUR_GROUP_ID" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Group
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-serif min-w-[200px]"
            >
              <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-serif min-w-[200px]"
            >
              <a href="mailto:ttrpg@university.edu">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        )}

        <p className="text-primary-foreground/60 mt-10 text-sm">
          Join our WhatsApp group for announcements, or follow us on Instagram for updates and highlights!
        </p>
      </div>
    </section>
  )
}
