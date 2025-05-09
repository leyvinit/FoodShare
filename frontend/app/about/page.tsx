import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About FoodShare</h1>
              <p className="text-xl text-gray-600">
                We're on a mission to reduce food waste and fight hunger in communities around the world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  FoodShare began in 2023 when a group of friends noticed the disconnect between food waste and food
                  insecurity in their community. Restaurants, cafes, and grocery stores were throwing away perfectly
                  good food while many people struggled to put meals on the table.
                </p>
                <p className="text-gray-600 mb-4">
                  We created a simple platform to connect those with surplus food to those who need it. What started as
                  a small local initiative has grown into a community of thousands of donors and recipients working
                  together to reduce waste and share resources.
                </p>
                <p className="text-gray-600">
                  Today, FoodShare operates in over 50 cities, has saved more than 100,000 meals from being wasted, and
                  continues to grow as more people join our mission.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&auto=format&fit=crop"
                  alt="People sharing food"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
                <p className="text-gray-600">
                  One-third of all food produced globally goes to waste. We're working to change that by connecting
                  surplus food with people who can use it.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fight Hunger</h3>
                <p className="text-gray-600">
                  Millions of people face food insecurity every day. By redistributing surplus food, we help ensure that
                  more people have access to nutritious meals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Community</h3>
                <p className="text-gray-600">
                  FoodShare brings people together around a common cause. We're creating connections between neighbors,
                  businesses, and organizations to strengthen communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Co-Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
                },
                {
                  name: "Michael Chen",
                  role: "Co-Founder & CTO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
                },
                {
                  name: "Aisha Patel",
                  role: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
                },
                {
                  name: "David Rodriguez",
                  role: "Community Manager",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you're a restaurant with surplus food, an individual looking to share, or someone in need of a
                meal, FoodShare is for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium"
                >
                  Share Food
                </a>
                <a
                  href="/browse"
                  className="bg-white hover:bg-gray-50 text-emerald-600 border border-emerald-600 px-6 py-3 rounded-md font-medium"
                >
                  Find Food
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
