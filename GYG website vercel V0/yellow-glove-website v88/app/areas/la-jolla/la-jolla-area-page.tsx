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
                <Link href="/services" className="text-[#f5da00] font-semibold">
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
                {/* Resources Dropdown */}
                <div className="relative group">
                  <button className="text-[#1e3f97] hover:text-[#f5da00] font-semibold transition-colors flex items-center space-x-1">
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/faq"
                        className="block px-4 py-2 text-[#1e3f97] hover:bg-[#f5da00]/10 hover:text-[#f5da00] transition-colors"
                      >
                        FAQ
                      </Link>
                      <Link
                        href="/blog"
                        className="block px-4 py-2 text-[#1e3f97] hover:bg-[#f5da00]/10 hover:text-[#f5da00] transition-colors"
                      >
                        Blog
                      </Link>
                      <div className="px-4 py-2 text-gray-400 text-sm">Projects (Coming Soon)</div>
                    </div>
                  </div>
                </div>
              </nav>
              <MobileMenu currentPath="/services" />
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
