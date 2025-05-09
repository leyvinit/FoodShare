"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Utensils, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { heroSlides } from "@/lib/mock-data"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
      quote:
        "FoodShare has transformed how our restaurant handles surplus food. Instead of throwing away perfectly good meals at the end of the day, we can connect with people who need them. It's a win-win for everyone.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
      quote:
        "As a student on a tight budget, FoodShare has been a lifesaver. I've been able to access quality food that would otherwise go to waste, and I've met amazing people in my community along the way.",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Non-profit Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
      quote:
        "Our organization uses FoodShare to connect with local businesses that have surplus food. The platform makes it easy to coordinate pickups and distribute food to families in need. It's been an invaluable tool for our community outreach.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[600px] overflow-hidden">
          {/* Carousel */}
          <div className="absolute inset-0 w-full h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Reduce Food Waste, Feed Your Community
            </h1>
            <p className="mt-6 text-xl max-w-2xl">
              Connect with local businesses and neighbors to share surplus food and reduce waste in your community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Share Food
                </Button>
              </Link>
              <Link href="/browse">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Find Food
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 z-20"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Post Surplus Food</h3>
                <p className="text-gray-600">
                  Restaurants, cafes, and individuals can easily post information about available surplus food.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Nearby Food</h3>
                <p className="text-gray-600">
                  Browse available food in your area and filter by type, distance, and dietary restrictions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Collect</h3>
                <p className="text-gray-600">
                  Message donors directly to arrange pickup and help reduce food waste in your community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white">
                  <CardContent className="p-6">
                    <Quote className="h-10 w-10 text-emerald-100 mb-4" />
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/about">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Read More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
