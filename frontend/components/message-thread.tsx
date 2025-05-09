"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { sendMessage } from "@/app/actions/messages"
import { useToast } from "@/hooks/use-toast"
import { Check, CheckCheck, Clock, Send, ImageIcon, Paperclip, Smile } from "lucide-react"
import { mockUser } from "@/lib/mock-data"

// Mock conversation data for development
const mockConversations = {
  "1": [
    {
      id: "msg-1",
      content: "Hi, I'm interested in your Fresh Bakery Items. Is it still available?",
      created_at: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      sender_id: mockUser.id,
      profiles: {
        first_name: mockUser.user_metadata.first_name,
        last_name: mockUser.user_metadata.last_name,
        avatar_url: mockUser.user_metadata.avatar_url,
      },
    },
    {
      id: "msg-2",
      content: "Hi Nilovar, your request for the bakery items has been accepted! When would you like to pick them up?",
      created_at: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
      sender_id: "user-456",
      profiles: {
        first_name: "Downtown",
        last_name: "Bakery",
        avatar_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
      },
    },
  ],
  "2": [
    {
      id: "msg-3",
      content: "Hello, do you still have the Organic Produce Box available?",
      created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      sender_id: mockUser.id,
      profiles: {
        first_name: mockUser.user_metadata.first_name,
        last_name: mockUser.user_metadata.last_name,
        avatar_url: mockUser.user_metadata.avatar_url,
      },
    },
    {
      id: "msg-4",
      content: "Thank you for your interest in our produce box. We're available for pickup between 2-5pm tomorrow.",
      created_at: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
      sender_id: "user-789",
      profiles: {
        first_name: "Green",
        last_name: "Farms",
        avatar_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
      },
    },
  ],
  "3": [
    {
      id: "msg-5",
      content: "Hi, I'd like to know more about the Prepared Lunch Meals.",
      created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      sender_id: mockUser.id,
      profiles: {
        first_name: mockUser.user_metadata.first_name,
        last_name: mockUser.user_metadata.last_name,
        avatar_url: mockUser.user_metadata.avatar_url,
      },
    },
    {
      id: "msg-6",
      content: "Hi there! We have 5 lunch boxes available. They're all vegetarian with tofu, rice, and fresh veggies.",
      created_at: new Date(Date.now() - 129600000).toISOString(), // 1.5 days ago
      sender_id: "user-101",
      profiles: {
        first_name: "Healthy",
        last_name: "Eats",
        avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
      },
    },
  ],
}

interface Message {
  id: string
  content: string
  created_at: string
  sender_id: string
  status?: "sending" | "sent" | "delivered" | "read"
  profiles: {
    first_name: string
    last_name: string
    avatar_url: string | null
  }
}

interface MessageThreadProps {
  requestId: string
  otherUser: {
    id: string
    first_name: string
    last_name: string
    avatar_url: string | null
  }
}

