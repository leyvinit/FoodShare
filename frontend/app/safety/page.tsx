import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function FoodSafetyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Food Safety Guidelines</h1>

          <div className="prose prose-emerald max-w-none">
            <p className="text-lg">
              At FoodShare, food safety is our top priority. These guidelines are designed to help both donors and
              recipients ensure that all shared food is safe to eat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">For Food Donors</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. General Food Safety</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Only share food that you would feel comfortable eating yourself.</li>
              <li>Wash your hands thoroughly before handling food.</li>
              <li>Use clean utensils and surfaces when preparing and packaging food.</li>
              <li>Keep hot foods hot (above 140°F/60°C) and cold foods cold (below 40°F/4°C).</li>
              <li>Do not share food that has been left at room temperature for more than 2 hours.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Food Packaging</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Use clean, food-safe containers for packaging.</li>
              <li>Seal containers properly to prevent contamination during transport.</li>
              <li>Label all food with:</li>
              <ul className="list-disc pl-6 mb-2">
                <li>Contents/ingredients</li>
                <li>Date prepared</li>
                <li>Allergen information (nuts, dairy, gluten, etc.)</li>
                <li>Reheating or storage instructions (if applicable)</li>
              </ul>
              <li>Consider using transparent containers so recipients can see the food.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Types of Food</h3>
            <p className="font-semibold">Safe to Share:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Shelf-stable foods (canned goods, dry pasta, rice, etc.)</li>
              <li>Fresh fruits and vegetables</li>
              <li>Baked goods</li>
              <li>Properly stored and refrigerated prepared meals</li>
              <li>Sealed commercial products before their expiration date</li>
            </ul>

            <p className="font-semibold">Not Safe to Share:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Food past its expiration date</li>
              <li>Food showing signs of spoilage (mold, unusual odor, discoloration)</li>
              <li>Raw meat, poultry, or seafood</li>
              <li>Home-canned foods</li>
              <li>Food that has been partially consumed</li>
              <li>Food that has been left at room temperature for extended periods</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4. Transportation</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Use insulated bags or coolers with ice packs for perishable items.</li>
              <li>Transport food directly to the pickup location without unnecessary stops.</li>
              <li>Keep food away from potential contaminants during transport.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">For Food Recipients</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Before Accepting Food</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Check the donor's profile and ratings if available.</li>
              <li>Ask questions about the food's preparation, ingredients, and storage.</li>
              <li>Verify that the food meets your dietary restrictions or preferences.</li>
              <li>Confirm that perishable food has been properly stored and transported.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Inspecting Food</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Examine the food for signs of spoilage before accepting.</li>
              <li>Check that packaging is intact and clean.</li>
              <li>Verify that hot foods are still hot and cold foods are still cold.</li>
              <li>Trust your senses—if it looks, smells, or feels off, don't accept it.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. After Receiving Food</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Refrigerate perishable items promptly (within 2 hours, 1 hour in hot weather).</li>
              <li>Reheat prepared foods thoroughly to 165°F (74°C) before eating.</li>
              <li>Consume or freeze perishable items within the recommended timeframe.</li>
              <li>When in doubt, throw it out.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Food Storage Guidelines</h2>
            <p>Here are general guidelines for how long to keep foods:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Refrigerator (40°F/4°C or below)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Prepared meals: 3-4 days</li>
              <li>Fresh meat, poultry, fish: 1-2 days</li>
              <li>Deli meats: 3-5 days</li>
              <li>Eggs: 3-5 weeks</li>
              <li>Hard cheese: 3-4 weeks</li>
              <li>Soft cheese: 1 week</li>
              <li>Fruits and vegetables: 3-7 days (varies by type)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Freezer (0°F/-18°C or below)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Prepared meals: 2-3 months</li>
              <li>Meat, poultry, fish: 3-6 months</li>
              <li>Bread and baked goods: 2-3 months</li>
              <li>Fruits and vegetables: 8-12 months</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Food Safety Concerns</h2>
            <p>
              If you encounter food that appears unsafe or if you become ill after consuming food received through
              FoodShare, please:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Report it immediately to FoodShare through the "Report" button on the listing or message.</li>
              <li>Seek medical attention if you experience symptoms of foodborne illness.</li>
              <li>Provide details about the food, including when you received it and any symptoms experienced.</li>
              <li>Keep any remaining food for potential testing if necessary.</li>
            </ul>

            <p className="mt-8">
              By following these guidelines, we can ensure that FoodShare remains a safe platform for sharing food and
              reducing waste. Remember, when it comes to food safety, it's always better to err on the side of caution.
            </p>

            <p className="mt-4">
              If you have questions about food safety or need guidance, please contact us at
              safety@foodshare.example.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
