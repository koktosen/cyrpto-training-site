import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Shield, Star, CheckCircle, Users, Building, Home, Sparkles, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Premium House Cleaning in Rancho Santa Fe, CA | Yellow Glove Cleaning",
  description:
    "Luxury house cleaning services in Rancho Santa Fe. Serving gated communities, large estates, and luxury homes. Bonded, insured, and trusted by discerning homeowners.",
  keywords:
    "house cleaning Rancho Santa Fe, luxury home cleaning, gated community cleaning, estate cleaning services, premium cleaning Rancho Santa Fe",
}

export default function RanchoSantaFePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Consistent with Homepage */}
      <Header currentPath="/areas/rancho-santa-fe" />

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
            <span className="text-[#1e3f97] font-semibold">Rancho Santa Fe</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Softer Blue Background */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#f5da00] text-[#1e3f97] font-semibold mb-6 px-4 py-2">
                Rancho Santa Fe Premium Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium House Cleaning in Rancho Santa Fe, CA
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Luxury home care for Rancho Santa Fe's most exclusive estates and gated communities. Trusted by
                discerning homeowners who demand excellence.
              </p>

              {/* Local Trust Signals */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-8">
                <h3 className="font-semibold text-white mb-3">Serving Rancho Santa Fe's Premier Locations:</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-100">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#f5da00]" />
                    <span>The Inn at Rancho Santa Fe area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#f5da00]" />
                    <span>Rancho Santa Fe Golf Club vicinity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#f5da00]" />
                    <span>Del Mar Country Club area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#f5da00]" />
                    <span>Gated community specialists</span>
                  </div>
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
                src="/placeholder.svg?height=600&width=500"
                alt="Luxury house cleaning in Rancho Santa Fe gated community"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Rancho Santa Fe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
              Specialized for Rancho Santa Fe's Unique Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the specific requirements of large estates, gated communities, and luxury properties in
              Rancho Santa Fe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Large Estate Expertise</h3>
                <p className="text-gray-600">
                  Specialized in cleaning expansive properties with multiple levels, guest houses, and extensive
                  grounds.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Gated Community Access</h3>
                <p className="text-gray-600">
                  Experienced with security protocols and access procedures for Rancho Santa Fe's exclusive communities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Multiple Property Management</h3>
                <p className="text-gray-600">
                  Coordinated cleaning services for homeowners with multiple residences and investment properties.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Lockbox Service</h3>
                <p className="text-gray-600">
                  Secure key management using professional lockbox systems for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">White-Glove Service</h3>
                <p className="text-gray-600">
                  Meticulous attention to detail and special request accommodation for discerning homeowners.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Three convenient time options to accommodate your busy executive schedule and lifestyle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Experience - Enhanced with Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Trusted Throughout Rancho Santa Fe</h2>
            <p className="text-xl text-gray-600 mb-12">
              We know these prestigious locations and serve the luxury properties nearby
            </p>

            {/* Landmark Carousel */}
            <LandmarkCarousel />
          </div>

          {/* Keep existing service areas and landmarks lists - but fix mobile layout */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Areas We Regularly Service */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-[#1e3f97] mb-8 text-center">Areas We Regularly Service:</h3>
                <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <MapPin className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Stratford Court Area (Del Mar)</p>
                      <p className="text-sm text-gray-600">Luxury coastal properties and executive homes</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <MapPin className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Emerald Lane Estates</p>
                      <p className="text-sm text-gray-600">Custom luxury homes and gated properties</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <MapPin className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Las Planideras & Los Arboles</p>
                      <p className="text-sm text-gray-600">Exclusive residential communities</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <MapPin className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Lago Vista & Rancho La Cima</p>
                      <p className="text-sm text-gray-600">Premium estate properties</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Landmarks We Know */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-[#1e3f97] mb-8 text-center">Local Landmarks We Know:</h3>
                <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <Star className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">The Inn at Rancho Santa Fe</p>
                      <p className="text-sm text-gray-600">Historic luxury resort area</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <Star className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Rancho Santa Fe Golf Club</p>
                      <p className="text-sm text-gray-600">Prestigious golf community</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <Star className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">The Bridges Golf Club</p>
                      <p className="text-sm text-gray-600">Championship golf course & luxury homes</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <Star className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Del Mar Country Club</p>
                      <p className="text-sm text-gray-600">Exclusive club and surrounding estates</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 text-center sm:text-left">
                    <Star className="w-5 h-5 text-[#f5da00] mt-1 mx-auto sm:mx-0 mb-2 sm:mb-0 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1e3f97] mb-1">Santa Helena & San Elijo Areas</p>
                      <p className="text-sm text-gray-600">Luxury residential neighborhoods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Rancho Santa Fe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
              Complete Cleaning Solutions for Rancho Santa Fe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3f97]/80 to-[#2d5bb7]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Home className="w-16 h-16 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Luxury Residential Cleaning</h3>
                <p className="text-gray-600 mb-4">Regular maintenance cleaning for large estates and luxury homes.</p>
                <Link
                  href="/services/residential-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3f97]/80 to-[#2d5bb7]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="w-16 h-16 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Move-in/Move-out Cleaning</h3>
                <p className="text-gray-600 mb-4">Comprehensive cleaning for luxury property transitions.</p>
                <Link
                  href="/services/move-in-out-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3f97]/80 to-[#2d5bb7]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">Seasonal deep cleaning for large properties and estates.</p>
                <Link href="/services/deep-cleaning" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3f97]/80 to-[#2d5bb7]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Post-Construction Cleanup</h3>
                <p className="text-gray-600 mb-4">Specialized cleaning for custom home builds and renovations.</p>
                <Link
                  href="/services/post-construction-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3f97]/80 to-[#2d5bb7]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Executive Office Cleaning</h3>
                <p className="text-gray-600 mb-4">Professional cleaning for home offices and business spaces.</p>
                <Link
                  href="/services/commercial-cleaning"
                  className="text-[#f5da00] hover:text-[#e6c400] font-semibold"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5 overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5da00]/20 to-[#f5da00]/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-[#1e3f97]" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">Tailored cleaning plans for unique property requirements.</p>
                <Link href="/quote" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Get Custom Quote →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
            Ready to Experience Premium Cleaning in Rancho Santa Fe?
          </h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join your neighbors in Rancho Santa Fe who trust Yellow Glove Cleaning for their luxury home care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Estimate
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

      {/* Footer - Consistent with Homepage */}
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
