import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SitemapPage() {
  const siteMap = [
    {
      category: "Main Pages",
      links: [
        { title: "Home", url: "/" },
        { title: "Browse Food", url: "/browse" },
        { title: "Donate Food", url: "/donate" },
        { title: "About Us", url: "/about" },
        { title: "Contact", url: "/contact" },
      ],
    },
    {
      category: "User Account",
      links: [
        { title: "Sign In", url: "/signin" },
        { title: "Sign Up", url: "/signup" },
        { title: "Profile", url: "/profile" },
        { title: "My Listings", url: "/my-listings" },
        { title: "Messages", url: "/messages" },
      ],
    },
    {
      category: "Information",
      links: [
        { title: "How It Works", url: "/#how-it-works" },
        { title: "Food Safety", url: "/safety" },
        { title: "Community Guidelines", url: "/guidelines" },
        { title: "FAQ", url: "/help" },
      ],
    },
    {
      category: "Get Involved",
      links: [
        { title: "Volunteer", url: "/volunteer" },
        { title: "Partner With Us", url: "/partners" },
        { title: "Donate Funds", url: "/donate-funds" },
        { title: "For Businesses", url: "/businesses" },
        { title: "For Nonprofits", url: "/nonprofits" },
      ],
    },
    {
      category: "Legal",
      links: [
        { title: "Terms of Service", url: "/terms" },
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Cookie Policy", url: "/cookies" },
        { title: "Accessibility", url: "/accessibility" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {siteMap.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4 text-emerald-600">{category.category}</h2>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.url} className="text-gray-700 hover:text-emerald-600 hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
