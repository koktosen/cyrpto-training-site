import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Sparkles, Clock, Users, Shield, Star, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Deep Cleaning Services San Diego | Yellow Glove Cleaning",
  description:
    "Professional deep cleaning services in San Diego. Seasonal deep cleaning, spring cleaning, one-time deep clean. Licensed, bonded & insured. Call (619) 802-2984.",
  keywords: "deep cleaning San Diego, spring cleaning, seasonal cleaning, one time deep clean, thorough house cleaning",
}

export default function DeepCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services/deep-cleaning" />

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
            <span className="text-[#1e3f97] font-semibold">Deep Cleaning</span>
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
                Comprehensive Deep Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Deep Cleaning Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Thorough, comprehensive cleaning that reaches every corner of your home. Perfect for seasonal cleaning,
                special occasions, or when you need a fresh start.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Top to Bottom Clean</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Inside Appliances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Detailed Sanitization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Same-Day Available</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2003-mX4WKlQoQvPyiKgWWoZvLSJXhn9cka.jpeg"
                alt="Professional deep cleaning services San Diego"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">What's Included in Deep Cleaning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep cleaning service goes far beyond regular maintenance cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Kitchen Deep Clean</h3>
                <p className="text-gray-600 mb-4">
                  Inside and outside of all appliances, cabinets, and detailed sanitization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inside oven & refrigerator</li>
                  <li>• Cabinet interiors</li>
                  <li>• Grout & tile deep clean</li>
                  <li>• Appliance exteriors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Bathroom Restoration</h3>
                <p className="text-gray-600 mb-4">Complete bathroom sanitization with attention to every detail.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grout & tile restoration</li>
                  <li>• Shower door deep clean</li>
                  <li>• Fixture polishing</li>
                  <li>• Medicine cabinet cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Living Areas Detail</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning of all living spaces with detailed attention.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Baseboard & trim cleaning</li>
                  <li>• Light fixture cleaning</li>
                  <li>• Window sill deep clean</li>
                  <li>• Furniture moving & cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Bedroom Sanctuary</h3>
                <p className="text-gray-600 mb-4">Complete bedroom cleaning including closets and detailed dusting.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Closet organization cleaning</li>
                  <li>• Under-bed cleaning</li>
                  <li>• Dresser interior cleaning</li>
                  <li>• Ceiling fan cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Specialty Areas</h3>
                <p className="text-gray-600 mb-4">
                  Laundry rooms, pantries, and other specialty areas get detailed attention.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Laundry room deep clean</li>
                  <li>• Pantry organization clean</li>
                  <li>• Garage entry cleaning</li>
                  <li>• Utility area cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5">
              <CardContent className="p-8 text-center">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Custom Add-Ons</h3>
                <p className="text-gray-600 mb-4">
                  Additional services available to customize your deep cleaning experience.
                </p>
                <Link href="/quote" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Get Custom Quote →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">When to Schedule Deep Cleaning</h2>
            <p className="text-xl text-gray-600">Perfect timing for maximum impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3f97] mb-2">Spring Cleaning</h3>
                <p className="text-sm text-gray-600">Fresh start for the new season with comprehensive cleaning</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3f97] mb-2">Before Guests</h3>
                <p className="text-sm text-gray-600">Prepare your home for holidays and special occasions</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3f97] mb-2">Moving In</h3>
                <p className="text-sm text-gray-600">Start fresh in your new home with complete sanitization</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3f97] mb-2">Seasonal Reset</h3>
                <p className="text-sm text-gray-600">Quarterly deep cleaning to maintain your luxury home</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for a Complete Home Refresh?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Experience the difference of professional deep cleaning. Your home will feel brand new.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Deep Cleaning Quote
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
      <Footer title="Professional Deep Cleaning Services" description="Comprehensive Deep Cleaning" />

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
