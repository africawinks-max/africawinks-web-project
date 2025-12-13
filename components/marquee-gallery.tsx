import { ThreeDMarquee } from "@/components/ui/3d-marquee"

export function MarqueeGallery() {
  const travelImages = [
    "/mg-0.jpeg",
    "/mg-1.jpeg",
    "/mg-2.jpeg",
    "/mg-3.jpeg",
    "/mg-4.jpeg",
    "/mg-0.jpeg",
    "/mg-1.jpeg",
    "/mg-2.jpeg",
    "/mg-3.jpeg",
    "/mg-4.jpeg",
   

  ]

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Explore Our <span className="font-semibold">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in stunning destinations from around Cape Town , The Mother City
          </p>
        </div>
      </div>

      <div className="h-[600px]">
        <ThreeDMarquee images={travelImages} />
      </div>
    </section>
  )
}
