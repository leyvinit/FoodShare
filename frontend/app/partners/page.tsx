import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Partner With Us</h1>
              <p className="text-xl text-gray-600">
                Join our network of businesses, organizations, and community groups working together to reduce food
                waste and fight hunger.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Partner With FoodShare?</h2>
                <p className="text-gray-600 mb-4">
                  By partnering with FoodShare, your business or organization can make a meaningful impact on food waste
                  reduction and hunger relief in your community. Our partners benefit from:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Reduced food waste and disposal costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Enhanced corporate social responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Positive community impact and recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Tax benefits for eligible donations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Employee engagement opportunities</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Us to Partner</Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop"
                  alt="Business partners shaking hands"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Food Donation Partners</h3>
                <p className="text-gray-600 mb-4">
                  Restaurants, cafes, grocery stores, and food producers can donate surplus food through our platform.
                  We provide easy-to-use tools, logistics support, and documentation for tax purposes.
                </p>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Regular scheduled pickups</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>On-demand donation requests</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Food safety training and support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Distribution Partners</h3>
                <p className="text-gray-600 mb-4">
                  Community organizations, food banks, shelters, and other groups that serve those in need can become
                  distribution partners to receive and distribute donated food.
                </p>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Access to diverse food donations</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Streamlined logistics and scheduling</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Inventory management tools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Corporate Partners</h3>
                <p className="text-gray-600 mb-4">
                  Businesses can support FoodShare through financial contributions, in-kind donations, employee
                  volunteer programs, and cause marketing initiatives.
                </p>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Customized partnership programs</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Employee engagement opportunities</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-emerald-600 font-bold mr-2">•</span>
                    <span>Brand visibility and recognition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Current Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Green Grocers",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "City Food Bank",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Fresh Farms Co-op",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Community Kitchen",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Organic Bakery",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Metro Shelter",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Neighborhood Cafe",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
                {
                  name: "Urban Farm Collective",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&auto=format&fit=crop",
                },
              ].map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-gray-500 text-sm">Logo</span>
                  </div>
                  <p className="text-center font-medium">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Become a Partner Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our growing network of partners committed to reducing food waste and fighting hunger in our
                communities.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Contact Us to Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
