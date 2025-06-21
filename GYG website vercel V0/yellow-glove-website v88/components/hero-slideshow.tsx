"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relax-home-gyg-6H11zyoJds44j0kr8BRJ1rQpGrLtbK.jpeg",
    alt: "Woman relaxing at home after professional cleaning service",
    title: "Relax, Your Home",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relax-whitecouch-scgMCYrKw0r6XEXmSd6rYLQuFDt52n.jpeg",
    alt: "Person enjoying leisure time on clean white couch",
    title: "Enjoy Your Clean Space",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relax-guy-book-beq0VszeqXcDi9ooa3hWmc8b1I3OdD.jpeg",
    alt: "Man reading book in peaceful, clean environment",
    title: "Your Time, Your Way",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relax-beach-FLTC8lFWPMm0BlAOZruptuZdZTi9Mo.jpeg",
    alt: "Beach relaxation - the freedom our cleaning service provides",
    title: "Freedom to Relax",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relax-water-jPup4ZexRWgqY4BH1gPDmhwPwgLQJR.jpeg",
    alt: "Couple relaxing by water while home gets professionally cleaned",
    title: "We Clean, You Relax",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relaxing-book-MtkbyZhn9LHwAz4MRd45zRz7GRHoyz.jpeg",
    alt: "Woman reading with coffee in cozy, spotless home environment",
    title: "Pure Relaxation",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
      {/* Main slideshow container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0} // Prioritize first image
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Slide title overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">{slide.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#f5da00] scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-yellow-400"}`} />
      </div>
    </div>
  )
}
