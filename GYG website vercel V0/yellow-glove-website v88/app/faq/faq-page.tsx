"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Phone, ChevronDown, ChevronUp, MessageCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"
import { useState } from "react"

export const metadata = {
  title: "Frequently Asked Questions | Yellow Glove Cleaning San Diego",
  description:
    "Get answers to common questions about Yellow Glove Cleaning services, pricing, scheduling, and more. Professional cleaning services in San Diego.",
  keywords:
    "cleaning service FAQ, Yellow Glove questions, San Diego cleaning, house cleaning questions, commercial cleaning FAQ",
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "About Yellow Glove Cleaning",
      icon: MessageCircle,
      questions: [
        {
          question: "WHY SHOULD I USE YELLOW GLOVE CLEANING?",
          answer:
            "One of the reasons why Yellow Glove Cleaning is widely accepted and adored by homeowners across San Diego County lies in our professionalism and the ability to exceed our customer's expectations. We take care of your home and belongings like it's our own. Our cleaning staff is very respectful and fast with outstanding professional skill that will blow your mind! Finally, we have no hidden costs or sketchy contracts. Book Yellow Glove Cleaning today and we promise you won't regret it!",
        },
        {
          question: "ARE YOU LICENSED AND INSURED?",
          answer:
            "Yes, Yellow Glove Cleaning carries full coverage for breakage or damage to home or office and contents that occurs while we're cleaning. All employees are bonded for your peace of mind.",
        },
        {
          question: "DO YOU OFFER 100% CUSTOMER SATISFACTION GUARANTEE?",
          answer:
            "We stand behind our service and do everything to meet or exceed your expectations. We inspect our cleaning work before leaving your place. If you find our service unsatisfactory you can contact us within 24 hours so we can re-clean or fix the issue the next day. No refunds are offered.",
        },
      ],
    },
    {
      title: "Scheduling & Service",
      icon: Clock,
      questions: [
        {
          question: "DO I HAVE TO BE HOME DURING THE CLEANING?",
          answer: "No, you do not need to be home during the cleaning. It's totally up to you.",
        },
        {
          question: "WHAT IS YOUR CANCELLATION POLICY?",
          answer:
            "If you are unable to keep a scheduled appointment, please give at least 24 hours advance notice. If you fail to give us 24 hours notice you will be required to pay a fee of 50% of your service total.",
        },
        {
          question: "DO YOU PROVIDE SOLO OR TEAMS OF MAIDS?",
          answer:
            "We have found that teams of 2 or 3 cleaning techs works best for us in most circumstances, we do occasionally provide a solo cleaning tech. Because we are a professional service and not just an individual who does the work, we have trained cleaning technicians available to assist your regular tech(s) in the event of sickness, injury or vacation. Your home or office will be serviced as promised without exception.",
        },
        {
          question: "WHAT IF I NEED SOME EXTRA TASKS OR SERVICES?",
          answer:
            "We can help you. Just call us in advance to make your special requests and we will quote you a price for the additional time. Ovens, fridge, windows, garage? We can cover it!",
        },
      ],
    },
    {
      title: "Service Details & Payment",
      icon: Shield,
      questions: [
        {
          question: "DO YOU PROVIDE CLEANING SUPPLIES?",
          answer: "Yes, our cleaners bring all the necessary cleaning supplies and equipment.",
        },
        {
          question: "HOW DO I PAY YOU?",
          answer:
            "We accept checks and cash payments whatever is easier for you. We ask for the payment after the services are completed.",
        },
        {
          question: "ARE THERE ANY SERVICES THAT YOU DON'T DO?",
          answer:
            "We provide wide range of cleaning services. But we don't do things such as: walls/ceilings cleaning, vertical or flexible blinds cleaning, stove/oven moving and cleaning behind/underneath of it, outside windows cleaning upper the first floor, doing laundry, furniture moving, pets waste removal, outdoors cleaning, garage cleaning.",
        },
        {
          question: "WHAT ABOUT MY PETS?",
          answer:
            "We love them, and we'll treat them like our own. Your special instructions are noted on our Work Orders so the Cleaning Tech will know your wishes with regard to your pets. We do ask that you make sure that any pet that may be a threat is secured.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51"
                alt="Yellow Glove Cleaning Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#1e3f97]">Yellow Glove</h1>
                <p className="text-sm text-gray-600">Cleaning</p>
              </div>
            </Link>

            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/services" className="text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors">
                  Services
                </Link>
                <Link href="/areas" className="text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors">
                  Areas
                </Link>
                <Link href="/about" className="text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors">
                  About
                </Link>
                <Link href="/reviews" className="text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors">
                  Reviews
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors">
                    Resources <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/faq">FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/blog">Blog</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>Projects (Coming Soon)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
              <MobileMenu currentPath="/faq" />
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+16198022984"
                className="hidden sm:flex items-center space-x-2 text-[#1e3f97] hover:text-[#f5da00] font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>(619) 802-2984</span>
              </a>
              <Link href="/quote">
                <Button className="bg-gradient-to-r from-[#f5da00] to-[#e6c400] hover:from-[#e6c400] hover:to-[#d4b000] text-[#1e3f97] font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/80 via-[#2d5bb7]/60 to-[#4a7bc8]/40 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Your Questions Answered
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our cleaning services, pricing, scheduling, and more. Can't find
              what you're looking for? Contact us directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
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

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Yellow Glove Cleaning services
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-br from-[#f5da00] to-[#e6c400] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-[#1e3f97]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1e3f97]">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card key={faqIndex} className="shadow-lg border-0">
                        <CardHeader
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-[#1e3f97] pr-4">{faq.question}</CardTitle>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-[#f5da00] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#f5da00] flex-shrink-0" />
                            )}
                          </div>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our friendly team is here to help! Contact us for personalized answers about your specific cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#1e3f97] hover:bg-[#1a3785] text-white font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </Link>
            <a href="tel:+16198022984">
              <Button
                size="lg"
                className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-10 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
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
              <p className="text-blue-200 mb-6">Luxury Home Care You Can Trust</p>
              <div className="flex items-center space-x-3 text-[#f5da00] font-semibold">
                <Phone className="w-5 h-5" />
                <span>(619) 802-2984</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Services</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/services/residential-cleaning" className="hover:text-[#f5da00] transition-colors">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/vacation-rental-cleaning" className="hover:text-[#f5da00] transition-colors">
                    Vacation Rentals
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-cleaning" className="hover:text-[#f5da00] transition-colors">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-construction-cleaning" className="hover:text-[#f5da00] transition-colors">
                    Post-Construction
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Areas</h4>
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
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-[#f5da00]">Company</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/about" className="hover:text-[#f5da00] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-[#f5da00] transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#f5da00] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#f5da00] transition-colors">
                    Contact
                  </Link>
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
        <a href="tel:+16198022984">
          <Button
            size="lg"
            className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] rounded-full shadow-2xl px-6 py-4"
          >
            <Phone className="w-6 h-6 mr-2" />
            Call
          </Button>
        </a>
      </div>
    </div>
  )
}
