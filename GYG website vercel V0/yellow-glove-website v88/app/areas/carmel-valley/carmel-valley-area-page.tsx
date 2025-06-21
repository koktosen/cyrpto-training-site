import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, CheckCircle, Star, Users, Home, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LandmarkCarousel from "@/components/landmark-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Carmel Valley House Cleaning Service | Yellow Glove Cleaning",
  description:
    "Professional house cleaning services in Carmel Valley, San Diego. Family-friendly, reliable cleaning for busy families. Licensed, bonded & insured. Free estimates.",
  keywords:
    "Carmel Valley house cleaning, family cleaning service Carmel Valley, residential cleaning San Diego, house cleaners near me, family-safe cleaning products",
}

export default function CarmelValleyAreaPage() {
  const carmelValleyLandmarks = [
    {
      name: "Carmel Valley Recreation Center",
      image: "/placeholder.svg?height=300&width=400&text=Carmel+Valley+Recreation+Center",
      description: "Community hub with sports facilities and family programs",
    },
    {
      name: "Torrey Pines State Natural Reserve",
      image: "/placeholder.svg?height=300&width=400&text=Torrey+Pines+Reserve",
      description: "Beautiful hiking trails and nature preserve nearby",
    },
    {
      name: "Del Mar Highlands Town Center",
      image: "/placeholder.svg?height=300&width=400&text=Del+Mar+Highlands+Shopping",
      description: "Premier shopping and dining destination",
    },
    {
      name: "Carmel Valley Library",
      image: "/placeholder.svg?height=300&width=400&text=Carmel+Valley+Library",
      description: "Modern library serving the community",
    },
  ]

  const neighborhoods = [
    "Carmel Valley Ranch",
    "Pacific Highlands Ranch",
    "Del Mar Mesa",
    "Carmel Creek",
    "Village of Flower Hill",
    "Torrey Hills",
  ]

  const services = [
    {
      title: "Family Home Cleaning",
      description: "Regular weekly, bi-weekly, or monthly cleaning perfect for busy families",
      features: ["Child-safe products", "Pet-friendly cleaning", "Flexible scheduling", "Consistent team"],
    },
    {
      title: "Deep House Cleaning",
      description: "Comprehensive top-to-bottom cleaning for spring cleaning or special occasions",
      features: ["Detailed cleaning", "Inside appliances", "Baseboards & windows", "Move-in ready"],
    },
    {
      title: "Post-Party Cleanup",
      description: "Quick turnaround cleaning after family gatherings and celebrations",
      features: ["Same-day service", "Event cleanup", "Kitchen deep clean", "Trash removal"],
    },
    {
      title: "Vacation Preparation",
      description: "Pre-departure and return cleaning for traveling families",
      features: ["Pre-trip cleaning", "Return service", "Mail collection", "Plant watering"],
    },
  ]

  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Pacific Highlands Ranch",
      rating: 5,
      text: "Yellow Glove has been cleaning our home for over a year. They're incredibly reliable and work around our kids' schedules. The team is always professional and thorough.",
    },
    {
      name: "David & Sarah L.",
      location: "Carmel Valley Ranch",
      rating: 5,
      text: "As busy working parents, Yellow Glove is a lifesaver. They use safe products around our toddler and always leave our home spotless. Highly recommend!",
    },
    {
      name: "Maria R.",
      location: "Del Mar Mesa",
      rating: 5,
      text: "The consistency is what I love most. Same team, same high quality every time. They even helped us prepare for our daughter's birthday party last minute.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/areas/carmel-valley" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-[#f5da00]">
              Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Carmel Valley</span>
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
                <Users className="w-4 h-4 mr-2" />
                Family-Focused Cleaning Service
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Carmel Valley House Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Reliable, family-friendly cleaning services for busy Carmel Valley families. We use safe, non-toxic
                products and work around your family's schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Get Free Family Quote
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
                src="/carmel-valley-family-homes.png"
                alt="Carmel Valley family home cleaning services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Carmel Valley */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Perfect for Carmel Valley Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of busy families in Carmel Valley's thriving community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Family-Safe Products</h3>
                <p className="text-gray-600">Non-toxic, eco-friendly cleaning products safe for children and pets</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">Work around school schedules, nap times, and family activities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#f5da00] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[#1e3f97]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Trusted & Reliable</h3>
                <p className="text-gray-600">Background-checked team members you can trust in your family home</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#f5da00]">
              <CardContent className="p-8">
                <div className="bg-[#1e3f97] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Home className="w-10 h-10 text-[#f5da00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3f97] mb-4">Consistent Team</h3>
                <p className="text-gray-600">Same trusted cleaning team every visit for familiarity and quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Family Cleaning Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning solutions designed for busy families</p>
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
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Carmel Valley Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600">Trusted cleaning services throughout the Carmel Valley area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#f5da00]"
              >
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-[#f5da00] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1e3f97]">{neighborhood}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Serving the Carmel Valley Community</h2>
            <p className="text-xl text-gray-600">We're proud to serve families near these local landmarks</p>
          </div>
          <LandmarkCarousel landmarks={carmelValleyLandmarks} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">What Carmel Valley Families Say</h2>
            <p className="text-xl text-gray-600">Real reviews from your neighbors</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#1e3f97]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready for a Cleaner Family Home?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of Carmel Valley families who trust Yellow Glove Cleaning for reliable, family-safe cleaning
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Free Family Quote
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
      <Footer title="Family-Safe Home Care You Can Trust" description="Carmel Valley Family Services" />

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
