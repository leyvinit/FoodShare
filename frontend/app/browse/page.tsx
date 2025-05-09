"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Filter, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { foodListings, categories } from "@/lib/mock-data"

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [foodType, setFoodType] = useState("all")
  const [distance, setDistance] = useState("all")
  const [filteredListings, setFilteredListings] = useState(foodListings)

  // Apply filters when search criteria change
  useEffect(() => {
    let results = [...foodListings]

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (listing) => listing.title.toLowerCase().includes(query) || listing.description.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (foodType !== "all") {
      results = results.filter((listing) => listing.category === foodType)
    }

    // Apply distance filter
    if (distance !== "all") {
      const maxDistance = Number(distance)
      results = results.filter((listing) => listing.distance <= maxDistance)
    }

    setFilteredListings(results)
  }, [searchQuery, foodType, distance])

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container py-8 flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Find Food Near You</h1>
            <p className="text-gray-600">Browse available food in your community</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search food listings..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={foodType} onValueChange={setFoodType}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Food Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={distance} onValueChange={setDistance}>
                <SelectTrigger className="w-[180px]">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Distance</SelectItem>
                  <SelectItem value="1">Within 1 km</SelectItem>
                  <SelectItem value="5">Within 5 km</SelectItem>
                  <SelectItem value="10">Within 10 km</SelectItem>
                  <SelectItem value="25">Within 25 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredListings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No food listings match your search criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("")
                  setFoodType("all")
                  setDistance("all")
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden">
                  <div className="aspect-video relative bg-gray-100">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{listing.title}</CardTitle>
                      <Badge
                        variant={
                          listing.quantity === "high"
                            ? "success"
                            : listing.quantity === "medium"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {listing.quantity.charAt(0).toUpperCase() + listing.quantity.slice(1)}
                      </Badge>
                    </div>
                    <CardDescription>{listing.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>
                          {listing.location} ({listing.distance} km away)
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Available until {listing.availableUntil}</span>
                      </div>
                      {listing.dietaryInfo && listing.dietaryInfo.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {listing.dietaryInfo.map((info, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {info}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/listing/${listing.id}`} className="w-full">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Request Pickup</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
