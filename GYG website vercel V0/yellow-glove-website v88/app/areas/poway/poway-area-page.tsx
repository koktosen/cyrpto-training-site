import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, CheckCircle, Star, Home, Users, Shield, TreePine } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Poway House Cleaning Service | Yellow Glove Cleaning",
  description:
    "Professional house cleaning services in Poway, CA. Trusted residential cleaning for inland North County families. Licensed, bonded & insured. Free estimates.",
  keywords:
    "Poway house cleaning, residential cleaning Poway, house cleaners North County, family cleaning service Poway, professional home cleaning",
}

export default function PowayAreaPage() {
  const powayLandmarks = [
    {
      name: "Lake Poway Recreation Area",
      image: "/placeholder.svg?height=300&width=400&text=Lake+Poway+Recreation",
      description: "Beautiful lake with hiking trails and family activities",
    },
    {
      name: "Old Poway Park",
      image: "/placeholder.svg?height=300&width=400&text=Old+Poway+Park",
      description: "Historic park with train rides and community events",
    },
    {
      name: "Poway Community Park",
      image: "/placeholder.svg?height=300&width=400&text=Poway+Community+Park",
      description: "Large park with sports facilities and playgrounds",
    },
    {
      name: "Potato Chip Rock Trail",
      image: "/placeholder.svg?height=300&width=400&text=Potato+Chip+Rock+Trail",
      description: "Popular hiking destination with stunning views",
    },
  ]

  const neighborhoods = [
    "Poway Valley",
    "Stoneridge Country Club",
    "Arbolitos",
    "Green Valley",
    "Maderas",
    "Sabre Springs",
  ]

  const services = [
    {
      title: "Regular House Cleaning",
      description: "Consistent weekly or bi-weekly cleaning perfect for busy Poway families",
      features: ["Flexible scheduling", "Same trusted team", "Family-safe products", "Reliable service"],
    },
    {
      title: "Deep House Cleaning",
      description: "Thorough top-to-bottom cleaning for spring cleaning or special occasions",
      features: ["Detailed cleaning", "Inside appliances", "Baseboards & windows", "Move-in ready"],
    },
    {
      title: "Family Home Maintenance",
      description: "Ongoing cleaning services designed around family life and activities",
      features: ["Kid & pet friendly", "Sports equipment cleaning", "Flexible timing", "Trusted service"],
    },
    {
      title: "Seasonal Cleaning",
      description: "Specialized cleaning for Poway's seasonal needs and outdoor lifestyle",
      features: ["Pollen removal", "Outdoor furniture", "Garage cleaning", "Holiday preparation"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah & Mike T.",
      location: "Stoneridge Country Club",
      rating: 5,
      text: "Yellow Glove has been cleaning our home for over two years. They're incredibly reliable and work perfectly around our kids' sports schedules. Highly recommend!",
    },
    {
      name: "Jennifer L.",
      location: "Green Valley",
      rating: 5,
      text: "Perfect for our busy family! They understand that we have active kids and pets. The team is trustworthy and always leaves our home spotless.",
    },
    {
      name: "David R.",
      location: "Arbolitos",
      rating: 5,
      text: "Consistent quality every time. They've helped us maintain our home beautifully, especially during busy seasons with work and family activities.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/areas/poway" />

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
            <span className="text-[#1e3f97] font-semibold">Poway</span>
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
                <TreePine className="w-4 h-4 mr-2" />
                Inland Community Specialists
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Poway House Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Trusted residential cleaning services for Poway families. We understand the unique needs of inland North
                County living and provide reliable, family-focused cleaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Get Family Quote
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
                src="/placeholder.svg?height=400&width=600&text=Poway+Family+Homes"
                alt="Poway residential cleaning services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Poway */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Perfect for Poway Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the active lifestyle and family values of the Poway community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Family-Focused Service</h3>
                <p className="text-gray-600">Designed around busy family schedules and active lifestyles</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Trusted & Reliable</h3>
                <p className="text-gray-600">Background-checked team members you can trust in your family home</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Home className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Local Understanding</h3>
                <p className="text-gray-600">Deep knowledge of Poway's unique inland climate and lifestyle needs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <TreePine className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Seasonal Expertise</h3>
                <p className="text-gray-600">Specialized cleaning for pollen seasons and outdoor living</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Residential Cleaning Services</h2>
            <p className="text-xl text-gray-600">Comprehensive home cleaning solutions for Poway families</p>
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
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Poway Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage throughout the Poway area</p>
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
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Serving the Poway Community</h2>
            <p className="text-xl text-gray-600">We're proud to serve families near these beloved local destinations</p>
          </div>
          <LandmarkCarousel landmarks={powayLandmarks} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">What Poway Families Say</h2>
            <p className="text-xl text-gray-600">Real reviews from your neighbors</p>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for Reliable Family Cleaning?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of Poway families who trust Yellow Glove Cleaning for consistent, reliable home cleaning
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Family Quote
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
      <Footer title="Trusted Family Home Care" description="Poway Family Services" />

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
