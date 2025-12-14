import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PopularPackages } from "@/components/popular-packages"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsButton } from "@/components/whatsapp-button"
import { ImageCarouselSection } from "@/components/image-carousel"
import { ReviewsSection } from "@/components/reviews-section"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      {/* <ReviewsSection /> */}
      <ImageCarouselSection />
      <FeaturedDestinations />
      {/*<PopularPackages /> */}
      {/* <Newsletter /> */}
  
      <Footer /> 
      <WhatsButton />
    </main>
  )
}
