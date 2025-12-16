import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import { AnimateOnView } from "./animate-on-view"

const destinations = [
  {
    
    title: "Bo-Kaap Cultural Walk",
    location: "Bo-Kaap, Cape Town",
    highlights: [
      "V&A Waterfront",
      "Nobel Square",
      "Green Point Urban Park"
    ],
    duration: "± 2 hours",
    difficulty: "Easy",
    image: "/Table-Mountain-and-Bo-Kaap.jpg",
    description: "Walk through the colorful streets of Bo-Kaap and uncover the rich Cape Malay history, traditions, and stories that shaped Cape Town.",
   
  },
  {
    title: "Historic City & Company’s Garden Walk",
    location: "City Bowl, Cape Town",
    description: "Explore the historic heart of Cape Town where the city began, surrounded by museums, gardens, and colonial-era landmarks.",
    highlights: [
      "Company’s Garden",
      "Parliament of South Africa",
      "South African Museum"
    ],
    duration: "± 2.5 hours",
    difficulty: "Easy",
    image: "/the-gardens-cape-town.jpg",
    cta: "Apply for a Quote",
    seo: {
      slug: "historic-city-walking-tour-cape-town",
      keywords: [
        "Cape Town historical walking tour",
        "Company’s Garden walk",
        "City Bowl walking tour"
      ]
    }
  },
  {
    title: "Woodstock Street Art Walk",
    location: "Woodstock, Cape Town",
    description: "Discover Cape Town’s most vibrant street art scene while exploring stories of creativity, activism, and urban transformation.",
    highlights: [
      "World-class murals",
      "Local & international artists",
      "Urban culture & social commentary"
    ],
    duration: "± 2 hours",
    difficulty: "Easy",
    image: "/woodstock-cape-town.jpg",
    cta: "Apply for a Quote",
    seo: {
      slug: "woodstock-street-art-walking-tour",
      keywords: [
        "Woodstock street art walk",
        "Cape Town street art tour",
        "Urban walking tour Cape Town"
      ]
    }
  },
  // {
  //   "id": "district-six",
  //   "title": "District Six Memory Walk",
  //   "location": "District Six, Cape Town",
  //   "description": "A powerful and meaningful walk through District Six, telling stories of forced removals, resilience, and community memory.",
  //   "highlights": [
  //     "District Six Museum",
  //     "Apartheid-era history",
  //     "Personal community stories"
  //   ],
  //   "duration": "± 2 hours",
  //   "difficulty": "Moderate",
  //   "image": "/images/tours/district-six.jpg",
  //   "cta": "Apply for a Quote",
  //   "seo": {
  //     "slug": "district-six-walking-tour",
  //     "keywords": [
  //       "District Six walking tour",
  //       "Apartheid history Cape Town",
  //       "Heritage walk Cape Town"
  //     ]
  //   }
  // },
  // {
  //   "id": "waterfront-greenpoint",
  //   "title": "Waterfront to Green Point Walk",
  //   "location": "V&A Waterfront → Green Point",
  //   "description": "A scenic urban walk combining ocean views, city landmarks, and the natural beauty of Cape Town’s coastline.",
  //   "highlights": [
  //     "V&A Waterfront",
  //     "Nobel Square",
  //     "Green Point Urban Park"
  //   ],
  //   "duration": "± 2 hours",
  //   "difficulty": "Easy",
  //   "image": "/images/tours/waterfront-greenpoint.jpg",
  //   "cta": "Apply for a Quote",
  //   "seo": {
  //     "slug": "waterfront-green-point-walking-tour",
  //     "keywords": [
  //       "Cape Town waterfront walk",
  //       "Green Point walking tour",
  //       "Scenic walking tour Cape Town"
  //     ]
  //   }
  // }
  // {
  //   name: "Bali",
  //   country: "Indonesia",
  //   image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
  //   description: "Tropical paradise with ancient temples and beaches",
  //   price: "From $1,899",
  // },
  // {
  //   name: "Kyoto",
  //   country: "Japan",
  //   image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
  //   description: "Ancient temples and traditional Japanese culture",
  //   price: "From $2,799",
  // },
  // {
  //   name: "Maldives",
  //   country: "Indian Ocean",
  //   image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
  //   description: "Overwater villas and pristine coral reefs",
  //   price: "From $3,499",
  // },
  // {
  //   name: "Iceland",
  //   country: "Nordic",
  //   image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
  //   description: "Northern lights and dramatic volcanic landscapes",
  //   price: "From $2,999",
  // },
  // {
  //   name: "Dubai",
  //   country: "UAE",
  //   image: "/dubai-modern-skyline-luxury-desert.jpg",
  //   description: "Modern luxury meets Arabian desert adventures",
  //   price: "From $2,299",
  // },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnView variant="fadeUp" className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Featured <span className="font-semibold">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Handpicked destinations that offer unforgettable experiences and breathtaking beauty
          </p>
        </AnimateOnView>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <AnimateOnView key={index} variant="fadeUp" delay={index * 0.1}>
                <Card
                  key={index}
                  className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium">📍 {" "}{destination.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{destination.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                    </div>

                    <div>
                      <p className="text-md font-md text-muted-foreground leading-relaxed mt-0">Duration and Difficulty :</p>
                      <ul className="meta text-muted-foreground">
                        <li>⏱ {destination.duration}</li>
                        <li>🚶 {destination.difficulty}</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                        Get a   quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
            </AnimateOnView>
            
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            View All Destinations
          </Button>
        </div> */}
      </div>
    </section>
  )
}
