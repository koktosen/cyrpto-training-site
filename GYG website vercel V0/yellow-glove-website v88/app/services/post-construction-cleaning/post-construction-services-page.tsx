import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Wrench, Shield, Clock, Users, Star, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Post-Construction Cleaning San Diego | Yellow Glove Cleaning",
  description:
    "Professional post-construction cleanup in San Diego. New builds, renovations, remodels. Dust removal, debris cleanup, final polish. Call (619) 802-2984.",
  keywords:
    "post construction cleaning San Diego, construction cleanup, renovation cleaning, new build cleaning, remodel cleanup",
}

export default function PostConstructionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services/post-construction-cleaning" />

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
            <span className="text-[#1e3f97] font-semibold">Post-Construction Cleaning</span>
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
                Specialized Construction Cleanup
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Post-Construction Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional cleanup services for new construction, renovations, and remodeling projects. We transform
                construction sites into pristine, move-in ready spaces.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Specialized Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f5da00]" />
                  <span className="text-lg">Quick Turnaround</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20construction%20cleaning-iJUE1oqhb9aQ3rxFXKNuZ3Itei3Ze8.jpeg"
                alt="Post-construction cleaning services San Diego"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Complete Construction Cleanup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rough cleanup to final polish, we handle every phase of post-construction cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Rough Cleanup</h3>
                <p className="text-gray-600 mb-4">
                  Initial cleanup of construction debris, materials, and heavy dust removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Construction debris removal</li>
                  <li>• Material disposal</li>
                  <li>• Heavy dust cleaning</li>
                  <li>• Surface preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Detail Cleaning</h3>
                <p className="text-gray-600 mb-4">Thorough cleaning of all surfaces, fixtures, and detailed areas.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Window cleaning inside & out</li>
                  <li>• Light fixture cleaning</li>
                  <li>• Cabinet & drawer cleaning</li>
                  <li>• Appliance cleaning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Final Polish</h3>
                <p className="text-gray-600 mb-4">
                  Final inspection and touch-up cleaning to ensure move-in ready condition.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Final dust removal</li>
                  <li>• Floor polishing</li>
                  <li>• Touch-up cleaning</li>
                  <li>• Quality inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Renovation Cleanup</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for kitchen, bathroom, and home renovation projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen renovation cleanup</li>
                  <li>• Bathroom remodel cleaning</li>
                  <li>• Flooring installation cleanup</li>
                  <li>• Paint and drywall dust removal</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">New Construction</h3>
                <p className="text-gray-600 mb-4">Complete cleanup for newly built homes and commercial properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• New home cleaning</li>
                  <li>• Commercial building cleanup</li>
                  <li>• Multi-phase cleaning</li>
                  <li>• Builder coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#f5da00]/30 bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5">
              <CardContent className="p-8 text-center">
                <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Emergency Cleanup</h3>
                <p className="text-gray-600 mb-4">
                  Same-day and emergency post-construction cleaning services available.
                </p>
                <Link href="/quote" className="text-[#f5da00] hover:text-[#e6c400] font-semibold">
                  Get Emergency Quote →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-600">Step-by-step approach to ensure thorough construction cleanup</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e3f97] font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Site Assessment</h3>
              <p className="text-gray-600">We evaluate the scope of work and create a customized cleaning plan.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#f5da00] font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Debris Removal</h3>
              <p className="text-gray-600">Safe removal and disposal of construction materials and debris.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#f5da00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1e3f97] font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">Thorough cleaning of all surfaces, fixtures, and detailed areas.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#f5da00] font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Final Inspection</h3>
              <p className="text-gray-600">Quality check to ensure the space is move-in ready and spotless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Safety & Professional Equipment</h2>
              <p className="text-xl text-gray-600 mb-8">
                We use specialized equipment and follow strict safety protocols for construction cleanup projects.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Safety First</h3>
                    <p className="text-gray-600">
                      All team members are trained in construction site safety and use appropriate protective equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3f97] p-2 rounded-full flex-shrink-0">
                    <Wrench className="w-6 h-6 text-[#f5da00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Specialized Equipment</h3>
                    <p className="text-gray-600">
                      Industrial vacuums, dust collection systems, and specialized cleaning tools for construction
                      debris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Proper Disposal</h3>
                    <p className="text-gray-600">
                      Environmentally responsible disposal of construction materials and debris according to local
                      regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2002-xfoNBDkfZoV4AKbmTLFquiLNPJEoj1.jpeg"
                alt="Professional post-construction cleaning equipment"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">
            Ready to Transform Your Construction Site?
          </h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Contact us today for a free post-construction cleaning estimate and let us make your project move-in ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Free Construction Cleanup Quote
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
      <Footer title="Professional Post-Construction Cleanup" description="Construction Cleaning Services" />

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
