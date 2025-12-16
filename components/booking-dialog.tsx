"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {  Users, Mail, Phone, User, Package, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"

interface BookingDialogProps {
  children: React.ReactNode
}

export function BookingDialog({ children }: BookingDialogProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    people: "",
    package: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

       if (response.ok) {
        const duration = 3000
        const end = Date.now() + duration

        const colors = ["#667eea", "#764ba2", "#f59e0b", "#10b981"]

        const frame = () => {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
          })
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
          })

          if (Date.now() < end) {
            requestAnimationFrame(frame)
          }
        }
        frame()

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: colors,
        })

        toast({
          title: "Booking Request Submitted!",
          description: "We'll get back to you within 24 hours. Check your email for confirmation.",
        })
        setOpen(false)
        setFormData({
          name: "",
          email: "",
          contact: "",
          people: "",
          package: "",
        })
      } else {
        throw new Error(data.error || "Failed to submit booking")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "default",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] sm:min-h-[80vh] sm:my-10 p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className=" bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground p-2 sm:pb-8">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">Book Your Adventure 🚶</DialogTitle>
              <DialogDescription className="hidden sm:block text-primary-foreground/80 text-base">
                Fill in your details and we will get back to you within 24 hours
              </DialogDescription>
            </DialogHeader>
     
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="md:flex md:justify-between">
                 {/* Name Field */}
                <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Full Name
                </Label>
                <Input
                    id="name"
                    
                    placeholder="John Doe"
                    disabled={isLoading}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-11"
                />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email Address
                </Label>
                <Input
                    id="email"
                    type="email"
                    disabled={isLoading}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-11"
                />
                </div>
            </div>

            <div className="md:flex md:justify-between">
                {/* Contact Number */}
                <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Contact Number
                </Label>
                <Input
                    id="contact"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.contact}
                    disabled={isLoading}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="h-11"
                />
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                <Label htmlFor="people" className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    Number of People
                </Label>
                <Select  disabled={isLoading} value={formData.people} onValueChange={(value) => setFormData({ ...formData, people: value })}>
                    <SelectTrigger className="h-11 w-full">
                    <SelectValue placeholder="Select number of travelers" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5 People</SelectItem>
                    <SelectItem value="6+">6+ People</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>

         
            {/* Package Selection */}
            <div className="space-y-2">
            <Label htmlFor="package" className="text-sm font-medium flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                Travel Package
            </Label>
            <Select 
              value={formData.package} 
              onValueChange={(value) => setFormData({ ...formData, package: value })}
              disabled={isLoading} >
                <SelectTrigger className="h-11 w-full">
                <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="woodstock">Woodstock Grand Tour</SelectItem>
                <SelectItem value="bo-kaap">Bo-Kaap Adventure</SelectItem>
                <SelectItem value="gardens">Historic Route</SelectItem>
                <SelectItem value="custom">Custom Package</SelectItem>
                </SelectContent>
            </Select>
            </div>
          

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold 
            bg-primary hover:bg-primary/90 rounded-full 
            shadow-lg hover:shadow-xl transition-all 
            duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </Button>
           </div>

          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to our terms and conditions
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
