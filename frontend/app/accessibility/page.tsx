import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>

          <div className="prose prose-emerald max-w-none">
            <p className="text-lg">
              FoodShare is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            <p>
              We strive to ensure that our website and mobile applications are accessible to all users, regardless of
              abilities or disabilities. Our goal is to meet Level AA standards of the Web Content Accessibility
              Guidelines (WCAG) 2.1.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Measures We Take</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing text alternatives for non-text content</li>
              <li>Ensuring content can be presented in different ways without losing information</li>
              <li>Making it easier for users to see and hear content</li>
              <li>Providing keyboard accessibility for all functionality</li>
              <li>Giving users enough time to read and use content</li>
              <li>Designing content that doesn't cause seizures or physical reactions</li>
              <li>Helping users navigate and find content</li>
              <li>Making text readable and understandable</li>
              <li>Making content appear and operate in predictable ways</li>
              <li>Helping users avoid and correct mistakes</li>
              <li>Maximizing compatibility with current and future user tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Assistive Technologies</h2>
            <p>Our website is designed to be compatible with the following assistive technologies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Screen readers (such as JAWS, NVDA, VoiceOver, and TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Known Limitations</h2>
            <p>
              While we strive for comprehensive accessibility, we acknowledge that there may be some areas of our
              website that are not fully accessible. We are actively working to identify and address these issues.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback and Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of FoodShare. Please let us know if you encounter
              accessibility barriers on our website:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: accessibility@foodshare.example.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
            <p>We try to respond to feedback within 2 business days.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Compatibility Statement</h2>
            <p>FoodShare is designed to be compatible with the following browsers and operating systems:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Chrome (latest 2 versions)</li>
              <li>Firefox (latest 2 versions)</li>
              <li>Safari (latest 2 versions)</li>
              <li>Edge (latest 2 versions)</li>
              <li>iOS (latest 2 versions)</li>
              <li>Android (latest 2 versions)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Assessment and Compliance</h2>
            <p>The accessibility of FoodShare is assessed through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Self-evaluations</li>
              <li>Third-party evaluations</li>
              <li>User feedback</li>
              <li>Automated testing tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Continuous Improvement</h2>
            <p>We are committed to continuously improving the accessibility of our website. We will:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Conduct regular accessibility audits</li>
              <li>Address accessibility issues as they are identified</li>
              <li>Train our staff on accessibility best practices</li>
              <li>Include accessibility as part of our design and development process</li>
            </ul>

            <p className="mt-8">This statement was last updated on May 7, 2025.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
