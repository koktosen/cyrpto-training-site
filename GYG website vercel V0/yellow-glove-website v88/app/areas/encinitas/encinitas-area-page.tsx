import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, CheckCircle, Star, Waves, Leaf, Calendar, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Encinitas House Cleaning Service | Yellow Glove Cleaning",
  description:
    "Professional house cleaning services in Encinitas, CA. Eco-friendly cleaning for coastal homes. Beach community specialists. Licensed, bonded & insured.",
  keywords:
    "Encinitas house cleaning, coastal home cleaning, eco-friendly cleaning Encinitas, beach house cleaning, residential cleaning North County",
}

export default function EncinitasAreaPage() {
  const encinitasLandmarks = [
    {
      name: "Moonlight State Beach",
      image: "/placeholder.svg?height=300&width=400&text=Moonlight+Beach+Encinitas",
      description: "Popular family beach with volleyball courts and fire pits",
    },
    {
      name: "San Diego Botanic Garden",
      image: "/placeholder.svg?height=300&width=400&text=San+Diego+Botanic+Garden",
      description: "37-acre botanical paradise in the heart of Encinitas",
    },
    {
      name: "Swami's Beach",
      image: "/placeholder.svg?height=300&width=400&text=Swamis+Beach+Encinitas",
      description: "World-famous surf spot with stunning ocean views",
    },
    {
      name: "Downtown Encinitas",
      image: "/placeholder.svg?height=300&width=400&text=Downtown+Encinitas",
      description: "Charming downtown with local shops and restaurants",
    },
  ]

  const neighborhoods = [
    "Old Encinitas",
    "New Encinitas",
    "Cardiff-by-the-Sea",
    "Leucadia",
    "Olivenhain",
    "Village Park",
  ]

  const services = [
    {
      title: "Coastal Home Cleaning",
      description: "Specialized cleaning for beach homes dealing with salt air and sand",
      features: ["Salt air protection", "Sand removal", "Humidity control", "Coastal-safe products"],
    },
    {
      title: "Eco-Friendly Cleaning",
      description: "Green cleaning solutions perfect for Encinitas' environmentally conscious community",
      features: ["Plant-based products", "Non-toxic formulas", "Sustainable practices", "Ocean-safe cleaners"],
    },
    {
      title: "Vacation Rental Cleaning",
      description: "Quick turnaround cleaning for Airbnb and vacation rental properties",
      features: ["Same-day service", "Guest-ready standards", "Linen service", "Key management"],
    },
    {
      title: "Wellness-Focused Cleaning",
      description: "Mindful cleaning approach aligned with Encinitas' wellness culture",
      features: ["Aromatherapy options", "Allergen reduction", "Stress-free service", "Mindful practices"],
    },
  ]

  const testimonials = [
    {
      name: "Lisa K.",
      location: "Cardiff-by-the-Sea",
      rating: 5,
      text: "Yellow Glove understands coastal living. They know how to deal with the salt air and sand that comes with beach life. Our home always feels fresh and clean.",
    },
    {
      name: "Mike & Jenny S.",
      location: "Leucadia",
      rating: 5,
      text: "We love that they use eco-friendly products. It aligns with our values and the Encinitas community spirit. Plus, they're incredibly reliable and thorough.",
    },
    {
      name: "Rachel M.",
      location: "Old Encinitas",
      rating: 5,
      text: "Perfect for our vacation rental! They turn it around quickly between guests and always leave it spotless. Our guests consistently comment on how clean everything is.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/areas/encinitas" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-[#f5da00]">
              Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Encinitas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/90 via-[#2d5bb7]/70 to-[#4a7bc8]/50 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300">
                <Waves className="w-4 h-4 mr-2" />
                Coastal Community Specialists
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Encinitas House Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Eco-friendly cleaning services for Encinitas' beach community. We understand coastal living and use
                ocean-safe, environmentally conscious cleaning methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Get Eco-Friendly Quote
                  </Button>
                </Link>
                <a href="tel:+16198022984">
                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-2 border-white text-white hover:text-white font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg backdrop-blur-sm"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (619) 802-2984
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Encinitas+Beach+Community"
                alt="Encinitas coastal home cleaning services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Encinitas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Perfect for Encinitas Living</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We embrace Encinitas' wellness culture and environmental consciousness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Eco-Friendly Products</h3>
                <p className="text-gray-600">
                  Plant-based, ocean-safe cleaning products that protect our coastal environment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Waves className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Coastal Expertise</h3>
                <p className="text-gray-600">Specialized knowledge of salt air, sand, and humidity challenges</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Wellness-Focused</h3>
                <p className="text-gray-600">Mindful cleaning approach that supports your healthy lifestyle</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Flexible Service</h3>
                <p className="text-gray-600">Adaptable scheduling for beach days, surf sessions, and yoga retreats</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Coastal Cleaning Services</h2>
            <p className="text-xl text-gray-600">Specialized services for beach community living</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e3f97] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#f5da00] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Encinitas Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage throughout the Encinitas area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#f5da00]"
              >
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1e3f97]">{neighborhood}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Serving the Encinitas Community</h2>
            <p className="text-xl text-gray-600">We're proud to serve residents near these beloved local spots</p>
          </div>
          <LandmarkCarousel landmarks={encinitasLandmarks} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">What Encinitas Residents Say</h2>
            <p className="text-xl text-gray-600">Real reviews from your beach community neighbors</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#1e3f97]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for Eco-Friendly Cleaning?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join the Encinitas community in choosing sustainable, ocean-safe cleaning services that align with your
            values.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Eco-Friendly Quote
              </Button>
            </Link>
            <a href="tel:+16198022984">
              <Button
                size="lg"
                className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (619) 802-2984
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer title="Eco-Friendly Coastal Care" description="Encinitas Cleaning Services" />

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <Link href="/quote">
          <Button
            size="lg"
            className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] rounded-full shadow-2xl px-6 py-4"
          >
            <Phone className="w-6 h-6 mr-2" />
            Quote
          </Button>
        </Link>
      </div>
    </div>
  )
}
