"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AfricaWinksLogo } from "./AfricaWinksLogo"
import { BookingDialog } from "./booking-dialog"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <AfricaWinksLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#destinations"
              className="text-sm font-medium text-foreground/70 hover:text-[#93693a] transition-colors"
            >
              Destinations
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-foreground/70 hover:text-[#93693a] transition-colors"
            >
              Our Gallery
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-[#93693a] transition-colors">
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-[#93693a]/70 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <BookingDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Book Now
              </Button>
            </BookingDialog>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Destinations
            </a>
            <a href="#gallery" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Our Gallery
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Why Choose Us
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Contact
            </a>
            <BookingDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Book Now
              </Button>
            </BookingDialog>
          </div>
        </div>
      )}
    </nav>
  )
}