export function MessageThread({ requestId, otherUser }: MessageThreadProps) {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [lastRead, setLastRead] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [useMockData, setUseMockData] = useState(false)

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Check if we have mock data for this conversation
        if (mockConversations[requestId]) {
          console.log("Using mock conversation data for development")
          setUseMockData(true)

          // Add status to messages
          const messagesWithStatus = mockConversations[requestId].map((message) => ({
            ...message,
            status: message.sender_id === user?.id ? "read" : undefined,
          }))

          setMessages(messagesWithStatus)

          // Set last read message
          const otherUserMessages = messagesWithStatus.filter((m) => m.sender_id === otherUser.id)
          if (otherUserMessages.length > 0) {
            setLastRead(otherUserMessages[otherUserMessages.length - 1].id)
          }

          return
        }

        // If no mock data, try to fetch from Supabase
        setUseMockData(false)
        const { data, error } = await supabase
          .from("messages")
          .select(`
            id,
            content,
            created_at,
            sender_id,
            profiles(first_name, last_name, avatar_url)
          `)
          .eq("request_id", requestId)
          .order("created_at", { ascending: true })

        if (error) {
          console.error("Error fetching messages:", error)
          // If there's an error with Supabase, fall back to mock data
          if (mockConversations[requestId]) {
            console.log("Falling back to mock data after Supabase error")
            setUseMockData(true)
            setMessages(
              mockConversations[requestId].map((message) => ({
                ...message,
                status: message.sender_id === user?.id ? "read" : undefined,
              })),
            )
          }
          return
        }

        // Add status to messages
        const messagesWithStatus =
          data?.map((message) => ({
            ...message,
            status: message.sender_id === user?.id ? "read" : undefined,
          })) || []

        setMessages(messagesWithStatus)

        // Set last read message
        const otherUserMessages = messagesWithStatus.filter((m) => m.sender_id === otherUser.id)
        if (otherUserMessages.length > 0) {
          setLastRead(otherUserMessages[otherUserMessages.length - 1].id)
        }
      } catch (err) {
        console.error("Unexpected error in fetchMessages:", err)
        // Fall back to mock data in case of any error
        if (mockConversations[requestId]) {
          console.log("Falling back to mock data after unexpected error")
          setUseMockData(true)
          setMessages(
            mockConversations[requestId].map((message) => ({
              ...message,
              status: message.sender_id === user?.id ? "read" : undefined,
            })),
          )
        }
      }
    }

    fetchMessages()

    // Only set up real-time subscriptions if not using mock data
    if (!useMockData) {
      // Subscribe to new messages
      const channel = supabase
        .channel(`messages:${requestId}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "messages",
            filter: `request_id=eq.${requestId}`,
          },
          (payload) => {
            // Fetch the complete message with profile info
            supabase
              .from("messages")
              .select(`
                id,
                content,
                created_at,
                sender_id,
                profiles(first_name, last_name, avatar_url)
              `)
              .eq("id", payload.new.id)
              .single()
              .then(({ data }) => {
                if (data) {
                  // Add status to the message
                  const messageWithStatus = {
                    ...data,
                    status: data.sender_id === user?.id ? "delivered" : undefined,
                  }

                  setMessages((current) => [...current, messageWithStatus])

                  // If message is from other user, update last read
                  if (data.sender_id === otherUser.id) {
                    setLastRead(data.id)
                  }
                }
              })
          },
        )
        .on("presence", { event: "sync" }, () => {
          const userStates = channel.presenceState()
          const otherUserState = Object.values(userStates).find((state: any) =>
            state.some((presence: any) => presence.user_id === otherUser.id),
          )

          if (otherUserState) {
            const typingState = otherUserState.find((presence: any) => presence.typing === true)
            setIsTyping(!!typingState)
          }
        })
        .subscribe()

      // Join presence channel
      channel.track({
        user_id: user?.id,
        online_at: new Date().toISOString(),
        typing: false,
      })

      return () => {
        supabase.removeChannel(channel)
      }
    } else {
      // For mock data, simulate the other user typing occasionally
      const typingInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          setIsTyping(true)
          setTimeout(() => setIsTyping(false), 3000)
        }
      }, 10000)

      return () => clearInterval(typingInterval)
    }
  }, [requestId, user?.id, otherUser.id, useMockData])

  // Handle typing indicator
  const handleTyping = () => {
    if (useMockData) {
      // For mock data, we don't need to do anything
      return
    }

    const channel = supabase.channel(`messages:${requestId}`)
    channel.track({
      user_id: user?.id,
      online_at: new Date().toISOString(),
      typing: true,
    })

    // Reset typing status after 2 seconds of inactivity
    setTimeout(() => {
      channel.track({
        user_id: user?.id,
        online_at: new Date().toISOString(),
        typing: false,
      })
    }, 2000)
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "80px" // Reset height
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`
    }
  }, [newMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setIsLoading(true)

    // Optimistically add message to UI
    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      content: newMessage,
      created_at: new Date().toISOString(),
      sender_id: user?.id || "",
      status: "sending",
      profiles: {
        first_name: user?.user_metadata.first_name || "",
        last_name: user?.user_metadata.last_name || "",
        avatar_url: user?.user_metadata.avatar_url || null,
      },
    }

    setMessages((current) => [...current, optimisticMessage])
    setNewMessage("")

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "80px"
    }

    if (useMockData) {
      // For mock data, simulate sending a message
      setTimeout(() => {
        // Update optimistic message with "sent" status
        setMessages((current) =>
          current.map((m) => (m.id === optimisticMessage.id ? { ...m, id: `msg-${Date.now()}`, status: "sent" } : m)),
        )

        // Simulate message being delivered after 1 second
        setTimeout(() => {
          setMessages((current) =>
            current.map((m) => (m.id === `msg-${Date.now()}` ? { ...m, status: "delivered" } : m)),
          )

          // Simulate message being read after 2 more seconds
          setTimeout(() => {
            setMessages((current) => current.map((m) => (m.id === `msg-${Date.now()}` ? { ...m, status: "read" } : m)))

            // Simulate a reply after 3 more seconds
            setTimeout(() => {
              const replyMessage: Message = {
                id: `msg-reply-${Date.now()}`,
                content: getAutoReply(newMessage),
                created_at: new Date().toISOString(),
                sender_id: otherUser.id,
                profiles: {
                  first_name: otherUser.first_name,
                  last_name: otherUser.last_name,
                  avatar_url: otherUser.avatar_url,
                },
              }

              setMessages((current) => [...current, replyMessage])
            }, 3000)
          }, 2000)
        }, 1000)
      }, 800)

      setIsLoading(false)
      return
    }

    const formData = new FormData()
    formData.append("requestId", requestId)
    formData.append("content", newMessage.trim())

    const result = await sendMessage(formData)
    setIsLoading(false)

    if (result.error) {
      // Remove optimistic message and show error
      setMessages((current) => current.filter((m) => m.id !== optimisticMessage.id))
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      })
    } else if (result.messageId) {
      // Update optimistic message with real ID and status
      setMessages((current) =>
        current.map((m) => (m.id === optimisticMessage.id ? { ...m, id: result.messageId, status: "sent" } : m)),
      )

      // Simulate message being delivered after 1 second
      setTimeout(() => {
        setMessages((current) => current.map((m) => (m.id === result.messageId ? { ...m, status: "delivered" } : m)))

        // Simulate message being read after 2 more seconds
        setTimeout(() => {
          setMessages((current) => current.map((m) => (m.id === result.messageId ? { ...m, status: "read" } : m)))
        }, 2000)
      }, 1000)
    }
  }

  // Generate an automatic reply based on the message content
  const getAutoReply = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("pickup") || lowerMessage.includes("pick up") || lowerMessage.includes("collect")) {
      return "You can pick up the items anytime between 2pm and 6pm tomorrow. Does that work for you?"
    } else if (lowerMessage.includes("available") || lowerMessage.includes("still")) {
      return "Yes, the items are still available! Would you like to arrange a pickup?"
    } else if (lowerMessage.includes("thank")) {
      return "You're welcome! Happy to help reduce food waste in our community."
    } else if (lowerMessage.includes("time") || lowerMessage.includes("when")) {
      return "I'm available most afternoons. How about tomorrow around 3pm?"
    } else if (
      lowerMessage.includes("where") ||
      lowerMessage.includes("location") ||
      lowerMessage.includes("address")
    ) {
      return "We're located at 123 Main Street. I can send you the exact location via message when you're ready to pick up."
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi ") || lowerMessage.includes("hey")) {
      return "Hello! Thanks for your interest in the food items. How can I help you?"
    } else {
      return "Thanks for your message! I'll get back to you as soon as possible. Let me know if you have any specific questions about the food items."
    }
  }

  const getMessageStatus = (message: Message) => {
    if (message.sender_id !== user?.id) return null

    switch (message.status) {
      case "sending":
        return <Clock className="h-3 w-3 text-gray-400" />
      case "sent":
        return <Check className="h-3 w-3 text-gray-400" />
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-gray-400" />
      case "read":
        return <CheckCheck className="h-3 w-3 text-emerald-500" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message) => {
            const isCurrentUser = message.sender_id === user?.id
            return (
              <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                <div className={`flex ${isCurrentUser ? "flex-row-reverse" : "flex-row"} items-end gap-2 max-w-[80%]`}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={isCurrentUser ? user?.user_metadata.avatar_url : otherUser.avatar_url || ""} />
                    <AvatarFallback>
                      {isCurrentUser
                        ? `${user?.user_metadata.first_name?.[0]}${user?.user_metadata.last_name?.[0]}`
                        : `${otherUser.first_name[0]}${otherUser.last_name[0]}`}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        isCurrentUser
                          ? "bg-emerald-600 text-white dark:bg-emerald-700"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                      {new Date(message.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      <span className="ml-1">{getMessageStatus(message)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex flex-row items-end gap-2 max-w-[80%]">
              <Avatar className="h-8 w-8">
                <AvatarImage src={otherUser.avatar_url || ""} />
                <AvatarFallback>{`${otherUser.first_name[0]}${otherUser.last_name[0]}`}</AvatarFallback>
              </Avatar>
              <div>
                <div className="rounded-lg p-3 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  if (newMessage.trim()) {
                    handleSubmit(e)
                  }
                }
              }}
              onInput={handleTyping}
              placeholder="Type your message..."
              className="min-h-[80px] pr-24 resize-none"
            />
            <div className="absolute bottom-2 right-2 flex space-x-1">
              <Button type="button" size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Smile className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button type="button" size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Paperclip className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button type="button" size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            size="icon"
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 h-10 w-10 rounded-full flex-shrink-0"
            disabled={isLoading || !newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
