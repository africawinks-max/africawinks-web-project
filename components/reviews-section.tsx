"use client"

import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely incredible experience! The team handled everything perfectly, from booking to the actual trip. Every detail was well thought out.",
    date: "2 weeks ago",
    image: "/woman-portrait-1.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best travel agency I've ever worked with. They made our dream vacation a reality. The attention to detail and customer service were outstanding.",
    date: "1 month ago",
    image: "/man-portrait-1.png",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Professional, reliable, and genuinely care about their clients. They turned our family vacation into unforgettable memories.",
    date: "3 weeks ago",
    image: "/woman-portrait-2.png",
  },
  {
    name: "David Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I was amazed by the personalized service. They understood exactly what we wanted and delivered beyond expectations. Highly recommend!",
    date: "2 months ago",
    image: "/man-portrait-2.jpg",
  },
  {
    name: "Aisha Patel",
    location: "Mumbai, India",
    rating: 5,
    text: "From start to finish, everything was seamless. The itinerary was perfect, accommodations were luxury, and support was available 24/7.",
    date: "1 week ago",
    image: "/woman-portrait-3.jpg",
  },
  {
    name: "James Anderson",
    location: "Sydney, Australia",
    rating: 5,
    text: "These guys really know travel! They provided insider tips and experiences we never would have found on our own. Worth every penny.",
    date: "3 months ago",
    image: "/man-portrait-3.jpg",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-white" id="reviews">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">5.0 Rating on Google</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-2"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">"{review.text}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-4 border-t">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=your+business+name"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Read all reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}
