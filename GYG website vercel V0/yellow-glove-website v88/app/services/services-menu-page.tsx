import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  CheckCircle,
  Building,
  Home,
  Sparkles,
  Users,
  Wrench,
  Key,
  Calendar,
  Star,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Professional Cleaning Services San Diego | Yellow Glove Cleaning",
  description:
    "Complete cleaning services in San Diego: residential, commercial, post-construction, deep cleaning, move-in/out, vacation rentals. Licensed, bonded & insured.",
  keywords:
    "cleaning services San Diego, house cleaning, commercial cleaning, post construction cleaning, deep cleaning, move in out cleaning, vacation rental cleaning",
}

export default function ServicesMenuPage() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Premium house cleaning for luxury homes and busy families",
      icon: Home,
      href: "/services/residential-cleaning",
      features: ["Regular maintenance", "Custom schedules", "Eco-friendly products", "Bonded team"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Window-Cleaning-2256218522.jpg-Mqew6q48ROVPpYcwshwIocdOTBR9Zt.jpeg",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and business cleaning services",
      icon: Building,
      href: "/services/commercial-cleaning",
      features: ["Office buildings", "Retail spaces", "Medical facilities", "Flexible scheduling"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vacuum%20commercial.jpg-4NK00zDQazl7vrjZrLyT1qsYkOTe4B.jpeg",
    },
    {
      title: "Post-Construction Cleaning",
      description: "Specialized cleanup for new builds and renovations",
      icon: Wrench,
      href: "/services/post-construction-cleaning",
      features: ["Dust removal", "Debris cleanup", "Window cleaning", "Final polish"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20construction%20cleaning-iJUE1oqhb9aQ3rxFXKNuZ3Itei3Ze8.jpeg",
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive seasonal and one-time deep cleaning",
      icon: Sparkles,
      href: "/services/deep-cleaning",
      features: ["Seasonal cleaning", "Spring cleaning", "Move-in ready", "Detailed service"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2003-mX4WKlQoQvPyiKgWWoZvLSJXhn9cka.jpeg",
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Complete cleaning for property transitions",
      icon: Key,
      href: "/services/move-in-out-cleaning",
      features: ["Property transitions", "Real estate ready", "Deep sanitization", "Quick turnaround"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20const%20image%2002-xfoNBDkfZoV4AKbmTLFquiLNPJEoj1.jpeg",
    },
    {
      title: "Vacation Rentals",
      description: "Turnover cleaning for short-term rentals",
      icon: Calendar,
      href: "/services/vacation-rental-cleaning",
      features: ["Quick turnovers", "Guest-ready", "Inventory checks", "Same-day service"],
      image: "/vacation-rentals/luxury-beachfront-interior.jpeg",
    },
    {
      title: "Small Office Cleaning",
      description: "Executive office and workspace cleaning",
      icon: Users,
      href: "/services/office-cleaning",
      features: ["Daily maintenance", "Executive suites", "Conference rooms", "Break areas"],
      image: "/services/office-cleaning.jpeg",
    },
    {
      title: "Floor Cleaning Services",
      description: "Specialized floor care and maintenance",
      icon: Star,
      href: "/services/floor-cleaning",
      features: ["All floor types", "Deep cleaning", "Polishing", "Maintenance"],
      image: "/services/carpet-cleaning-results.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/services" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300">
              Complete Cleaning Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Professional Cleaning Services</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From luxury residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored
              to your specific needs across San Diego.
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Our Complete Service Menu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning services designed for San Diego's most discerning property owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="block group">
                <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - Yellow Glove Cleaning San Diego`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-[#f5da00]" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#1e3f97] mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#f5da00] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-[#f5da00] hover:text-[#e6c400] font-semibold mt-auto group-hover:text-[#e6c400]">
                      Learn More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Why Choose Yellow Glove Cleaning?</h2>
            <p className="text-xl text-gray-600">The trusted choice for all your cleaning needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#f5da00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully bonded and insured for complete peace of mind</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#f5da00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Experienced Team</h3>
              <p className="text-gray-600">5+ years serving San Diego's luxury properties</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-[#f5da00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Safe, green cleaning products for your family</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#f5da00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3f97] mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Contact us today for a free estimate and experience the Yellow Glove difference.
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

      {/* Footer */}
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
