"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function QuoteFormPage() {
  useEffect(() => {
    // Load Jobber CSS
    const cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
    cssLink.media = 'screen'
    document.head.appendChild(cssLink)

    // Load Jobber Script
    const script = document.createElement('script')
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
    script.setAttribute('clienthub_id', 'e6a9400c-a3c6-45e2-8189-bbb5d1e56433')
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/e6a9400c-a3c6-45e2-8189-bbb5d1e56433/public/work_request/embedded_work_request_form')
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      if (cssLink && cssLink.parentNode) {
        cssLink.parentNode.removeChild(cssLink)
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Consistent with Homepage */}
      <Header />

      {/* Hero Section with Softer Blue Background */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get Your Free Cleaning Estimate</h1>
            <p className="text-xl text-blue-100 mb-8">
              Quick and easy quote for premium cleaning services in San Diego
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#f5da00]" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#f5da00]" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#f5da00]" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#f5da00]" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Quote Form Section - CSS Grid Layout 75/25 Split */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Quote Form Area - Takes 3 columns (75%) on desktop */}
            <div className="lg:col-span-3 space-y-6">
              {/* Header Card */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#f5da00]/10 to-[#f5da00]/5">
                  <CardTitle className="text-2xl text-[#1e3f97]">Request Your Custom Quote</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
              </Card>

              {/* Jobber Embed - Direct Placement */}
              <div 
                className="min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-white rounded-lg shadow-lg"
              >
                <div 
                  id="e6a9400c-a3c6-45e2-8189-bbb5d1e56433" 
                ></div>
              </div>
            </div>

            {/* Sidebar - Takes 1 column (25%) on desktop */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] text-white">
                  <CardTitle className="text-xl">Prefer to Call?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e3f97] mb-2">(619) 802-2984</div>
                    <p className="text-gray-600 mb-4">Speak directly with our team</p>
                    <a href="tel:+16198022984">
                      <Button className="w-full bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e3f97]">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="font-medium text-[#1e3f97]">Premium Areas:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Rancho Santa Fe</li>
                      <li>• Del Mar</li>
                      <li>• La Jolla</li>
                      <li>• Solana Beach</li>
                      <li>• Carmel Valley</li>
                      <li>• Encinitas</li>
                    </ul>
                    <Link href="/areas" className="text-[#f5da00] hover:text-[#e6c400] text-sm font-medium">
                      View All Areas →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e3f97]">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <ul className="space-y-1 text-gray-600">
                      <li>• Residential Cleaning</li>
                      <li>• Move-in/Move-out</li>
                      <li>• Deep Cleaning</li>
                      <li>• Post-Construction</li>
                      <li>• Commercial Cleaning</li>
                      <li>• Pressure Washing</li>
                    </ul>
                    <Link href="/services" className="text-[#f5da00] hover:text-[#e6c400] text-sm font-medium">
                      View All Services →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-[#f5da00]/10 to-[#f5da00]/5 border-[#f5da00]/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e3f97]">Why Choose Yellow Glove?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mt-0.5" />
                      <span className="text-gray-700">5+ years serving luxury properties</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mt-0.5" />
                      <span className="text-gray-700">Bonded & insured team</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mt-0.5" />
                      <span className="text-gray-700">Eco-friendly products</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mt-0.5" />
                      <span className="text-gray-700">Flexible scheduling options</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#f5da00] mt-0.5" />
                      <span className="text-gray-700">Satisfaction guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

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
