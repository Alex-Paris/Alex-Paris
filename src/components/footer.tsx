import { Heart, ArrowUp } from 'lucide-react'

/**
 * Footer component with back-to-top button
 * Features:
 * - Copyright info
 * - Back to top button
 * - Simple, clean design
 */
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              © {currentYear} Alex Paris. Built with
              <Heart
                size={16}
                className="animate-pulse-slow fill-current text-red-500"
              />
              and React
            </p>
            <p className="mt-1 text-sm text-slate-500">All rights reserved.</p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            Designed and developed with modern web technologies.
            <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
