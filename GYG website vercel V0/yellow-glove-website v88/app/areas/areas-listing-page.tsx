import Image from "next/image"
import Link from "next/link"

import FloatingButton from "@/components/floating-button"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, CheckCircle, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const AreasListingPage = () => {
  return (
    <div className="bg-white">
      <Header currentPath="/areas" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Service Areas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Our Service Areas</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Trusted by homeowners and businesses in San Diego County's most exclusive neighborhoods. From luxury
              estates to coastal properties, we bring premium cleaning services to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Featured Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular locations where we provide specialized luxury cleaning services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Rancho Santa Fe */}
            <Link href="/areas/rancho-santa-fe">
              <div className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-lg bg-white cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src="/rancho-santa-fe-luxury-homes.png"
                    alt="Rancho Santa Fe luxury home cleaning services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#f5da00] text-[#1e3f97] font-semibold px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Rancho Santa Fe</h3>
                  <p className="text-gray-600 mb-4">
                    Known for its luxury estates and equestrian lifestyle, Rancho Santa Fe demands a cleaning service that
                    understands elegance.
                  </p>
                  <span className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                    Learn More About Rancho Santa Fe →
                  </span>
                </div>
              </div>
            </Link>

            {/* Del Mar */}
            <Link href="/areas/del-mar">
              <div className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-lg bg-white cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src="/del-mar-luxury-homes.png"
                    alt="Del Mar luxury home cleaning services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#f5da00] text-[#1e3f97] font-semibold px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Del Mar</h3>
                  <p className="text-gray-600 mb-4">
                    From beachfront properties to upscale homes, Del Mar residents trust us to keep their homes sparkling.
                  </p>
                  <span className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                    Learn More About Del Mar →
                  </span>
                </div>
              </div>
            </Link>

            {/* La Jolla */}
            <Link href="/areas/la-jolla">
              <div className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-lg bg-white cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src="/la-jolla-luxury-homes.png"
                    alt="La Jolla luxury home cleaning services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#f5da00] text-[#1e3f97] font-semibold px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">La Jolla</h3>
                  <p className="text-gray-600 mb-4">
                    With its stunning coastline and prestigious neighborhoods, La Jolla deserves nothing less than
                    perfection in home care.
                  </p>
                  <span className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                    Learn More About La Jolla →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">All Service Areas</h2>
            <p className="text-xl text-gray-600">Complete coverage across San Diego County's finest communities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/areas/rancho-santa-fe" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Rancho Santa Fe</h3>
                <p className="text-blue-100 text-sm">Luxury estates and equestrian lifestyle.</p>
              </div>
            </Link>

            <Link href="/areas/del-mar" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Del Mar</h3>
                <p className="text-blue-100 text-sm">Beachfront properties and upscale homes.</p>
              </div>
            </Link>

            <Link href="/areas/la-jolla" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">La Jolla</h3>
                <p className="text-blue-100 text-sm">Stunning coastline and prestigious neighborhoods.</p>
              </div>
            </Link>

            <Link href="/areas/solana-beach" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Solana Beach</h3>
                <p className="text-blue-100 text-sm">Coastal charm and artistic vibe.</p>
              </div>
            </Link>

            <Link href="/areas/carmel-valley" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Carmel Valley</h3>
                <p className="text-blue-100 text-sm">Upscale residential area with top-rated schools.</p>
              </div>
            </Link>

            <Link href="/areas/encinitas" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Encinitas</h3>
                <p className="text-blue-100 text-sm">Surfing culture and laid-back atmosphere.</p>
              </div>
            </Link>

            <Link href="/areas/carlsbad" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Carlsbad</h3>
                <p className="text-blue-100 text-sm">Beautiful beaches and family-friendly community.</p>
              </div>
            </Link>

            <Link href="/areas/poway" className="group">
              <div className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00] bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white transform hover:scale-105 rounded-lg p-6 text-center">
                <div className="w-10 h-10 bg-[#f5da00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1e3f97]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f5da00] transition-colors">Poway</h3>
                <p className="text-blue-100 text-sm">Family-oriented community with parks and trails.</p>
              </div>
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

      {/* Floating Action Button */}
      <FloatingButton />
    </div>
  )
}

export default AreasListingPage
