"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MoreHorizontal, Phone, Video } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MessageThread } from "@/components/message-thread"
import { mockMessages } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MessageDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("conversation")
  const { toast } = useToast()

  // Find the message thread by ID
  const messageThread = mockMessages.find((m) => m.id === Number(params.id))

  // Mark message as read when viewed
  useEffect(() => {
    if (messageThread?.unread) {
      // In a real app, this would update the database
      console.log(`Marking message ${params.id} as read`)
    }
  }, [messageThread, params.id])

  if (!messageThread) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 container py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Message not found</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">The message you're looking for doesn't exist.</p>
            <Link href="/messages">
              <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                Back to Messages
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleBlockUser = () => {
    toast({
      title: "User blocked",
      description: `You have blocked ${messageThread.sender.name}.`,
      variant: "default",
    })
  }

  const handleReportUser = () => {
    toast({
      title: "Report submitted",
      description: "Thank you for your report. We'll review it shortly.",
      variant: "default",
    })
  }

  const handleDeleteConversation = () => {
    toast({
      title: "Conversation deleted",
      description: "This conversation has been deleted.",
      variant: "default",
    })
  }

  const handleCall = () => {
    toast({
      title: "Call feature",
      description: "Voice calling will be available in the next update.",
      variant: "default",
    })
  }

  const handleVideoCall = () => {
    toast({
      title: "Video call feature",
      description: "Video calling will be available in the next update.",
      variant: "default",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-4 md:py-8">
        <div className="flex flex-col h-[calc(100vh-200px)]">
          <div className="mb-4">
            <Link href="/messages" className="flex items-center text-emerald-600 hover:underline mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to messages
            </Link>

            <Card className="mb-4">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={messageThread.sender.avatar || "/placeholder.svg"}
                      alt={messageThread.sender.name}
                    />
                    <AvatarFallback>{messageThread.sender.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{messageThread.sender.name}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {messageThread.listing.title}
                      <span className="inline-flex ml-2">
                        <Badge variant="outline" className="text-xs">
                          Active now
                        </Badge>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={handleCall}
                    aria-label="Voice call"
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={handleVideoCall}
                    aria-label="Video call"
                  >
                    <Video className="h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full" aria-label="More options">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => window.open(`/listing/${messageThread.listing.id}`, "_blank")}>
                        View listing
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setActiveTab("details")}>View details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleBlockUser} className="text-red-500 dark:text-red-400">
                        Block user
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleReportUser} className="text-amber-500 dark:text-amber-400">
                        Report user
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleDeleteConversation} className="text-red-500 dark:text-red-400">
                        Delete conversation
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="conversation">Conversation</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            <TabsContent value="conversation" className="flex-1 overflow-hidden">
              <Card className="flex-1 flex flex-col overflow-hidden h-full">
                <CardContent className="p-0 flex-1 overflow-hidden flex flex-col">
                  <MessageThread
                    requestId={params.id}
                    otherUser={{
                      id: messageThread.sender.id,
                      first_name: messageThread.sender.name.split(" ")[0],
                      last_name: messageThread.sender.name.split(" ")[1] || "",
                      avatar_url: messageThread.sender.avatar,
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="flex-1 overflow-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Listing Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <img
                      src={messageThread.listing.image || "/placeholder.svg"}
                      alt={messageThread.listing.title}
                      className="rounded-lg w-full md:w-1/3 object-cover aspect-video"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{messageThread.listing.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This conversation is regarding the food listing shown above. You can discuss pickup
                        arrangements, ask questions about the food, or coordinate other details.
                      </p>
                      <Button
                        onClick={() => window.open(`/listing/${messageThread.listing.id}`, "_blank")}
                        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                      >
                        View Full Listing
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3">About {messageThread.sender.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={messageThread.sender.avatar || "/placeholder.svg"}
                          alt={messageThread.sender.name}
                        />
                        <AvatarFallback>{messageThread.sender.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-lg">{messageThread.sender.name}</p>
                        <p className="text-gray-600 dark:text-gray-400">Food Donor</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${star <= 4 ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">(4.0)</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Member since {new Date().getFullYear() - 2}. Has donated 24 food items and helped reduce
                      approximately 45kg of food waste.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3">Safety Tips</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Always meet in public places for food pickup</li>
                      <li>Check the food quality before accepting</li>
                      <li>Be respectful and communicate clearly about pickup times</li>
                      <li>Report any concerns to our support team</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
