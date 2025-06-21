import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Home, Shield, Clock, Users, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"

export const metadata = {
  title: "Residential House Cleaning San Diego | Yellow Glove Cleaning",
  description:
    "Premium residential house cleaning services in San Diego. Luxury home cleaning for busy families and professionals. Licensed, bonded & insured. Call (619) 802-2984.",
  keywords: "residential cleaning San Diego, house cleaning, luxury home cleaning, maid service, home cleaning service",
}

export default function ResidentialCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Use centralized header */}
      <Header currentPath="/services/residential-cleaning" />

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
            <span className="text-[#1e3f97] font-semibold">Residential Cleaning</span>
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
                Premium Home Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Residential Cleaning Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Premium house cleaning services for luxury homes and busy families across San Diego. Enjoy your free
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
                  <span className="text-lg">Flexible Scheduling</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Window-Cleaning-2256218522.jpg-Mqew6q48ROVPpYcwshwIocdOTBR9Zt.jpeg"
                alt="Professional residential house cleaning services San Diego"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Complete Home Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for every room in your luxury home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Regular Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Weekly, bi-weekly, or monthly cleaning to keep your home consistently spotless.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• All rooms cleaned thoroughly</li>
                  <li>• Kitchen & bathroom sanitization</li>
                  <li>• Floor vacuuming & mopping</li>
                  <li>• Dusting & surface cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive seasonal cleaning that reaches every corner of your home.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inside appliance cleaning</li>
                  <li>• Cabinet interior cleaning</li>
                  <li>• Baseboard & trim cleaning</li>
                  <li>• Light fixture cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Post-Party Cleanup</h3>
                <p className="text-gray-600 mb-4">Quick restoration after entertaining guests in your luxury home.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Event cleanup specialists</li>
                  <li>• Same-day availability</li>
                  <li>• Stain removal</li>
                  <li>• Complete sanitization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">One-Time Cleaning</h3>
                <p className="text-gray-600 mb-4">Perfect for special occasions or when you need a fresh start.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No commitment required</li>
                  <li>• Same-day booking available</li>
                  <li>• Holiday preparation</li>
                  <li>• Guest-ready cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Executive Service</h3>
                <p className="text-gray-600 mb-4">Premium service for busy executives and high-end properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dedicated cleaning team</li>
                  <li>• Flexible scheduling</li>
                  <li>• Special requests accommodated</li>
                  <li>• Luxury home experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5">
              <CardContent className="p-8 text-center">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Custom Packages</h3>
                <p className="text-gray-600 mb-4">
                  Tailored cleaning plans designed specifically for your home and lifestyle.
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
            <p className="text-xl text-gray-600">Choose the cleaning frequency that works best for your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-4">Weekly</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for busy families and luxury homes that need consistent care
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Consistent cleanliness</li>
                  <li>• Priority scheduling</li>
                  <li>• Best value option</li>
                  <li>• Same team each visit</li>
                </ul>
                <div className="text-3xl font-bold text-[#1e3f97] mb-2">Most Popular</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-2 border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-4">Bi-Weekly</h3>
                <p className="text-gray-600 mb-6">Ideal balance of cleanliness and cost for most homeowners</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Great value</li>
                  <li>• Flexible scheduling</li>
                  <li>• Thorough cleaning</li>
                  <li>• Consistent team</li>
                </ul>
                <div className="text-3xl font-bold text-[#f5da00] mb-2">Best Value</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3f97] mb-4">Monthly</h3>
                <p className="text-gray-600 mb-6">Perfect for well-maintained homes that need periodic deep cleaning</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Deep cleaning focus</li>
                  <li>• Budget-friendly</li>
                  <li>• Seasonal maintenance</li>
                  <li>• Flexible timing</li>
                </ul>
                <div className="text-3xl font-bold text-[#1e3f97] mb-2">Budget Friendly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who trust Yellow Glove Cleaning for their luxury home care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Home Cleaning Quote
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
      <footer className="bg-[#1e3f97] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51"
                  alt="Yellow Glove Cleaning Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h3 className="text-xl font-bold">Yellow Glove</h3>
                  <p className="text-sm text-blue-200">Cleaning</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6">Premium Residential Cleaning Services</p>
              <div className="flex items-center space-x-3 text-[#f5da00] font-semibold">
                <Phone className="w-5 h-5" />
                <span>(619) 802-2984</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Residential Services</h4>
              <ul className="space-y-3 text-blue-200">
                <li>Regular Maintenance</li>
                <li>Deep Cleaning</li>
                <li>One-Time Cleaning</li>
                <li>Post-Party Cleanup</li>
                <li>Executive Service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Service Areas</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/areas/rancho-santa-fe" className="hover:text-[#f5da00] transition-colors">
                    Rancho Santa Fe
                  </Link>
                </li>
                <li>
                  <Link href="/areas/del-mar" className="hover:text-[#f5da00] transition-colors">
                    Del Mar
                  </Link>
                </li>
                <li>
                  <Link href="/areas/la-jolla" className="hover:text-[#f5da00] transition-colors">
                    La Jolla
                  </Link>
                </li>
                <li>
                  <Link href="/areas/solana-beach" className="hover:text-[#f5da00] transition-colors">
                    Solana Beach
                  </Link>
                </li>
                <li>
                  <Link href="/areas" className="hover:text-[#f5da00] transition-colors">
                    View All Areas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Contact</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/quote" className="hover:text-[#f5da00] transition-colors">
                    Get Free Quote
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#f5da00] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="tel:+16198022984" className="hover:text-[#f5da00] transition-colors">
                    (619) 802-2984
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Yellow Glove Cleaning. All rights reserved. | Licensed, Bonded & Insured</p>
          </div>
        </div>
      </footer>

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
