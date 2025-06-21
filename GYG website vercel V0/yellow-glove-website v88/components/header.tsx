"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

interface HeaderProps {
  currentPath?: string
}

export default function Header({ currentPath = "/" }: HeaderProps) {
  const isActive = (path: string) => currentPath === path
  const isServicesActive = currentPath.startsWith("/services")
  const isAreasActive = currentPath.startsWith("/areas")

  return (
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
              <Link
                href="/services"
                className={`font-semibold transition-colors ${
                  isServicesActive ? "text-[#f5da00]" : "text-[#1e3f97] hover:text-[#f5da00]"
                }`}
              >
                Services
              </Link>
              <Link
                href="/areas"
                className={`font-semibold transition-colors ${
                  isAreasActive ? "text-[#f5da00]" : "text-[#1e3f97] hover:text-[#f5da00]"
                }`}
              >
                Areas
              </Link>
              <Link
                href="/about"
                className={`font-semibold transition-colors ${
                  isActive("/about") ? "text-[#f5da00]" : "text-[#1e3f97] hover:text-[#f5da00]"
                }`}
              >
                About
              </Link>
              <Link
                href="/reviews"
                className={`font-semibold transition-colors ${
                  isActive("/reviews") ? "text-[#f5da00]" : "text-[#1e3f97] hover:text-[#f5da00]"
                }`}
              >
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
            <MobileMenu currentPath={currentPath} />
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
  )
}
