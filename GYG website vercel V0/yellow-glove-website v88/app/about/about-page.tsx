import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, Users, Award, Heart, CheckCircle, Star, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Yellow Glove Cleaning | San Diego's Trusted Cleaning Service",
  description:
    "Learn about Yellow Glove Cleaning's story, values, and commitment to providing premium cleaning services across San Diego. Licensed, bonded & insured since 2019.",
  keywords:
    "about Yellow Glove Cleaning, San Diego cleaning company, professional cleaning service, licensed bonded insured, cleaning company history",
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Every team member is background-checked, bonded, and insured for your complete peace of mind.",
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "We treat every home like our own and every client like family, building lasting relationships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering exceptional results that exceed expectations every time.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Proud to serve San Diego's communities and support local families and businesses.",
    },
  ]

  const teamMembers = [
    {
      name: "Andre G",
      role: "Owner 20 Years Industry Experience",
      bio: "With over 20 years in the cleaning industry, Andre founded Yellow Glove to provide premium, trustworthy cleaning services to San Diego families.",
      image: "/team/andre-g.png",
    },
    {
      name: "Monique V",
      role: "Training and Development 5.5 Years Company Experience",
      bio: "With over 5.5 years in the cleaning industry, Monique ensures every cleaning meets our high standards and manages our team of professional cleaners across North County.",
      image: "/team/monique-v.png",
    },
    {
      name: "Desirae M",
      role: "Customer Success 5.5 Years Company Experience",
      bio: "With over 5.5 years in the cleaning industry, Desirae works directly with clients to ensure satisfaction and coordinates scheduling for our busy families and businesses.",
      image: "/team/desirae-m.png",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Yellow Glove Cleaning started with a mission to provide trustworthy, premium cleaning services.",
    },
    {
      year: "2020",
      title: "Expanded to North County",
      description: "Began serving luxury communities in Rancho Santa Fe, Del Mar, and La Jolla.",
    },
    {
      year: "2021",
      title: "Commercial Services Added",
      description: "Expanded to serve offices, medical facilities, and commercial properties.",
    },
    {
      year: "2022",
      title: "500+ Happy Clients",
      description: "Reached milestone of serving over 500 satisfied residential and commercial clients.",
    },
    {
      year: "2023",
      title: "Eco-Friendly Initiative",
      description: "Launched comprehensive eco-friendly cleaning program with plant-based products.",
    },
    {
      year: "2024",
      title: "Award Recognition",
      description: "Recognized as 'Best Cleaning Service' by San Diego County residents.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header currentPath="/about" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">About Us</span>
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
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About Yellow Glove Cleaning</h1>
              <p className="text-xl text-blue-100 mb-8">
                Founded in 2019 we have a simple mission: to provide San Diego families and businesses with trustworthy,
                premium cleaning services they can depend on. We're not just a cleaning company – we're your neighbors,
                committed to making your life easier.
                <br />
                <br />
                <span className="font-bold">We do this, so you can spend time doing things you enjoy, with the people you care about.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                  >
                    Experience Our Service
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
                src="/la-jolla-luxury-homes.png"
                alt="Yellow Glove Cleaning team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our San Diego community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-[#1e3f97] to-[#2d5bb7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-[#f5da00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3f97] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to San Diego's trusted cleaning service</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-[#f5da00] text-[#1e3f97] w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#1e3f97] mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">The dedicated professionals behind Yellow Glove Cleaning</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-br from-[#1e3f97]/10 to-[#f5da00]/20 shadow-lg border-4 border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3f97] mb-2">{member.name}</h3>
                  <p className="text-[#f5da00] font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Why San Diego Chooses Yellow Glove</h2>
              <p className="text-xl text-gray-600 mb-8">
                We've built our reputation on trust, quality, and exceptional service. Here's what sets us apart:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Licensed, Bonded & Insured</h3>
                    <p className="text-gray-600">
                      Full licensing and comprehensive insurance coverage for your complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3f97] p-2 rounded-full flex-shrink-0">
                    <Users className="w-6 h-6 text-[#f5da00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">Background-Checked Team</h3>
                    <p className="text-gray-600">
                      Every team member undergoes thorough background screening and professional training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5da00] p-2 rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">5+ Years of Excellence</h3>
                    <p className="text-gray-600">
                      Proven track record serving San Diego's most discerning homeowners and businesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3f97] p-2 rounded-full flex-shrink-0">
                    <Star className="w-6 h-6 text-[#f5da00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3f97] mb-2">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-600">
                      We stand behind our work with a complete satisfaction guarantee on every service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/carmel-valley-family-homes.png"
                alt="Professional cleaning team at work"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready to Experience the Yellow Glove Difference?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Yellow Glove Cleaning for their home and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                Get Your Free Estimate
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
