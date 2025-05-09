import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">FoodShare</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Reducing food waste and fighting hunger in our communities, one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/foodshare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/foodshare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/foodshare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Food Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/volunteer"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donate-funds"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Donate Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/businesses"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  For Businesses
                </Link>
              </li>
              <li>
                <Link
                  href="/nonprofits"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  For Nonprofits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-base text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} FoodShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
