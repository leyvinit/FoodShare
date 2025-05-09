import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CommunityGuidelinesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Community Guidelines</h1>

          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600">Last Updated: May 7, 2025</p>

            <p className="text-lg mt-6">
              At FoodShare, we're building a community based on trust, respect, and a shared commitment to reducing food
              waste and fighting hunger. These guidelines help ensure that our platform remains a safe, positive, and
              effective space for everyone.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Food Safety First</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Only share food that is safe for consumption and meets basic food safety standards.</li>
              <li>Clearly disclose all ingredients and potential allergens in your food listings.</li>
              <li>Do not share food that has passed its expiration date or shows signs of spoilage.</li>
              <li>Ensure proper storage and handling of food items before sharing.</li>
              <li>For prepared foods, include information about when it was prepared and how it has been stored.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Honest and Accurate Listings</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate descriptions of the food you're sharing, including quantity and condition.</li>
              <li>Use clear, recent photos that accurately represent the food being offered.</li>
              <li>Be transparent about any imperfections or limitations of the food.</li>
              <li>Set reasonable expectations about pickup times and locations.</li>
              <li>Update or remove listings promptly when food is no longer available.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Respectful Communication</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Communicate respectfully with other users, regardless of background or circumstances.</li>
              <li>Respond to messages and requests in a timely manner.</li>
              <li>Honor your commitments—if you agree to share or receive food, follow through.</li>
              <li>If plans change, notify the other party as soon as possible.</li>
              <li>Respect others' privacy and do not share personal information without permission.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Safe Exchanges</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>When possible, arrange to meet in public places for food exchanges.</li>
              <li>Be punctual for scheduled pickups or deliveries.</li>
              <li>If you feel uncomfortable about an exchange, trust your instincts and cancel if necessary.</li>
              <li>Consider contactless pickup options when appropriate.</li>
              <li>Report any concerning behavior to FoodShare immediately.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Items</h2>
            <p>The following items are not permitted on FoodShare:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Alcohol, tobacco, or any illegal substances</li>
              <li>Prescription medications or supplements</li>
              <li>Raw or undercooked meat, fish, or eggs (unless clearly labeled as such)</li>
              <li>Food that requires specialized handling or temperature control, unless proper measures are taken</li>
              <li>Non-food items (except for essential household supplies when clearly labeled)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Inclusivity and Non-Discrimination</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Treat all community members with dignity and respect.</li>
              <li>
                Do not discriminate based on race, ethnicity, religion, gender, sexual orientation, disability, or
                socioeconomic status.
              </li>
              <li>Be mindful of language barriers and make reasonable efforts to communicate clearly.</li>
              <li>Consider accessibility needs when arranging food exchanges.</li>
              <li>Report any discriminatory behavior to FoodShare.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Environmental Responsibility</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Use environmentally friendly packaging when possible.</li>
              <li>Consider the environmental impact of food transportation and try to keep exchanges local.</li>
              <li>Share tips for reducing food waste with the community.</li>
              <li>Dispose of any waste responsibly.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Feedback and Reporting</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide honest feedback about your experiences to help improve the community.</li>
              <li>Report any violations of these guidelines to FoodShare promptly.</li>
              <li>If you encounter unsafe food, please report it immediately.</li>
              <li>Suggest improvements to the platform or these guidelines when appropriate.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Consequences of Violations</h2>
            <p>Violations of these community guidelines may result in actions including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Removal of listings</li>
              <li>Temporary suspension of account</li>
              <li>Permanent ban from the platform</li>
              <li>Legal action in severe cases</li>
            </ul>

            <p className="mt-8">
              By using FoodShare, you agree to follow these guidelines and contribute to a positive community
              experience. Together, we can reduce food waste and ensure that good food reaches those who need it most.
            </p>

            <p className="mt-4">
              If you have questions about these guidelines or need to report a violation, please contact us at
              community@foodshare.example.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
