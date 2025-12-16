"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"
import { AnimateOnView } from "@/components/animate-on-view"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Trigger confetti
        const duration = 3000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

        const interval = window.setInterval(() => {
          const timeLeft = animationEnd - Date.now()

          if (timeLeft <= 0) {
            return clearInterval(interval)
          }

          const particleCount = 50 * (timeLeft / duration)
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        }, 250)

        toast({
          title: "Message Sent Successfully!",
          description: data.message,
        })

        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimateOnView variant="fadeUp">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Let's Start Your
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Next Adventure
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Have questions or ready to plan your dream journey? We're here to help you every step of the way
            </p>
          </div>
        </AnimateOnView>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <AnimateOnView variant="fadeRight" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "africawinks@gmail.com",
                      href: "mailto:africawinks@gmail.com",
                    },
                    { icon: Phone, label: "Phone", value: "+27 62 958-2290", href: "tel:+27629582290" },
                    { icon: MapPin, label: "Location", value: "Cape Town, South Africa", href: null },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base font-semibold text-foreground hover:text-primary transition-colors break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative card */}
              <motion.div
                className="relative p-8 rounded-3xl  border border-primary/20 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                <h4 className="text-xl font-bold mb-2 relative z-10">Quick Response Time</h4>
                <p className="text-muted-foreground relative z-10">
                  We typically respond within 24 hours. Your adventure is our priority!
                </p>
              </motion.div>
            </div>
          </AnimateOnView>

        </div>
      </div>
    </section>
  )
}
