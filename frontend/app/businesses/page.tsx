import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BusinessesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">FoodShare for Businesses</h1>
              <p className="text-xl text-gray-600">
                Reduce food waste, support your community, and enhance your corporate social responsibility with
                FoodShare.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Join FoodShare?</h2>
                <p className="text-gray-600 mb-4">
                  For restaurants, cafes, grocery stores, and food producers, FoodShare offers a simple and effective
                  way to reduce food waste while making a positive impact in your community.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Reduce Waste & Costs</h3>
                      <p className="text-gray-600">
                        Lower your waste disposal costs and environmental footprint by donating surplus food.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Enhance Your Reputation</h3>
                      <p className="text-gray-600">
                        Demonstrate your commitment to sustainability and community support.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Tax Benefits</h3>
                      <p className="text-gray-600">Qualify for tax deductions on eligible food donations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Employee Engagement</h3>
                      <p className="text-gray-600">
                        Boost staff morale by involving them in meaningful community initiatives.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started Today</Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop"
                  alt="Restaurant kitchen staff preparing food"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works for Businesses</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  Create a business account on FoodShare and complete your profile with your business details and
                  location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">List Surplus Food</h3>
                <p className="text-gray-600">
                  Post available food items with details about quantity, pickup times, and any dietary information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect with Recipients</h3>
                <p className="text-gray-600">
                  Receive and approve requests from individuals or organizations who can use your surplus food.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete the Donation</h3>
                <p className="text-gray-600">
                  Coordinate pickup or delivery and receive documentation for your records and tax purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Business Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Green Grocers",
                  type: "Grocery Store",
                  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop",
                  quote:
                    "Since joining FoodShare, we've reduced our food waste by 30% and connected with amazing people in our community. It's a win-win for our business and the environment.",
                  person: "Sarah Johnson, Owner",
                },
                {
                  name: "Neighborhood Cafe",
                  type: "Restaurant",
                  image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&auto=format&fit=crop",
                  quote:
                    "FoodShare has become an integral part of our daily operations. Instead of throwing away perfectly good food at the end of the day, we can share it with those who need it.",
                  person: "Michael Chen, Manager",
                },
                {
                  name: "Fresh Farms Co-op",
                  type: "Produce Supplier",
                  image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&auto=format&fit=crop",
                  quote:
                    "As a produce supplier, we often have surplus fruits and vegetables that don't meet retail standards but are still perfectly edible. FoodShare helps us ensure this food doesn't go to waste.",
                  person: "Aisha Patel, Operations Director",
                },
              ].map((story, index) => (
                <Card key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-emerald-600 text-sm mb-4">{story.type}</p>
                    <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                    <p className="text-gray-500 text-sm">— {story.person}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Reduce Food Waste?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of businesses already making a difference with FoodShare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Sign Up as a Business
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
