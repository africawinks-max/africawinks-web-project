import type React from "react"
import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
})

export const metadata: Metadata = {
  title: {
    default: "Africawinks | Authentic Walking Tours in Cape Town",
    template: "%s | Africawinks Walking Tours",
  },
  
  description:
    "Africawinks offers authentic, locally guided walking tours in Cape Town. Discover culture, history, hidden streets, and stories of Africa — and the whole world winks back.",

  keywords: [
    "Cape Town walking tours",
    "Africa walking tours",
    "Africawinks",
    "local guided tours Cape Town",
    "cultural walking tours South Africa",
    "historical tours Cape Town",
    "city walking tours Africa",
    "sustainable tourism Cape Town",
    "authentic African experiences",
  ],

  authors: [{ name: "Africawinks" }],
  creator: "Africawinks",
  publisher: "Africawinks",

  metadataBase: new URL("https://www.africawinks.co.za"),

  openGraph: {
    title: "Africawinks | Authentic Walking Tours in Cape Town",
    description:
      "Walk Cape Town through the eyes of locals. Africawinks delivers immersive walking tours celebrating African culture, history, and stories.",
    url: "https://www.africawinks.co.za",
    siteName: "Africawinks",
    images: [
      {
        url: "/logo-sample.jpg", // transparent logo
        width: 630,
        height: 630,
        alt: "Africawinks logo – Africa winking with cultural patterns",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Africawinks | Walking Tours in Cape Town",
  //   description:
  //     "Explore Cape Town on foot with Africawinks — authentic walking tours guided by locals. And the whole world winks back.",
  //   images: ["/logo-sample.jpg"],
  //   creator: "@africawinks",
  // },

  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },

  alternates: {
    canonical: "https://www.africawinks.co.za",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${prompt.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
