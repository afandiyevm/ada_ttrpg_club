"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
