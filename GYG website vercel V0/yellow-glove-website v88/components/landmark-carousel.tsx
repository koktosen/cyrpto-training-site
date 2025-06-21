"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const landmarks = [
  {
    name: "The Inn at Rancho Santa Fe",
    description: "Historic luxury resort area",
    image: "/placeholder.svg?height=300&width=400",
    alt: "The Inn at Rancho Santa Fe luxury resort - Yellow Glove Cleaning serves nearby estates",
  },
  {
    name: "Rancho Santa Fe Golf Club",
    description: "Prestigious golf community",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Rancho Santa Fe Golf Club - Premium cleaning services for golf community homes",
  },
  {
    name: "The Bridges Golf Club",
    description: "Championship golf course & luxury homes",
    image: "/placeholder.svg?height=300&width=400",
    alt: "The Bridges Golf Club Rancho Santa Fe - Luxury estate cleaning services",
  },
  {
    name: "Del Mar Country Club",
    description: "Exclusive club & estates",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Del Mar Country Club Rancho Santa Fe - Luxury home cleaning services",
  },
  {
    name: "Village Center",
    description: "Heart of the community",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Rancho Santa Fe village center - Yellow Glove Cleaning local service area",
  },
]

export default function LandmarkCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % landmarks.length)
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
    setCurrentSlide((prev) => (prev + 1) % landmarks.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + landmarks.length) % landmarks.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
        {landmarks.map((landmark, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={landmark.image || "/placeholder.svg"}
              alt={landmark.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">{landmark.name}</h3>
              <p className="text-lg text-blue-100">{landmark.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white hover:text-white"
          aria-label="Previous landmark"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white hover:text-white"
          aria-label="Next landmark"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Play/Pause indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-yellow-400"}`} />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {landmarks.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#f5da00] scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${landmarks[index].name}`}
          />
        ))}
      </div>

      {/* Landmark names below dots for accessibility */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Currently viewing: <span className="font-semibold text-[#1e3f97]">{landmarks[currentSlide].name}</span>
        </p>
      </div>
    </div>
  )
}
