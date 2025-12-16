import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/a.jpg')`,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpeg"
            alt="Africawinks Hero section background image"
            className="w-full h-full object-cover opacity-30 animate-pan"
          />
        </div>

      </motion.div>
      

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your Next
            <motion.span
              className="block font-semibold mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Adventure
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore breathtaking murals around Woodstock and Salt River. Explore more about Africa's rich story and culture. Get to experience south africa and africa at large from an african 
            explorer lens.
          </motion.p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
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
          </div> */}
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
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
        </div> */}
      </div>
    </section>
  )
}
