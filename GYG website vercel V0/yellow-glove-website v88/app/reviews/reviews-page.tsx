"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, Quote, MapPin, Calendar, ThumbsUp, Globe, MessageCircle, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Add custom CSS for the scrolling animation
const scrollingStyles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 40s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
  
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const metadata = {
  title: "Customer Reviews | Yellow Glove Cleaning San Diego",
  description:
    "Read real reviews from satisfied Yellow Glove Cleaning customers across San Diego. See why families and businesses trust us for their cleaning needs.",
  keywords:
    "Yellow Glove Cleaning reviews, San Diego cleaning service reviews, customer testimonials, house cleaning reviews, commercial cleaning reviews",
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Lynnette Brown",
      location: "San Diego",
      service: "Residential Cleaning",
      rating: 5,
      date: "November 2024",
      review:
        "Great job and super friendly. Great customer service! Kept me updated throughout the day while I was at work.",
      verified: true,
    },
    {
      name: "Brandon",
      location: "San Diego",
      service: "Residential Cleaning",
      rating: 5,
      date: "October 2024",
      review:
        "Excellent work, in a fast pace, and at a reasonable price!",
      verified: true,
    },
    {
      name: "Caralee Jaeckels",
      location: "San Diego",
      service: "Regular Residential Cleaning",
      rating: 5,
      date: "October 2024",
      review:
        "We've worked with Yellow Glove for years. Staff is always on time, friendly, professional, and they do a great job consistently. The management staff is responsive. I appreciate that they send a reminder text 30 minutes in advance of each appointment. They assign the same person all the time so they really get to know the specifics of our home, but if our schedule changes or we need something last minute, other staff is available. Monique goes above and beyond to add special little details for our daughter's room. Overall great experience!",
      verified: true,
    },
    {
      name: "Paula Mais",
      location: "San Diego",
      service: "Professional Cleaning",
      rating: 5,
      date: "September 2024",
      review:
        "Great service. Professional. Great price and wonderful experience. Would recommend!!! Positive: Punctuality, Professionalism, Value",
      verified: true,
    },
    {
      name: "David Morris",
      location: "San Diego",
      service: "Professional Cleaning",
      rating: 5,
      date: "August 2024",
      review:
        "Great service and professional cleaners",
      verified: true,
    },
    {
      name: "Jamie Callahan",
      location: "San Diego",
      service: "Move-in/Move-out Cleaning",
      rating: 5,
      date: "August 2024",
      review:
        "Really happy with Yellow Glove! Hired them for move in/move out service and found the pricing to be very competitive and quality very high. Trustworthy business- would recommend and will be using them again! I also appreciate how easy it is to use their online service and book with them. Whatever software they use is great.",
      verified: true,
    },
    {
      name: "Whitney Fee",
      location: "San Diego",
      service: "Residential Cleaning",
      rating: 5,
      date: "August 2024",
      review:
        "They do a great job for a great price.",
      verified: true,
    },
    {
      name: "Lisa Hussey",
      location: "San Diego",
      service: "Move-out Cleaning",
      rating: 5,
      date: "August 2024",
      review:
        "Booked with YGC as a last minute move out clean and they were able to squeeze me in! Nothing but good things to say! Our house was spotless and left our landlord feeling good for the next tenants. We have 2 large dogs that shed and you could not tell dogs lived there after the cleaning. I highly recommend Desiree and look forward to booking with her again. Ask for Desiree if you can!",
      verified: true,
    },
    {
      name: "Linda Marsden",
      location: "San Diego",
      service: "Deep Cleaning",
      rating: 5,
      date: "July 2024",
      review:
        "Desiree arrived exactly on time and got to work. My house has never been so clean! She even cleaned my oven, amongst all the other chores she accomplished, and all this in record time. I was amazed! The quality of workmanship was superb! Fast, thorough and detailed. Just exceptional!",
      verified: true,
    },
    {
      name: "Ben R",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "July 2024",
      review:
        "Easy to schedule, good communication, and my house always smells great when I come home after they've visited",
      verified: true,
    },
    {
      name: "Melissa Walker",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "July 2024",
      review:
        "Have used for a long time for regular cleanings and they are great!",
      verified: true,
    },
    {
      name: "Brigitte Nagel",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "June 2024",
      review:
        "Yellow glove cleaning always does a great job for me. I have used them for several years. The cleaners do a great job and I would recommend.",
      verified: true,
    },
    {
      name: "RM",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "June 2024",
      review:
        "Very good service. Easy to schedule, with clear communication. All the cleaners we have had over the past 4 years have been professional. Extremely reliable. Recommend highly.",
      verified: true,
    },
    {
      name: "Kirsten Egner",
      location: "San Diego",
      service: "Move-in/Move-out Cleaning",
      rating: 5,
      date: "May 2024",
      review:
        "I hired Yellow Glove Cleaning company to complete a move in/out cleaning. While the finished product was satisfactory, there was a misunderstanding with the final invoice. Andre, the owner, dealt with it straightaway and remedied the problem. I'm thankful for his professionalism, communication, and sensibility. It says a lot about a company when there is good leadership. Thank you, Andre.",
      verified: true,
    },
    {
      name: "Deborah Bossmeyer",
      location: "San Diego",
      service: "Regular Residential Cleaning",
      rating: 5,
      date: "May 2024",
      review:
        "Yellow Glove has been cleaning our three story townhome for several years, and has done an excellent job over the years. They are on time, conscientious, detailed and efficient. We enjoy the personalities of all the workers and feel safe when they are in our home. They have proven to be trustworthy. Ownership communicates well with us and is flexible when we need to change our schedule. I would highly recommend Yellow Glove.",
      verified: true,
    },
    {
      name: "Julie Oldroyd",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "April 2024",
      review:
        "Yellow Glove has been wonderful for the last 2 years! My house cleaners have been professional and do an excellent job cleaning. They have been kind and helpful during my surgeries. It is so appreciated! I highly recommend Yellow Glove.",
      verified: true,
    },
    {
      name: "Cindy D",
      location: "San Diego",
      service: "Deep Cleaning",
      rating: 5,
      date: "April 2024",
      review:
        "Great work! Very thorough. They don't cut corners.",
      verified: true,
    },
    {
      name: "Amber McGuire",
      location: "San Diego",
      service: "Property Management Cleaning",
      rating: 5,
      date: "April 2024",
      review:
        "We are property managers and used them to turn over a few of our properties. They did a great job and we will be using them again!",
      verified: true,
    },
    {
      name: "Joseph Robison",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "April 2024",
      review:
        "We've used them multiple times in the past and they're definitely high quality and a great value. They are in the mid-range of pricing, so while not the cheapest they're not that expensive either. If any issues such as broken items happen during the cleaning they may replace them out of pocket, so that's high quality service. This happened once to a small item across 5-6 cleanings and they reimbursed. You should give them a try!",
      verified: true,
    },
    {
      name: "Susan Arias",
      location: "San Diego",
      service: "Monthly Cleaning",
      rating: 5,
      date: "March 2024",
      review:
        "I love getting to come home to an expertly cleaned home. It helps so much with our busy schedules not to have to spend hours on the weekend doing what the team at Yellow Glove can in just a couple of hours a month.",
      verified: true,
    },
    {
      name: "Judith Knowles",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "March 2024",
      review:
        "I have had Yellow Glove take care of my dust and dirt for over two years. No complaints! Desirae has settled in as 'mine' and she is absolutely the best.",
      verified: true,
    },
    {
      name: "Anna Joy Springer",
      location: "San Diego",
      service: "Deep Cleaning",
      rating: 5,
      date: "March 2024",
      review:
        "Amazing thorough work - very reasonable! Friendly staff. I love this place!",
      verified: true,
    },
    {
      name: "Sam Sheldon",
      location: "San Diego",
      service: "Post-Construction Cleaning",
      rating: 5,
      date: "February 2024",
      review:
        "I would strongly recommend them for a post-remodel clean-up. I called them on very short notice and they arrived at 7 a.m. on a Sunday. The two cleaners were super professional and they did an awesome job. They cleaned everything we requested and did so in a timely fashion. They are a little on the expensive side but you get what you pay for. They were definitely worth it!",
      verified: true,
    },
    {
      name: "delilah perea",
      location: "San Diego",
      service: "Regular Cleaning",
      rating: 5,
      date: "January 2024",
      review:
        "I have been using Yellow Glove Cleaning for over a year now, and they're consistently excellent. The same team comes each time, so they know our preferences and our home. They're trustworthy, reliable, and always leave our house looking perfect. Best cleaning service we've ever used!",
      verified: true,
    },
    {
      name: "Glynn Sr",
      location: "San Diego",
      service: "Deep Cleaning",
      rating: 5,
      date: "December 2023",
      review:
        "Every body says it but I truly don't write reviews but I had to this time. I had a last minute cleaning that needed to be done. I gave yellow glove a call and the owner answered the phone on the second ring. Yellow glove showed up the next day and they were 15 min early. Two very nice ladies cleaned the house from top to bottom. I have never seen the house this clean. The stove and the microwave look like they were just purchased. The grout in the bathroom looks better than when I bought the place. I had stains on the bathroom counters from my daughters hair dye, GONE!. There were stains in the bathtub from the dye. GONE! I had a carpet cleaning scheduled for the next day with a different company and I canceled it because the carpets already looked so good. The windows were spotless the hardwood floors looked like they had been waxed. They did EVERYTHING from cleaning out each cabinet in the kitchen all the way down to the baseboards. My wife got mad at me because I wouldn't stop talking about how clean it was. I will definitely be using them again and they are highly recommended. 10 stars if it would let me.",
      verified: true,
    },
    {
      name: "Anne C",
      location: "San Diego",
      service: "Deep Cleaning Service",
      rating: 5,
      date: "January 2024",
      review:
        "I have been using Yellow Glove's Cleaning services for two years for regular cleaning with total satisfaction. Recently, my house needed to be 'tented' for termite damage and I contracted with Yellow Glove for a 'deep cleaning service'. As always, they arrived at the time scheduled and proceeded to clean my two story house (3 bedrooms, 3 bathrooms, all oak flooring, bookshelves, kitchen and bathroom cupboards, refrigerator, stove and microwave, closets, etc). I was very impressed by the thoroughness in which they cleaned everything and everywhere. I was able to move my personal belongings back into a spotless and fresh smelling house! Highly recommend!",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for carousel animation */}
      <style dangerouslySetInnerHTML={{ __html: scrollingStyles }} />
      
      {/* Header */}
      <Header currentPath="/reviews" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#f5da00]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3f97] font-semibold">Reviews</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3f97]/90 via-[#2d5bb7]/70 to-[#4a7bc8]/50 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3f97]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Badge className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-semibold mb-6 px-4 py-2 transition-all duration-300">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Customer Reviews
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">What Our Customers Say</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Read real reviews from satisfied customers across San Diego who trust
              Yellow Glove Cleaning for their home and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] font-bold px-8 py-4 text-lg w-full sm:w-auto rounded-lg shadow-xl"
                >
                  Join Our Happy Customers
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

      {/* Custom Reviews Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-4">Featured Customer Reviews</h2>
            <p className="text-xl text-gray-600">Real reviews from our satisfied customers across San Diego</p>
          </div>
          
          {/* Reviews Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="flex animate-scroll space-x-6">
                {/* First set of reviews */}
                {reviews.slice(0, 8).map((review, index) => (
                  <div key={`first-${index}`} className="flex-none w-80">
                    <Card className="h-full border-0 shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#f5da00] fill-current" />
                            ))}
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-4">"{review.review}"</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-[#1e3f97] text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.service} • {review.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                {/* Duplicate set for infinite scroll effect */}
                {reviews.slice(0, 8).map((review, index) => (
                  <div key={`second-${index}`} className="flex-none w-80">
                    <Card className="h-full border-0 shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#f5da00] fill-current" />
                            ))}
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-4">"{review.review}"</p>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-[#1e3f97] text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.service} • {review.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3f97] mb-6">Real Reviews from Real Customers</h2>
            <p className="text-xl text-gray-600">Verified reviews from families and businesses across San Diego</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#f5da00] fill-current" />
                      ))}
                    </div>
                    {review.verified && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#f5da00] opacity-50 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">{review.review}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#1e3f97]">{review.name}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {review.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#1e3f97]">{review.service}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {review.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NiceJob Reviews Widget */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1e3f97] mb-4">Our Socials and Reviews</h2>
            <p className="text-gray-600">Real-time reviews from our customers across all platforms</p>
          </div>

          {/* Live Reviews Call-to-Action */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-8 border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1e3f97] mb-3">Verified Customer Reviews</h3>
                             <div className="flex justify-center items-center gap-3 mb-6">
                 <div className="flex">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-6 h-6 text-[#f5da00] fill-current" />
                   ))}
                 </div>
                 <span className="text-xl font-bold text-[#1e3f97]">4.9/5</span>
                 <span className="text-gray-600 text-lg">• 150+ Reviews</span>
               </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Read what our satisfied customers have to say about Yellow Glove Cleaning's professional service across San Diego
              </p>
              
              {/* Review Platform Logos */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                {/* Google */}
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://www.google.com/search?q=Yellow+Glove+Cleaning+San+Diego+reviews', '_blank')}>
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3">
                    <Image
                      src="/icons/google-logo.svg"
                      alt="Google Reviews"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1 hover:bg-blue-200 text-sm">
                    Google Reviews
                  </Badge>
                </div>

                {/* Yelp */}
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://www.yelp.com/biz/yellow-glove-cleaning-san-diego', '_blank')}>
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3">
                    <Image
                      src="/icons/yelp-svgrepo-com.svg"
                      alt="Yelp Reviews"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <Badge className="bg-red-200 text-red-800 px-3 py-1 hover:bg-red-300 text-sm">
                    Yelp Reviews
                  </Badge>
                </div>

                {/* Facebook */}
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.open('https://www.facebook.com/yellowglove.cleaning/', '_blank')}>
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-3">
                    <Image
                      src="/icons/facebook-logo.svg"
                      alt="Facebook Reviews"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <Badge className="bg-blue-200 text-blue-800 px-3 py-1 hover:bg-blue-400 text-sm">
                    Facebook Reviews
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5da00]/20 via-[#f5da00]/10 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5da00]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3f97] mb-6">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-[#1e3f97]/70 mb-10 max-w-2xl mx-auto">
            Experience the same exceptional service that has earned us hundreds of 5-star reviews across San Diego.
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
      <Footer title="Real Reviews from Real Customers" description="Customer Reviews" />

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
