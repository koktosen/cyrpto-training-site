import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, CheckCircle, Star, Clock, Shield, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Del Mar House Cleaning Service | Yellow Glove Cleaning",
  description:
    "Premium house cleaning services in Del Mar, CA. Trusted by coastal luxury homeowners. Licensed, bonded & insured. Executive cleaning for discerning clients.",
  keywords:
    "Del Mar house cleaning, Del Mar maid service, luxury home cleaning Del Mar, coastal property cleaning, executive cleaning Del Mar",
}

export default function DelMarAreaPage() {
  const delMarLandmarks = [
    {
      name: "Del Mar Beach",
      image: "/placeholder.svg?key=wfy1v",
      description: "Beautiful coastal homes overlooking pristine beaches",
    },
    {
      name: "Del Mar Racetrack",
      image: "/placeholder.svg?key=lsapf",
      description: "Historic racetrack surrounded by upscale neighborhoods",
    },
    {
      name: "Del Mar Village",
      image: "/placeholder.svg?key=nxa44",
      description: "Charming village with luxury shopping and dining",
    },
    {
      name: "Powerhouse Park",
      image: "/placeholder.svg?key=h3ona",
      description: "Scenic park with stunning coastal views",
    },
  ]

  const services = [
    {
      title: "Executive Home Cleaning",
      description: "Comprehensive cleaning for busy professionals and executives",
      features: ["Flexible scheduling", "Discreet service", "Premium products", "Detailed attention"],
    },
    {
      title: "Coastal Property Care",
      description: "Specialized cleaning for beachside and coastal properties",
      features: ["Salt air considerations", "Sand removal", "Humidity control", "Outdoor area cleaning"],
    },
    {
      title: "Luxury Home Maintenance",
      description: "White-glove service for high-end properties",
      features: ["Fine surface care", "Antique handling", "Art-safe cleaning", "Premium materials"],
    },
    {
      title: "Vacation Rental Turnover",
      description: "Quick and thorough cleaning between guest stays",
      features: ["Same-day service", "Inventory checks", "Linen service", "Guest-ready standards"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/areas/del-mar" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-[#f5da00]">
              Service Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Del Mar</span>
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
                Del Mar Premium Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Executive Cleaning Services in Del Mar</h1>
              <p className="text-xl text-blue-100 mb-8">
                Trusted by Del Mar's coastal luxury homeowners and busy executives. Professional, discreet, and reliable
                cleaning services tailored for your sophisticated lifestyle.
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
                src="/del-mar-luxury-homes.png"
                alt="Del Mar luxury home cleaning services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Del Mar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
              Why Del Mar Residents Choose Yellow Glove
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of Del Mar's coastal luxury properties and busy executive lifestyles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Coastal Property Expertise</h3>
                <p className="text-gray-600">
                  Specialized knowledge of salt air effects, sand removal, and coastal home maintenance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Executive Scheduling</h3>
                <p className="text-gray-600">
                  Flexible timing that works around your busy professional schedule and lifestyle needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Luxury Standards</h3>
                <p className="text-gray-600">
                  White-glove service with attention to fine surfaces, artwork, and high-end furnishings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Discreet Service</h3>
                <p className="text-gray-600">
                  Professional, trustworthy team that respects your privacy and maintains confidentiality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services for Del Mar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Our Del Mar Cleaning Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning solutions for coastal luxury living</p>
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

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Del Mar Landmarks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Serving All of Del Mar</h2>
            <p className="text-xl text-gray-600">
              From beachfront properties to village homes, we clean throughout Del Mar
            </p>
          </div>
          <LandmarkCarousel landmarks={delMarLandmarks} />
        </div>
      </section>

      {/* Service Areas in Del Mar */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Del Mar Neighborhoods We Serve</h2>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive coverage throughout Del Mar's most desirable areas
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Del Mar Beach Colony</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Del Mar Village</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Del Mar Heights</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Stratford Court</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Del Mar Terrace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                    <span className="font-semibold text-[#1e3f97]">Powerhouse Community</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?key=cugx1"
                alt="Del Mar service areas map"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1e3f97] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Del Mar Clients Say</h2>
            <p className="text-xl text-blue-200">Trusted by executives and luxury homeowners throughout Del Mar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6">
                  "Perfect for our beachfront property. They understand coastal cleaning needs and always leave our home
                  spotless."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f5da00] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#1e3f97] font-bold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Michael R.</p>
                    <p className="text-sm text-blue-200">Del Mar Beach Colony</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6">
                  "Exceptional service that works around my executive schedule. Professional, reliable, and thorough
                  every time."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f5da00] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#1e3f97] font-bold">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah L.</p>
                    <p className="text-sm text-blue-200">Del Mar Village</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-6">
                  "They handle our luxury finishes with such care. Trustworthy team that respects our privacy and
                  delivers quality."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f5da00] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#1e3f97] font-bold">DK</span>
                  </div>
                  <div>
                    <p className="font-semibold">David K.</p>
                    <p className="text-sm text-blue-200">Del Mar Heights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for Executive-Level Cleaning?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join Del Mar's discerning homeowners who trust Yellow Glove for their luxury cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Free Estimate
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
      <Footer title="Executive Cleaning for Del Mar" description="Del Mar Cleaning Services" />

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
