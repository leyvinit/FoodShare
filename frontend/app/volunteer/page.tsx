"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function VolunteerPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [availability, setAvailability] = useState<Date[]>([])
  const [interests, setInterests] = useState<string[]>([])
  const [experience, setExperience] = useState("")
  const [reason, setReason] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Application submitted",
      description: "Thank you for your interest in volunteering! We'll be in touch soon.",
    })

    // Reset form
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setCity("")
    setState("")
    setZip("")
    setAvailability([])
    setInterests([])
    setExperience("")
    setReason("")
    setIsSubmitting(false)
  }

  const handleInterestChange = (interest: string) => {
    setInterests((current) => {
      if (current.includes(interest)) {
        return current.filter((i) => i !== interest)
      } else {
        return [...current, interest]
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Volunteer With Us</h1>
              <p className="text-xl text-gray-600">
                Join our team of dedicated volunteers and help us reduce food waste while fighting hunger in our
                communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-8 space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Why Volunteer?</h2>
                    <p className="text-gray-600 mb-4">
                      By volunteering with FoodShare, you'll make a direct impact on reducing food waste and helping
                      those in need in your community.
                    </p>
                    <p className="text-gray-600">
                      Our volunteers are the backbone of our organization, helping with food collection, distribution,
                      community outreach, and more.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h2>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2">•</span>
                        <span>Food Collection & Delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2">•</span>
                        <span>Community Outreach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2">•</span>
                        <span>Event Support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2">•</span>
                        <span>Administrative Support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2">•</span>
                        <span>Marketing & Social Media</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Time Commitment</h2>
                    <p className="text-gray-600">
                      We welcome volunteers who can commit to regular shifts as well as those who can only help
                      occasionally. Every hour makes a difference!
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Application</CardTitle>
                    <CardDescription>
                      Fill out the form below to join our volunteer team. We'll contact you to discuss opportunities
                      that match your interests and availability.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Personal Information</h3>

                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="123 Main St"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="San Francisco"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              placeholder="CA"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input
                              id="zip"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                              placeholder="94110"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Availability & Interests</h3>

                        <div className="space-y-2">
                          <Label>When are you available to volunteer?</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !availability.length && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {availability.length > 0 ? (
                                  availability.length > 3 ? (
                                    `${availability.length} days selected`
                                  ) : (
                                    availability.map((date) => format(date, "PPP")).join(", ")
                                  )
                                ) : (
                                  <span>Select days you're available</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="multiple"
                                selected={availability}
                                onSelect={setAvailability}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label>What volunteer opportunities interest you?</Label>
                          <div className="grid md:grid-cols-2 gap-2 mt-2">
                            {[
                              "Food Collection & Delivery",
                              "Community Outreach",
                              "Event Support",
                              "Administrative Support",
                              "Marketing & Social Media",
                              "Food Safety Education",
                              "Fundraising",
                              "Technical Support",
                            ].map((interest) => (
                              <div key={interest} className="flex items-center space-x-2">
                                <Checkbox
                                  id={interest.toLowerCase().replace(/\s+/g, "-")}
                                  checked={interests.includes(interest)}
                                  onCheckedChange={() => handleInterestChange(interest)}
                                />
                                <Label
                                  htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}
                                  className="text-sm font-normal"
                                >
                                  {interest}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Relevant Experience</Label>
                          <Textarea
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            placeholder="Tell us about any relevant experience you have"
                            className="min-h-[100px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reason">Why do you want to volunteer with FoodShare?</Label>
                          <Textarea
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Share your motivation for volunteering with us"
                            className="min-h-[100px]"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Volunteer Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Chen",
                  role: "Food Delivery Volunteer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
                  quote:
                    "Volunteering with FoodShare has been incredibly rewarding. I get to connect with my community while helping reduce food waste. It's amazing to see the direct impact of our work.",
                },
                {
                  name: "Aisha Patel",
                  role: "Community Outreach Volunteer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
                  quote:
                    "I've been volunteering with FoodShare for over a year now, and it's become one of the most meaningful parts of my week. The team is supportive, and I've learned so much about food insecurity in our community.",
                },
                {
                  name: "David Rodriguez",
                  role: "Event Coordinator Volunteer",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
                  quote:
                    "As a volunteer event coordinator, I've seen firsthand how FoodShare brings people together. Our community events not only distribute food but also educate people about reducing waste and eating sustainably.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
