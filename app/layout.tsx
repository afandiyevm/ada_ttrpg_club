import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Cinzel } from "next/font/google"
import "./globals.css"
import RootClientLayout from "./RootClientLayout"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "ADA TTRPG Club | Adventure Awaits",
  description:
    "Join the ADA TTRPG Club - Your gateway to epic tabletop adventures including Dungeons & Dragons, Pathfinder, and more!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${crimsonText.variable} ${cinzel.variable} font-sans antialiased`}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  )
}
