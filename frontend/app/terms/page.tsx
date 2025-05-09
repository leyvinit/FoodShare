import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600">Last Updated: May 7, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using FoodShare's website and services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
              from using or accessing this site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on FoodShare's website for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on FoodShare's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by FoodShare at any time.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. Failure
              to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any
              activities or actions under your password. You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Food Listings and Transactions</h2>
            <p>
              FoodShare provides a platform for users to list and request food items. By listing food on our platform,
              you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information about the food items</li>
              <li>Ensure that all food items are safe for consumption and meet applicable health standards</li>
              <li>Not list prohibited items, including alcohol, tobacco, or any illegal substances</li>
              <li>Honor commitments to recipients when you accept their requests</li>
            </ul>
            <p>
              FoodShare is not responsible for the quality, safety, or legality of items listed, the truth or accuracy
              of listings, or the ability of donors to complete transactions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Activities</h2>
            <p>You may not engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on the intellectual property rights of others</li>
              <li>Submitting false or misleading information</li>
              <li>Uploading or transmitting viruses or malicious code</li>
              <li>Interfering with or disrupting the service or servers</li>
              <li>Collecting or tracking personal information of other users</li>
              <li>Spamming, phishing, or engaging in any other fraudulent activities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer</h2>
            <p>
              The materials on FoodShare's website are provided on an 'as is' basis. FoodShare makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
            <p>
              Further, FoodShare does not warrant or make any representations concerning the accuracy, likely results,
              or reliability of the use of the materials on its website or otherwise relating to such materials or on
              any sites linked to this site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitations</h2>
            <p>
              In no event shall FoodShare or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on FoodShare's website, even if FoodShare or a FoodShare authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications and Termination</h2>
            <p>
              FoodShare may revise these Terms of Service at any time without notice. By using this website, you are
              agreeing to be bound by the current version of these Terms of Service.
            </p>
            <p>
              FoodShare reserves the right to terminate or suspend your account and access to the service at our sole
              discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to
              other users, us, or third parties, or for any other reason.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to its conflict of law provisions. Any disputes relating to these Terms will be subject to
              the exclusive jurisdiction of the courts of San Francisco County, California.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@foodshare.example.com
              <br />
              Address: 123 Green Street, San Francisco, CA 94110
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
