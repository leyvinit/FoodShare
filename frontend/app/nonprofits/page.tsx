import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NonprofitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">FoodShare for Nonprofits</h1>
              <p className="text-xl text-gray-600">
                Access surplus food resources, streamline your distribution, and maximize your impact in fighting
                hunger.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&auto=format&fit=crop"
                  alt="Volunteers distributing food"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">How FoodShare Helps Nonprofits</h2>
                <p className="text-gray-600 mb-4">
                  For food banks, shelters, community kitchens, and other nonprofit organizations, FoodShare provides a
                  reliable source of food donations and streamlined logistics.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Diverse Food Sources</h3>
                      <p className="text-gray-600">
                        Connect with a variety of food donors, from restaurants and grocery stores to individuals with
                        surplus food.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Simplified Logistics</h3>
                      <p className="text-gray-600">
                        Coordinate pickups and deliveries through our user-friendly platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Inventory Management</h3>
                      <p className="text-gray-600">
                        Track incoming donations and manage your food inventory efficiently.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-semibold">Community Building</h3>
                      <p className="text-gray-600">
                        Connect with other organizations and build a network of support in your community.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Partner With Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Easy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Register Your Organization</h3>
                <p className="text-gray-600">
                  Create an account for your nonprofit and provide details about your organization, mission, and the
                  communities you serve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Set Your Preferences</h3>
                <p className="text-gray-600">
                  Specify the types of food you can accept, your pickup capabilities, and your distribution schedule.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Receiving Donations</h3>
                <p className="text-gray-600">
                  Browse available food listings, request items that meet your needs, and coordinate pickups with
                  donors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nonprofit Partner Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "City Food Bank",
                  image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop",
                  quote:
                    "FoodShare has transformed how we source food for our community. We now receive a steady stream of high-quality donations from local businesses that previously went to waste.",
                  person: "David Rodriguez, Executive Director",
                },
                {
                  name: "Metro Shelter",
                  image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop",
                  quote:
                    "The platform has made it so much easier to coordinate food pickups and manage our inventory. We can now serve more people with less administrative overhead.",
                  person: "Maria Gonzalez, Operations Manager",
                },
              ].map((story, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
                  <div className="md:w-1/3">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                    <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                    <p className="text-gray-500 text-sm">— {story.person}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Network of Nonprofit Partners</h2>
              <p className="text-xl text-gray-600 mb-8">
                Together, we can make a bigger impact in reducing food waste and fighting hunger in our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Register Your Organization
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Schedule a Consultation
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
