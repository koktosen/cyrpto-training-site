import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, CheckCircle, Star, Building2, Users, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Carlsbad House & Office Cleaning Service | Yellow Glove Cleaning",
  description:
    "Professional cleaning services in Carlsbad, CA. Residential and commercial cleaning for North County families and businesses. Licensed, bonded & insured.",
  keywords:
    "Carlsbad house cleaning, Carlsbad office cleaning, North County cleaning service, residential commercial cleaning Carlsbad, professional cleaners",
}

export default function CarlsbadAreaPage() {
  const carlsbadLandmarks = [
    {
      name: "LEGOLAND California",
      image: "/placeholder.svg?height=300&width=400&text=LEGOLAND+California",
      description: "World-famous theme park and family destination",
    },
    {
      name: "Carlsbad State Beach",
      image: "/placeholder.svg?height=300&width=400&text=Carlsbad+State+Beach",
      description: "Beautiful coastline perfect for families and surfing",
    },
    {
      name: "The Flower Fields",
      image: "/placeholder.svg?height=300&width=400&text=Carlsbad+Flower+Fields",
      description: "Stunning seasonal flower displays and events",
    },
    {
      name: "Carlsbad Village",
      image: "/placeholder.svg?height=300&width=400&text=Carlsbad+Village",
      description: "Historic downtown with shops, restaurants, and businesses",
    },
  ]

  const neighborhoods = ["Carlsbad Village", "La Costa", "Aviara", "Bressi Ranch", "Robertson Ranch", "Calavera Hills"]

  const services = [
    {
      title: "Family Home Cleaning",
      description: "Regular residential cleaning perfect for busy Carlsbad families",
      features: ["Weekly/bi-weekly service", "Kid & pet safe products", "Flexible scheduling", "Trusted team"],
    },
    {
      title: "Office & Commercial Cleaning",
      description: "Professional cleaning for Carlsbad businesses and office spaces",
      features: ["After-hours service", "Medical office cleaning", "Retail space cleaning", "Professional standards"],
    },
    {
      title: "Vacation Rental Cleaning",
      description: "Quick turnaround cleaning for short-term rental properties",
      features: ["Same-day availability", "Guest-ready standards", "Inventory management", "Key coordination"],
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Comprehensive cleaning for relocating families and businesses",
      features: ["Deep cleaning service", "Real estate ready", "Flexible timing", "Damage deposit protection"],
    },
  ]

  const testimonials = [
    {
      name: "Tom & Lisa R.",
      location: "La Costa",
      rating: 5,
      text: "Yellow Glove has been cleaning our home and my dental office for two years. They're incredibly professional and reliable. Highly recommend for both residential and commercial needs.",
    },
    {
      name: "Jennifer K.",
      location: "Aviara",
      rating: 5,
      text: "Perfect for our busy family! They work around our kids' schedules and always leave our home spotless. The team is trustworthy and consistent.",
    },
    {
      name: "Mark S.",
      location: "Carlsbad Village",
      rating: 5,
      text: "They handle our vacation rental property beautifully. Quick turnarounds between guests and always guest-ready. Our reviews consistently mention how clean the place is.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/areas/carlsbad" />

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
            <span className="text-[#1e3f97] font-semibold">Carlsbad</span>
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
                <Building2 className="w-4 h-4 mr-2" />
                Residential & Commercial Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Carlsbad Cleaning Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional cleaning services for Carlsbad families and businesses. From cozy homes to busy offices, we
                deliver consistent, reliable cleaning you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Get Professional Quote
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
                src="/placeholder.svg?height=400&width=600&text=Carlsbad+Family+Business+Community"
                alt="Carlsbad residential and commercial cleaning services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Carlsbad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
              Perfect for Carlsbad Living & Working
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the diverse needs of Carlsbad's thriving residential and business community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Family & Business Focused</h3>
                <p className="text-gray-600">
                  Serving both residential families and commercial businesses with equal expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Day, evening, and weekend options to fit your family and business schedule
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Professional Standards</h3>
                <p className="text-gray-600">Licensed, bonded, and insured with consistent quality you can depend on</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Carlsbad's unique residential and commercial needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Comprehensive Cleaning Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for homes and businesses</p>
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
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Carlsbad Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600">Complete coverage throughout the Carlsbad area</p>
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
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Serving the Carlsbad Community</h2>
            <p className="text-xl text-gray-600">
              We're proud to serve families and businesses near these local landmarks
            </p>
          </div>
          <LandmarkCarousel landmarks={carlsbadLandmarks} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">What Carlsbad Clients Say</h2>
            <p className="text-xl text-gray-600">Real reviews from families and businesses</p>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for Professional Cleaning?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of Carlsbad families and businesses who trust Yellow Glove Cleaning for reliable, professional
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Professional Quote
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
      <Footer title="Professional Home & Business Care" description="Carlsbad Cleaning Services" />

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
