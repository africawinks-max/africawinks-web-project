"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function WhatsButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight

      // Show button when user scrolls halfway down
      const scrolledHalfway = scrollTop + clientHeight >= scrollHeight / 2
      setIsVisible(scrolledHalfway)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + or 00)
    const phoneNumber = "+27629582290"
    const message = encodeURIComponent("Hi! I'm interested in your travel packages.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A]  text-white shadow-lg transition-all duration-300 p-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
