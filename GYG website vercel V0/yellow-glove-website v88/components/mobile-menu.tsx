"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  X,
  Menu,
  MapPin,
  Home,
  Building,
  Sparkles,
  Users,
  ChevronDown,
  ChevronRight,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  currentPath?: string
}

export default function MobileMenu({ currentPath = "/" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setExpandedSection(null)
  }, [currentPath])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const services = [
    { name: "Residential Cleaning", href: "/services/residential-cleaning", icon: Home },
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning", icon: Building },
    { name: "Post-Construction", href: "/services/post-construction-cleaning", icon: Sparkles },
    { name: "Move-in/Move-out", href: "/services/move-in-out-cleaning", icon: Users },
    { name: "Deep Cleaning", href: "/services/deep-cleaning", icon: Sparkles },
    { name: "Pressure Washing", href: "/services/pressure-washing", icon: Building },
  ]

  const areas = [
    { name: "Rancho Santa Fe", href: "/areas/rancho-santa-fe" },
    { name: "Del Mar", href: "/areas/del-mar" },
    { name: "La Jolla", href: "/areas/la-jolla" },
    { name: "Solana Beach", href: "/areas/solana-beach" },
    { name: "Carmel Valley", href: "/areas/carmel-valley" },
    { name: "Encinitas", href: "/areas/encinitas" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-[#1e3f97] hover:text-[#f5da00] hover:bg-[#f5da00]/10 transition-all duration-300"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#1e3f97] to-[#2d5bb7]">
          <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
            <Image
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51"
              alt="Yellow Glove Cleaning Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h2 className="text-lg font-bold text-white">Yellow Glove</h2>
              <p className="text-xs text-blue-200">Cleaning</p>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#f5da00] hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="flex-1 p-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                currentPath === "/"
                  ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                  : "text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* Services */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97] rounded-lg transition-all duration-300"
                onClick={() => toggleSection("services")}
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5" />
                  <span>Services</span>
                </div>
                {expandedSection === "services" ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSection === "services" && (
                <div className="ml-8 mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:bg-[#f5da00]/10 hover:text-[#1e3f97] rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97] rounded-lg transition-all duration-300"
                onClick={() => toggleSection("areas")}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Service Areas</span>
                </div>
                {expandedSection === "areas" ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSection === "areas" && (
                <div className="ml-8 mt-2 space-y-1">
                  {areas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                        currentPath === area.href
                          ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                          : "text-gray-600 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                  <Link
                    href="/areas"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#f5da00]/10 hover:text-[#1e3f97] rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Areas
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                currentPath === "/about"
                  ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                  : "text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span>About Us</span>
            </Link>

            {/* Reviews */}
            <Link
              href="/reviews"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                currentPath === "/reviews"
                  ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                  : "text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              <span>Reviews</span>
            </Link>

            {/* Resources */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97] rounded-lg transition-all duration-300"
                onClick={() => toggleSection("resources")}
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5" />
                  <span>Resources</span>
                </div>
                {expandedSection === "resources" ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedSection === "resources" && (
                <div className="ml-8 mt-2 space-y-1">
                  <Link
                    href="/faq"
                    className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      currentPath === "/faq"
                        ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                        : "text-gray-600 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/blog"
                    className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      currentPath === "/blog"
                        ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                        : "text-gray-600 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <div className="px-4 py-2 text-sm text-gray-400">Projects (Coming Soon)</div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                currentPath === "/contact"
                  ? "bg-[#f5da00]/20 text-[#1e3f97] font-semibold"
                  : "text-gray-700 hover:bg-[#f5da00]/10 hover:text-[#1e3f97]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 space-y-4">
            {/* Phone Number */}
            <a
              href="tel:+16198022984"
              className="flex items-center justify-center space-x-3 w-full py-3 px-4 bg-gradient-to-r from-[#1e3f97] to-[#2d5bb7] hover:from-[#1a3785] hover:to-[#2651a3] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>(619) 802-2984</span>
            </a>

            {/* Get Quote Button */}
            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#f5da00] to-[#e6c400] hover:from-[#e6c400] hover:to-[#d4b000] text-[#1e3f97] font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </Button>
            </Link>

            {/* Trust Badge */}
            <div className="text-center text-xs text-gray-500">Licensed, Bonded & Insured</div>
          </div>
        </div>
      </div>
    </>
  )
}
