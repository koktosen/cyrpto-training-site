import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Social Media Links Const
const socialMediaLinks = [
  {
    name: "Google",
    url: "https://www.google.com/search?q=Yellow+Glove+Cleaning+reviews",
    iconPath: "/icons/google-logo.svg",
    color: "#4285F4",
    hoverColor: "#1a73e8"
  },
  {
    name: "Yelp", 
    url: "https://www.yelp.com/biz/yellow-glove-cleaning",
    iconPath: "/icons/yelp-svgrepo-com.svg",
    color: "#FF1744",
    hoverColor: "#d32f2f"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/yellowglove.cleaning/",
    iconPath: "/icons/facebook-logo.svg",
    color: "#1877F2", 
    hoverColor: "#1565c0"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yellowglove.cleaning/",
    iconPath: "/icons/instagram-logo.svg",
    color: "#E4405F",
    hoverColor: "#c2185b"
  }
];

interface FooterProps {
  title?: string
  description?: string
}

export default function Footer({
  title = "Luxury Home Care You Can Trust",
  description = "Premium Cleaning Services",
}: FooterProps) {
  return (
    <footer className="bg-[#2c4a7a] text-white py-12">
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
            <p className="text-blue-200 mb-6">{title}</p>
            <div className="flex items-center space-x-3 text-[#f5da00] font-semibold mb-4">
              <Phone className="w-5 h-5" />
              <span>(619) 802-2984</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-start space-x-4 sm:space-x-6">
              {socialMediaLinks.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    {/* Company Logo SVG */}
                    <Image
                      src={social.iconPath}
                      alt={`${social.name} logo`}
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 group-hover:scale-125 group-hover:brightness-110"
                    />
                    
                    {/* Platform name on hover - mobile friendly */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      {social.name}
                    </div>
                  </Link>
                );
              })}
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
                <Link href="/services/commercial-cleaning" className="hover:text-[#f5da00] transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deep-cleaning" className="hover:text-[#f5da00] transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/move-in-out-cleaning" className="hover:text-[#f5da00] transition-colors">
                  Move-in/Move-out
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="hover:text-[#f5da00] transition-colors">
                  Pressure Washing
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
              <li>
                <Link href="/areas" className="hover:text-[#f5da00] transition-colors">
                  View All Areas
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
  )
}
