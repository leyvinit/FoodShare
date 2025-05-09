"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CreditCard, Calendar, DollarSign } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function DonateFundsPage() {
  const [amount, setAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Donation successful",
      description: "Thank you for your generous donation to FoodShare!",
    })

    // Reset form
    setAmount("25")
    setCustomAmount("")
    setName("")
    setEmail("")
    setCardNumber("")
    setExpiryDate("")
    setCvv("")
    setIsRecurring(false)
    setIsAnonymous(false)
    setIsSubmitting(false)
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const displayAmount = amount === "custom" ? customAmount || "0" : amount

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
              <p className="text-xl text-gray-600">
                Your donation helps us reduce food waste and fight hunger in our communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Donation Makes a Difference</h2>
                <p className="text-gray-600 mb-6">
                  Every dollar you donate helps us in our mission to reduce food waste and fight hunger. Your support
                  enables us to:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Expand Our Reach</h3>
                      <p className="text-gray-600">
                        Help us bring FoodShare to more communities and connect more donors with recipients.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Improve Our Technology</h3>
                      <p className="text-gray-600">
                        Enhance our platform to make food sharing even easier and more efficient.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Support Food Safety</h3>
                      <p className="text-gray-600">
                        Provide training and resources to ensure all shared food is safe and properly handled.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Build Community</h3>
                      <p className="text-gray-600">
                        Organize events and initiatives that bring people together around food sharing.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Tax Deductible</h3>
                  <p className="text-gray-600 text-sm">
                    FoodShare is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible to the
                    extent allowed by law. Our EIN: 12-3456789.
                  </p>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Make a Donation</CardTitle>
                    <CardDescription>Choose an amount and payment method to support our mission.</CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <Label>Donation Amount</Label>
                        <RadioGroup
                          value={amount}
                          onValueChange={handleAmountChange}
                          className="grid grid-cols-3 gap-4"
                        >
                          <div>
                            <RadioGroupItem value="10" id="amount-10" className="peer sr-only" />
                            <Label
                              htmlFor="amount-10"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              $10
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                            <Label
                              htmlFor="amount-25"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              $25
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                            <Label
                              htmlFor="amount-50"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              $50
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                            <Label
                              htmlFor="amount-100"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              $100
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="250" id="amount-250" className="peer sr-only" />
                            <Label
                              htmlFor="amount-250"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              $250
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                            <Label
                              htmlFor="amount-custom"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600"
                            >
                              <DollarSign className="mb-1 h-5 w-5" />
                              Custom
                            </Label>
                          </div>
                        </RadioGroup>

                        {amount === "custom" && (
                          <div className="mt-4">
                            <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                            <Input
                              id="custom-amount"
                              type="number"
                              min="1"
                              step="1"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              placeholder="Enter amount"
                              required={amount === "custom"}
                            />
                          </div>
                        )}

                        <div className="flex items-center space-x-2 mt-4">
                          <Checkbox
                            id="recurring"
                            checked={isRecurring}
                            onCheckedChange={(checked) => setIsRecurring(checked === true)}
                          />
                          <Label htmlFor="recurring" className="text-sm font-normal">
                            Make this a monthly recurring donation
                          </Label>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Your Information</h3>

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

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="anonymous"
                            checked={isAnonymous}
                            onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                          />
                          <Label htmlFor="anonymous" className="text-sm font-normal">
                            Make my donation anonymous
                          </Label>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Payment Information</h3>

                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <div className="relative">
                            <Input
                              id="card-number"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                            <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <div className="relative">
                              <Input
                                id="expiry"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YY"
                                required
                              />
                              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          `Donate $${displayAmount}`
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
                <h3 className="text-xl font-semibold mb-2">Meals Shared</h3>
                <p className="text-gray-600">
                  Over 50,000 meals have been shared through our platform, reducing food waste and feeding those in
                  need.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">1,200+</div>
                <h3 className="text-xl font-semibold mb-2">Active Donors</h3>
                <p className="text-gray-600">
                  More than 1,200 individuals and businesses regularly share food through our platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
                <h3 className="text-xl font-semibold mb-2">Communities Served</h3>
                <p className="text-gray-600">
                  We're active in over 25 communities, connecting neighbors and reducing food insecurity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
