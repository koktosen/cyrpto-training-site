import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Key, Clock, Users, Shield, Star, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Move-in/Move-out Cleaning San Diego | Yellow Glove Cleaning",
  description:
    "Professional move-in and move-out cleaning services in San Diego. Property transitions, real estate ready cleaning. Quick turnaround. Call (619) 802-2984.",
  keywords:
    "move in cleaning San Diego, move out cleaning, property transition cleaning, real estate cleaning, rental cleaning",
}

export default function MoveInOutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services/move-in-out-cleaning" />

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
            <span className="text-[#1e3f97] font-semibold">Move-in/Move-out Cleaning</span>
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
                Property Transition Specialists
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Move-in/Move-out Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional cleaning services for property transitions. Whether you're moving in or moving out, we
                ensure your property is spotless and ready for the next chapter.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Quick Turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Real Estate Ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Deep Sanitization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Property Manager Rates</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2002-xfoNBDkfZoV4AKbmTLFquiLNPJEoj1.jpeg"
                alt="Move-in move-out cleaning services San Diego"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Complete Move Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for every type of property transition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Move-Out Cleaning */}
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Move-out cleaning services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Key className="w-12 h-12 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[#1e3f97] mb-4">Move-Out Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Get your security deposit back with our thorough move-out cleaning service. We clean every corner to
                  ensure your rental property is in pristine condition.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Deep kitchen cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Bathroom sanitization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Floor deep cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Window cleaning
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Cabinet cleaning inside/out
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Appliance cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Light fixture cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Baseboard & trim cleaning
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Move-In Cleaning */}
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Move-in cleaning services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Home className="w-12 h-12 text-[#f5da00]" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[#1e3f97] mb-4">Move-In Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Start fresh in your new home with our comprehensive move-in cleaning. We sanitize and deep clean every
                  surface so you can move in with confidence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Complete sanitization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Disinfection service
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Fresh start cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Air vent cleaning
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Closet cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Switch plate cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Door frame cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2" />
                      Move-in ready guarantee
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Specialized Move Services</h2>
            <p className="text-xl text-gray-600">Additional services to make your move seamless</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Property Manager Special</h3>
                <p className="text-gray-600 mb-4">
                  Special rates and priority scheduling for property management companies and real estate professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Volume discounts available</li>
                  <li>• 24-48 hour turnaround</li>
                  <li>• Detailed cleaning reports</li>
                  <li>• Direct billing options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Same-Day Service</h3>
                <p className="text-gray-600 mb-4">
                  Emergency move cleaning available with same-day service for urgent property transitions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency cleaning available</li>
                  <li>• Same-day scheduling</li>
                  <li>• Rush job accommodations</li>
                  <li>• Weekend availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Security Deposit Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We're so confident in our move-out cleaning that we guarantee it meets landlord standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deposit back guarantee</li>
                  <li>• Landlord-approved cleaning</li>
                  <li>• Re-clean if not satisfied</li>
                  <li>• Documentation provided</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Luxury Property Specialist</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for high-end properties with attention to luxury finishes and materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Luxury home experience</li>
                  <li>• Premium material care</li>
                  <li>• White-glove service</li>
                  <li>• Detailed documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Key className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Vacant Property Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning for properties that have been vacant, including dust buildup and deep sanitization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vacant home specialists</li>
                  <li>• Deep dust removal</li>
                  <li>• Pest cleanup if needed</li>
                  <li>• Market-ready preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5">
              <CardContent className="p-8 text-center">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Custom Move Package</h3>
                <p className="text-gray-600 mb-4">
                  Tailored cleaning packages based on your specific move requirements and timeline.
                </p>
                <Link href="/quote" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Get Custom Quote →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Our Move Cleaning Process</h2>
            <p className="text-xl text-gray-600">Simple steps to ensure your property transition goes smoothly</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e3f97] font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Schedule & Quote</h3>
              <p className="text-gray-600">Contact us for a free estimate and schedule your move cleaning service.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#f5da00] font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Property Assessment</h3>
              <p className="text-gray-600">We assess the property and create a customized cleaning checklist.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e3f97] font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">Our team performs thorough cleaning according to your specific needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#f5da00] font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Final Inspection</h3>
              <p className="text-gray-600">Quality check and walkthrough to ensure everything meets our standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for a Stress-Free Move?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Let us handle the cleaning so you can focus on your move. Contact us today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Move Cleaning Quote
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
      <Footer title="Professional Move Cleaning Services" description="Move-in/Move-out Specialists" />

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
