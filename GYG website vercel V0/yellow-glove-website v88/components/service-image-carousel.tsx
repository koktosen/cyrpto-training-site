"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ServiceImage {
  src: string
  alt: string
  title: string
  description: string
  badge?: string
}

interface ServiceImageCarouselProps {
  images: ServiceImage[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function ServiceImageCarousel({
  images,
  autoPlay = true,
  interval = 5000,
  className = "",
}: ServiceImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(slideInterval)
  }, [isAutoPlaying, isHovered, images.length, interval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div
      className={`relative max-w-6xl mx-auto ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main carousel container */}
      <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              {image.badge && (
                <Badge className="bg-[#f5da00] text-[#1e3f97] font-semibold mb-4 px-3 py-1">{image.badge}</Badge>
              )}
              <h3 className="text-2xl lg:text-4xl font-bold mb-3">{image.title}</h3>
              <p className="text-lg text-blue-100 max-w-2xl">{image.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white hover:text-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white hover:text-white"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Auto-play control */}
        <Button
          onClick={toggleAutoPlay}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white hover:text-white"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#f5da00] scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-[#1e3f97]">{currentSlide + 1}</span> of{" "}
          <span className="font-semibold text-[#1e3f97]">{images.length}</span>
        </p>
      </div>
    </div>
  )
}
