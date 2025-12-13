"use client"

import ImageCarousel from "@/components/ui/image-carousel"

export function ImageCarouselSection() {
  const slideData = [
    {
      title: "Street Art Culture",
      button: "Explore Gallery",
      src: "/p-0.jpg",
    },
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/img-0-bokaap.jpg",
    },
    {
      title: "Urban Expression",
      button: "Explore Gallery",
      src: "/img-0-woodstock.jpg",
    },
    {
      title: "Historical Tributes",
      button: "Explore Gallery",
      src: "/p-19.jpg",
    },
  
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/p-10.jpg",
    },
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/p-22.jpg",
    },
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/img-1-woodstock.jpg",
    },
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/p-24.jpg",
    },
    {
      title: "Geometric Patterns",
      button: "Explore Gallery",
      src: "/p-25.jpg",
    },
    {
      title: "Underwater Wonders",
      button: "Explore Gallery",
      src: "/p-7.jpg",
    },
  ]

  return (
    <section id="gallery" className="relative overflow-hidden w-full py-20 bg-background">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="gold">Art</span> Gallery</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore vibrant street art and murals from artisits around the world
        </p>
      </div>
      <ImageCarousel slides={slideData} />
    </section>
  )
}
