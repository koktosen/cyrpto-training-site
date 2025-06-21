import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Shield, CheckCircle, Building, Home, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import HeroSlideshow from "@/components/hero-slideshow"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPath="/" />

      {/* Hero Section with Softer Blue Background */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300 cursor-pointer">
                San Diego's Premier Cleaning Service
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">We Clean, You Relax</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Professional cleaning services for homeowners across San Diego's finest neighborhoods. Enjoy your free
                time while we make your home spotless.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Bonded & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Background Checked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">5+ Years Experience</span>
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

            {/* Hero Slideshow */}
            <div className="relative">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Mighty Maids Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored
              to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Window-Cleaning-2256218522.jpg-Mqew6q48ROVPpYcwshwIocdOTBR9Zt.jpeg"
                  alt="Professional window cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Home className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Residential Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Premium house cleaning for busy families and professionals who deserve a spotless home.
                </p>
                <Link
                  href="/services/residential-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            {/* Commercial Cleaning */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vacuum%20commercial.jpg-4NK00zDQazl7vrjZrLyT1qsYkOTe4B.jpeg"
                  alt="Commercial office cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Building className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Professional office and business cleaning for spaces over 10,000 sq ft.
                </p>
                <Link
                  href="/services/commercial-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            {/* Post-Construction */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20construction%20cleaning-iJUE1oqhb9aQ3rxFXKNuZ3Itei3Ze8.jpeg"
                  alt="Post-construction cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Sparkles className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Post-Construction</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleanup for new builds and renovations with 5+ years experience.
                </p>
                <Link
                  href="/services/post-construction-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            {/* Pressure Washing */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/how-to-pressure-wash-your-driveway-hero-A-1077414854.jpg-WV6r6JnBNxbr3ISUQK5Kr347LQGQKd.jpeg"
                  alt="Pressure washing service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Shield className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Pressure Washing</h3>
                <p className="text-gray-600 mb-4">
                  Professional exterior cleaning for driveways, walkways, and building surfaces.
                </p>
                <Link href="/services/pressure-washing" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            {/* Move-in/Move-out */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2002-xfoNBDkfZoV4AKbmTLFquiLNPJEoj1.jpeg"
                  alt="Move-in move-out cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <MapPin className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Move-in/Move-out</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning for property transitions. Special rates for property managers.
                </p>
                <Link
                  href="/services/move-in-out-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            {/* Deep Cleaning */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2003-mX4WKlQoQvPyiKgWWoZvLSJXhn9cka.jpeg"
                  alt="Deep cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Star className="w-8 h-8 text-[#f5da00] mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Seasonal deep cleaning that restores your property to pristine condition.
                </p>
                <Link href="/services/deep-cleaning" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas - Mighty Maids Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
              Serving San Diego's Premier Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by homeowners and businesses in the area's most exclusive neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/areas/rancho-santa-fe" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f5da00] transition-colors">
                    Rancho Santa Fe
                  </h3>
                  <p className="text-blue-100">Premium cleaning for luxury estates and gated communities</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/areas/del-mar" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f5da00] transition-colors">Del Mar</h3>
                  <p className="text-blue-100">Executive cleaning services for coastal luxury homes</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/areas/la-jolla" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f5da00] transition-colors">La Jolla</h3>
                  <p className="text-blue-100">Luxury home care for discerning homeowners</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/areas/solana-beach" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f5da00] transition-colors">Solana Beach</h3>
                  <p className="text-blue-100">Professional cleaning for beachside luxury properties</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/areas/carmel-valley" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f5da00] transition-colors">
                    Carmel Valley
                  </h3>
                  <p className="text-blue-100">Comprehensive cleaning for upscale family homes</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/areas" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5 text-[#1e3f97]">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-[#1e3f97] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">View All Areas</h3>
                  <p className="text-[#1e3f97]/70">See all neighborhoods we serve across San Diego</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Comprehensive San Diego Coverage</h2>
              <p className="text-xl text-gray-600 mb-8">
                From the coastal communities to inland luxury neighborhoods, Yellow Glove Cleaning provides premium
                services throughout San Diego County.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <Star className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Luxury Communities</h3>
                    <p className="text-gray-600">
                      Specialized service for gated communities, luxury estates, and high-end properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3f97] p-2 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#f5da00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Coastal Properties</h3>
                    <p className="text-gray-600">
                      Expert care for beachside homes with special attention to salt air and coastal conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Executive Homes</h3>
                    <p className="text-gray-600">
                      Professional cleaning services tailored for busy executives and discerning homeowners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=San Diego Service Area Map"
                alt="Yellow Glove Cleaning service area map"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Don't See Your Area Listed?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            We're always expanding our service areas. Contact us to see if we can serve your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Contact Us About Your Area
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
