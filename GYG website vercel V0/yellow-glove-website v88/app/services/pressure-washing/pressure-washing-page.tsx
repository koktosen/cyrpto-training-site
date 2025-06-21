import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Droplets, Home, Building, Car, Sparkles, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Professional Pressure Washing San Diego | Yellow Glove Cleaning",
  description:
    "Expert pressure washing services in San Diego. Driveways, patios, decks, siding, and commercial properties. Eco-friendly, licensed & insured. Free estimates.",
  keywords:
    "pressure washing San Diego, power washing, driveway cleaning, patio cleaning, deck cleaning, house washing, commercial pressure washing",
}

export default function PressureWashingPage() {
  const services = [
    {
      title: "Driveway & Walkway Cleaning",
      description: "Remove oil stains, dirt, and grime from concrete and asphalt surfaces",
      icon: Home,
      features: ["Oil stain removal", "Concrete restoration", "Anti-slip treatment", "Sealing available"],
    },
    {
      title: "Patio & Deck Cleaning",
      description: "Restore outdoor living spaces to their original beauty",
      icon: Sparkles,
      features: ["Wood deck restoration", "Stone patio cleaning", "Mold & mildew removal", "Protective treatments"],
    },
    {
      title: "House & Siding Washing",
      description: "Gentle yet effective exterior home cleaning",
      icon: Building,
      features: ["Soft wash technique", "All siding types", "Window cleaning", "Gutter cleaning"],
    },
    {
      title: "Commercial Properties",
      description: "Professional exterior cleaning for businesses",
      icon: Car,
      features: ["Storefront cleaning", "Parking lot washing", "Building maintenance", "Regular service plans"],
    },
  ]

  const beforeAfter = [
    {
      title: "Rancho Santa Fe Driveway",
      before: "/placeholder.svg?height=300&width=400&text=Before+Dirty+Driveway",
      after: "/placeholder.svg?height=300&width=400&text=After+Clean+Driveway",
      description: "Complete driveway restoration with oil stain removal",
    },
    {
      title: "Del Mar Patio Deck",
      before: "/placeholder.svg?height=300&width=400&text=Before+Weathered+Deck",
      after: "/placeholder.svg?height=300&width=400&text=After+Restored+Deck",
      description: "Wood deck cleaning and restoration service",
    },
    {
      title: "La Jolla Home Exterior",
      before: "/placeholder.svg?height=300&width=400&text=Before+Dirty+Siding",
      after: "/placeholder.svg?height=300&width=400&text=After+Clean+Siding",
      description: "Soft wash house cleaning with window service",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services/pressure-washing" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#f5da00]">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Pressure Washing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300">
                <Droplets className="w-4 h-4 mr-2" />
                Professional Pressure Washing
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Property with Professional Pressure Washing
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Restore your driveways, patios, decks, and building exteriors to like-new condition with our
                eco-friendly pressure washing services across San Diego.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Get Free Estimate
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
                src="/placeholder.svg?height=500&width=600&text=Professional+Pressure+Washing+Equipment"
                alt="Professional Pressure Washing Services San Diego"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Our Pressure Washing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional exterior cleaning solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-[#f5da00] to-[#e6c400] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-[#1e3f97]" />
                  </div>
                  <CardTitle className="text-xl text-[#1e3f97]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Before & After Results</h2>
            <p className="text-xl text-gray-600">See the dramatic transformation our pressure washing delivers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfter.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-xl border-0">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`Before pressure washing - ${project.title}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white">Before</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`After pressure washing - ${project.title}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500 text-white">After</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#1e3f97] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Our Pressure Washing Process</h2>
            <p className="text-xl text-gray-600">Professional techniques that deliver superior results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#f5da00]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Assessment</h3>
              <p className="text-gray-600">We evaluate your property and determine the best cleaning approach</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#f5da00]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Preparation</h3>
              <p className="text-gray-600">Protect landscaping and apply pre-treatment solutions as needed</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#f5da00]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Cleaning</h3>
              <p className="text-gray-600">Professional pressure washing with appropriate pressure and technique</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#f5da00]">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Final Inspection</h3>
              <p className="text-gray-600">Quality check and cleanup to ensure your complete satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Why Choose Yellow Glove Pressure Washing?</h2>
            <p className="text-xl text-gray-600">Professional results you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your complete protection</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Environmentally safe cleaning products that protect your landscape</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">Convenient scheduling that works around your busy lifestyle</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Professional Equipment</h3>
              <p className="text-gray-600">Commercial-grade equipment for superior cleaning results</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all pressure washing services</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-[#1e3f97]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Local Experts</h3>
              <p className="text-gray-600">San Diego locals who understand your specific cleaning needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3f97] to-[#2d5bb7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free estimate for professional pressure washing services. Same-day quotes available.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:+16198022984">
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 border-2 border-white text-white hover:text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (619) 802-2984
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
