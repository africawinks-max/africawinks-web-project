import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpeg"
          alt="Africawinks Hero section background image"
          className="w-full h-full object-cover opacity-30 animate-pan"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Discover Your Next
            <span className="block font-semibold mt-2">Adventure</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground opacity-80 max-w-2xl mx-auto text-balance leading-relaxed">
            Explore breathtaking murals around woodstock and salt river.explore more about africa's rich story and culture.get to experience south africa and africa at large from an african 
            explorer lens.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-[#93693a] text-primary-foreground hover:bg-primary rounded-full px-8 h-14 text-base group"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 border-[#93693a] bg-transparent">
              View Packages
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-medium">150+</div>
            <div className="text-sm text-foreground opacity-80">Destinations</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-medium">50K+</div>
            <div className="text-sm text-foreground opacity-80">Happy Travelers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-medium">4.9</div>
            <div className="text-sm text-foreground opacity-80">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
