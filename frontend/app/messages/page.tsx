"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MessageSquare, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { mockMessages } from "@/lib/mock-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [messages, setMessages] = useState(mockMessages)
  const [activeTab, setActiveTab] = useState("all")
  const router = useRouter()

  // Filter messages based on search query and active tab
  const filteredMessages = messages.filter(
    (message) =>
      (activeTab === "all" || (activeTab === "unread" && message.unread)) &&
      (message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Mark message as read
  const markAsRead = (id: number) => {
    setMessages(
      messages.map((message) => {
        if (message.id === id) {
          return { ...message, unread: false }
        }
        return message
      }),
    )
  }

  // Simulate new message coming in
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockMessages.length)
      setMessages(
        messages.map((message, index) => {
          if (index === randomIndex && !message.unread) {
            return {
              ...message,
              lastMessage: "Hey, just checking if you're still interested in the food item?",
              timestamp: new Date().toISOString(),
              unread: true,
            }
          }
          return message
        }),
      )
    }, 45000) // 45 seconds

    return () => clearTimeout(timer)
  }, [messages])

  const handleMessageClick = (id: number) => {
    markAsRead(id)
    router.push(`/messages/${id}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Messages</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Your conversations with food donors and recipients
              </p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search messages..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setActiveTab("all")}>All Messages</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab("unread")}>Unread Only</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="all">All Messages</TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {messages.filter((m) => m.unread).length > 0 && (
                  <Badge className="ml-2 bg-emerald-500 hover:bg-emerald-600">
                    {messages.filter((m) => m.unread).length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredMessages.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <MessageSquare className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {searchQuery
                    ? "No messages match your search"
                    : activeTab === "unread"
                      ? "No unread messages"
                      : "No messages yet"}
                </p>
                {searchQuery && (
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredMessages.map((message) => (
                <Card
                  key={message.id}
                  className={`hover:shadow-md transition-shadow cursor-pointer ${
                    message.unread ? "border-l-4 border-l-emerald-500" : ""
                  }`}
                  onClick={() => handleMessageClick(message.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                        <AvatarFallback>{message.sender.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{message.sender.name}</h3>
                            {message.unread && <Badge className="bg-emerald-500 text-white">New</Badge>}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatMessageTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{message.listing.title}</p>
                        <p className="text-sm mt-2 truncate">{message.lastMessage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Helper function to format message time
function formatMessageTime(timestamp: string): string {
  const messageDate = new Date(timestamp)
  const now = new Date()
  const diffMs = now.getTime() - messageDate.getTime()
  const diffMins = Math.round(diffMs / 60000)
  const diffHours = Math.round(diffMs / 3600000)
  const diffDays = Math.round(diffMs / 86400000)

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays}d ago`

  return messageDate.toLocaleDateString()
}
