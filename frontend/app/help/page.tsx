"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronRight, HelpCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const helpCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          id: "create-account",
          title: "How to create an account",
          content:
            "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details including name, email, password, and account type. Once submitted, you'll receive a confirmation email to verify your account.",
        },
        {
          id: "profile-setup",
          title: "Setting up your profile",
          content:
            "After creating your account, you can set up your profile by clicking on your avatar in the top right corner and selecting 'Profile'. Add a profile picture, bio, and location to help others in your community recognize and trust you.",
        },
        {
          id: "find-food",
          title: "How to find food",
          content:
            "To find available food in your area, click on 'Browse Food' in the navigation menu. You can filter listings by food type, distance, and dietary restrictions. When you find something you're interested in, click on the listing to view details and request the item.",
        },
      ],
    },
    {
      id: "donating",
      title: "Donating Food",
      articles: [
        {
          id: "create-listing",
          title: "Creating a food listing",
          content:
            "To donate food, click on 'Share Food' in the navigation menu. Fill out the form with details about the food you're offering, including title, description, category, quantity, and when it's available until. Add photos to help recipients see what you're offering.",
        },
        {
          id: "food-safety",
          title: "Food safety guidelines",
          content:
            "When donating food, ensure it's still fresh and safe to eat. Don't donate food that's past its expiration date or shows signs of spoilage. Package food properly and provide accurate information about ingredients and potential allergens.",
        },
        {
          id: "manage-requests",
          title: "Managing donation requests",
          content:
            "When someone requests your food, you'll receive a notification. You can view and respond to requests in the 'Messages' section. Communicate with the recipient to arrange pickup or delivery details.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Settings",
      articles: [
        {
          id: "change-password",
          title: "How to change your password",
          content:
            "To change your password, go to your Profile page and click on the 'Security' tab. Enter your current password and then your new password twice to confirm. Click 'Update Password' to save your changes.",
        },
        {
          id: "notifications",
          title: "Managing notifications",
          content:
            "You can manage your notification preferences in your account settings. Choose which types of notifications you want to receive by email and within the app, such as new messages, request updates, and community announcements.",
        },
        {
          id: "delete-account",
          title: "Deleting your account",
          content:
            "If you wish to delete your account, go to your Profile page, click on 'Security', and scroll to the bottom where you'll find the 'Delete Account' option. Please note that this action is permanent and will remove all your data from our system.",
        },
      ],
    },
  ]

  // Filter articles based on search query
  const filteredArticles = searchQuery
    ? helpCategories.flatMap((category) =>
        category.articles.filter(
          (article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.content.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    : []

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Help Center</h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions and learn how to make the most of FoodShare.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-10 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {searchQuery ? (
          <section className="py-12">
            <div className="container">
              <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              {filteredArticles.length > 0 ? (
                <div className="grid gap-4">
                  {filteredArticles.map((article) => (
                    <Card key={article.id}>
                      <CardHeader className="pb-2">
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{article.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles matching your search. Try different keywords or browse our help
                    categories below.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Browse All Help Articles
                  </Button>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section className="py-12">
            <div className="container">
              <Tabs defaultValue="getting-started">
                <TabsList className="mb-8">
                  {helpCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {helpCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.articles.map((article) => (
                        <Card key={article.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle>{article.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 line-clamp-3">{article.content}</p>
                            <Button
                              variant="link"
                              className="mt-2 p-0 text-emerald-600 hover:text-emerald-700"
                              onClick={() => {
                                // In a real app, this would navigate to a full article page
                                alert(article.content)
                              }}
                            >
                              Read more <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        )}

        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-gray-600 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Support</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
