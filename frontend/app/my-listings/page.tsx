"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Edit, Eye, MessageSquare, Plus, Trash } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { myListings } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"

export default function MyListingsPage() {
  const [listings, setListings] = useState(myListings)
  const { toast } = useToast()

  const handleDelete = (id: number) => {
    // In a real app, you would call an API to delete the listing
    setListings(listings.filter((listing) => listing.id !== id))

    toast({
      title: "Listing deleted",
      description: "Your listing has been deleted successfully.",
    })
  }

  // Filter listings by status
  const availableListings = listings.filter((listing) => listing.status === "available")
  const claimedListings = listings.filter((listing) => listing.status === "claimed")
  const expiredListings = listings.filter((listing) => listing.status === "expired")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Listings</h1>
              <p className="text-gray-600 mt-1">Manage your food donations</p>
            </div>
            <Link href="/donate">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" />
                New Listing
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="available">
            <TabsList>
              <TabsTrigger value="available">Available ({availableListings.length})</TabsTrigger>
              <TabsTrigger value="claimed">Claimed ({claimedListings.length})</TabsTrigger>
              <TabsTrigger value="expired">Expired ({expiredListings.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="available" className="mt-6">
              {availableListings.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 mb-4">You don't have any available listings</p>
                  <Link href="/donate">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="mr-2 h-4 w-4" />
                      Create a Listing
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableListings.map((listing) => (
                    <Card key={listing.id}>
                      <div className="aspect-video relative bg-gray-100">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="object-cover w-full h-full"
                        />
                        <Badge className="absolute top-2 right-2 bg-emerald-500">Available</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{listing.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{listing.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Available until {listing.availableUntil}</span>
                          </div>
                          {listing.requests > 0 && (
                            <div className="flex items-center text-sm text-emerald-600">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{listing.requests} requests received</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-red-500 hover:text-red-600"
                          onClick={() => handleDelete(listing.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="claimed" className="mt-6">
              {claimedListings.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">You don't have any claimed listings</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {claimedListings.map((listing) => (
                    <Card key={listing.id}>
                      <div className="aspect-video relative bg-gray-100">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="object-cover w-full h-full"
                        />
                        <Badge className="absolute top-2 right-2 bg-blue-500">Claimed</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{listing.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{listing.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Available until {listing.availableUntil}</span>
                          </div>
                          {listing.requests > 0 && (
                            <div className="flex items-center text-sm text-blue-600">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{listing.requests} requests received</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-red-500 hover:text-red-600"
                          onClick={() => handleDelete(listing.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="expired" className="mt-6">
              {expiredListings.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">You don't have any expired listings</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expiredListings.map((listing) => (
                    <Card key={listing.id} className="opacity-75">
                      <div className="aspect-video relative bg-gray-100">
                        <img
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          className="object-cover w-full h-full"
                        />
                        <Badge className="absolute top-2 right-2 bg-gray-500">Expired</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{listing.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{listing.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Expired on {listing.availableUntil}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Plus className="mr-2 h-4 w-4" />
                          Relist
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-red-500 hover:text-red-600"
                          onClick={() => handleDelete(listing.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
