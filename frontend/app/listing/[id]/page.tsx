"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, MessageSquare, Share2, ThumbsUp } from "lucide-react"
import { foodListings } from "@/lib/mock-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function ListingPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()

  // Find the listing by ID
  const listing = foodListings.find((item) => item.id === Number(params.id)) || foodListings[0]

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSending(false)
    setMessage("")

    toast({
      title: "Message Sent",
      description: "Your message has been sent to the donor!",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container py-8 flex-1">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link href="/browse" className="text-sm text-emerald-600 hover:underline flex items-center">
              ← Back to listings
            </Link>

            <div className="grid gap-4">
              <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="grid md:grid-cols-4 gap-2">
                {[listing.image, listing.image, listing.image, listing.image].map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${listing.title} ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                {listing.title}
                <Badge
                  variant={
                    listing.quantity === "high" ? "success" : listing.quantity === "medium" ? "warning" : "destructive"
                  }
                >
                  {listing.quantity.charAt(0).toUpperCase() + listing.quantity.slice(1)}
                </Badge>
              </h1>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>
                    {listing.location} ({listing.distance} km away)
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Available until {listing.availableUntil}</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="details">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="donor">Donor</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Description</h3>
                  <p className="mt-2 text-gray-700">{listing.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Category</h3>
                  <p className="mt-2 text-gray-700">
                    {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Dietary Information</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {listing.dietaryInfo && listing.dietaryInfo.length > 0 ? (
                      listing.dietaryInfo.map((info, index) => (
                        <Badge key={index} variant="outline">
                          {info.charAt(0).toUpperCase() + info.slice(1)}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-gray-500">No dietary information provided</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="donor">
                <div className="flex items-center gap-4 p-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={listing.donorAvatar || "/placeholder.svg"} />
                    <AvatarFallback>{listing.donorName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{listing.donorName}</h3>
                    <p className="text-gray-600">Member since January 2025</p>
                    <div className="flex items-center mt-1">
                      <ThumbsUp className="h-4 w-4 text-emerald-600 mr-1" />
                      <span className="text-sm text-gray-600">98% positive feedback</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="location">
                <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Map view would be displayed here</p>
                </div>
                <p className="mt-4 text-gray-700">Exact address will be shared after the donor accepts your request.</p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Request This Food</CardTitle>
                <CardDescription>Send a message to the donor to arrange pickup</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendMessage}>
                  <Textarea
                    placeholder="Introduce yourself and explain why you're interested in this food..."
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={handleSendMessage}
                  disabled={isSending || !message.trim()}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Listing
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• Meet in public places for food pickup when possible</p>
                <p>• Check food quality before consumption</p>
                <p>• Respect pickup times agreed with donors</p>
                <p>• Report any concerns to our support team</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
