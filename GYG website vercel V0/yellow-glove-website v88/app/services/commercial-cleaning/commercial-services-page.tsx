import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Building, Clock, Users, Shield, Star, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Commercial Cleaning Services San Diego | Yellow Glove Cleaning",
  description:
    "Professional commercial cleaning services in San Diego. Office buildings, retail spaces, medical facilities. Licensed, bonded & insured. Call (619) 802-2984.",
  keywords:
    "commercial cleaning San Diego, office cleaning, business cleaning services, retail cleaning, medical facility cleaning",
}

export default function CommercialCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services/commercial-cleaning" />

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
            <span className="text-[#1e3f97] font-semibold">Commercial Cleaning</span>
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
                Professional Business Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Commercial Cleaning Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional cleaning services for offices, retail spaces, and commercial properties across San Diego.
                Maintain a pristine business environment that impresses clients and boosts employee productivity.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Competitive Pricing</span>
                </div>
              </div>

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
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/services/commercial-hero.jpeg"
                alt="Commercial office cleaning services San Diego"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Commercial Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for all types of commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-[#f5da00]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Office Buildings</h3>
                <p className="text-gray-600 mb-4">
                  Complete office cleaning including workstations, conference rooms, lobbies, and common areas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily maintenance cleaning</li>
                  <li>• Restroom sanitization</li>
                  <li>• Floor care & vacuuming</li>
                  <li>• Trash removal & recycling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Retail Spaces</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for retail environments to maintain a welcoming shopping experience.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sales floor maintenance</li>
                  <li>• Window & glass cleaning</li>
                  <li>• Fitting room sanitization</li>
                  <li>• Customer area upkeep</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Medical Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Healthcare-grade cleaning and sanitization for medical offices and clinics.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical-grade disinfection</li>
                  <li>• Waiting room cleaning</li>
                  <li>• Exam room sanitization</li>
                  <li>• HIPAA-compliant service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Restaurants & Food Service</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for food service establishments with health code compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen deep cleaning</li>
                  <li>• Dining area maintenance</li>
                  <li>• Health code compliance</li>
                  <li>• Grease trap cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Warehouses & Industrial</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty cleaning for warehouses, manufacturing facilities, and industrial spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Floor scrubbing & maintenance</li>
                  <li>• Equipment cleaning</li>
                  <li>• Safety compliance</li>
                  <li>• Debris removal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5">
              <CardContent className="p-8 text-center">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Tailored cleaning programs designed specifically for your business needs and schedule.
                </p>
                <Link href="/quote" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Get Custom Quote →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Flexible Scheduling Options</h2>
            <p className="text-xl text-gray-600">We work around your business hours to minimize disruption</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardHeader className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] text-white">
                <Clock className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                <CardTitle className="text-xl">Daily Cleaning</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Monday through Friday maintenance cleaning</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Trash removal & recycling</li>
                  <li>• Restroom sanitization</li>
                  <li>• Floor vacuuming & mopping</li>
                  <li>• Surface disinfection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader className="bg-gradient-to-br from-[#f5da00] to-[#e6c400] text-[#1e3f97]">
                <Calendar className="w-12 h-12 text-[#1e3f97] mx-auto mb-4" />
                <CardTitle className="text-xl">Weekly/Bi-weekly</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Regular scheduled cleaning services</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Deep cleaning rotation</li>
                  <li>• Window cleaning</li>
                  <li>• Carpet maintenance</li>
                  <li>• Detailed sanitization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] text-white">
                <Star className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                <CardTitle className="text-xl">After Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Evening and weekend cleaning available</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• No business disruption</li>
                  <li>• Secure access protocols</li>
                  <li>• Flexible timing</li>
                  <li>• Emergency services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Commercial Service Areas</h2>
            <p className="text-xl text-gray-600">Serving businesses throughout San Diego County</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Downtown San Diego",
              "La Jolla Business District",
              "Del Mar Commercial Area",
              "Rancho Santa Fe",
              "Carmel Valley",
              "Solana Beach",
              "Encinitas",
              "Carlsbad",
              "Poway Business Parks",
            ].map((area, index) => (
              <Card key={index} className="text-center shadow-lg border-l-4 border-l-[#f5da00]">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-[#1e3f97] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1e3f97]">{area}</h3>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Contact us today for a free commercial cleaning estimate and see how we can help your business shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Commercial Quote
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
      <Footer title="Professional Commercial Cleaning You Can Trust" description="Commercial Cleaning Services" />

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
