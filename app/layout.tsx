import React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Saqib Ali | Business & Economics",
  description:
    "Business Administration graduate pursuing MSc in Business & Economics. Turning complex data into clear insights for policy, operations, and business decisions.",
  keywords: [
    "Business Administration",
    "Economics",
    "Supply Chain",
    "Data Analysis",
    "Policy Research",
  ],
  authors: [{ name: "Saqib Ali" }],
  openGraph: {
    title: "Saqib Ali | Business & Economics",
    description:
      "Business Administration graduate pursuing MSc in Business & Economics. Turning complex data into clear insights.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
