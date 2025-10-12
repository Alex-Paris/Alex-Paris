import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

import type { PersonalInfo } from '~/data/portfolio'

interface HeroProps {
  personalInfo: PersonalInfo
  imageSrc?: string
}

/**
 * Hero section with animated entrance and SVG-masked portrait
 * Features:
 * - Animated text reveal
 * - SVG clip-path mask for image with fallback
 * - Responsive layout
 * - Smooth scroll to next section
 */
export default function Hero({
  personalInfo,
  imageSrc = '/images/profile.jpg',
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-xl filter dark:bg-purple-700 dark:mix-blend-soft-light" />
        <div className="animate-float animation-delay-200 absolute top-40 right-20 h-96 w-96 rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-xl filter dark:bg-blue-700 dark:mix-blend-soft-light" />
        <div className="animate-float animation-delay-400 absolute -bottom-20 left-1/2 h-80 w-80 rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-xl filter dark:bg-pink-700 dark:mix-blend-soft-light" />
      </div>

      {/* Content */}
      <div className="z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row lg:gap-20">
          {/* Text content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 bg-clip-text text-5xl leading-tight font-extrabold text-transparent md:text-6xl lg:text-7xl dark:from-white dark:via-purple-200 dark:to-blue-200">
                Hi — I&#39;m {personalInfo.name}.
              </h1>
            </div>

            <div
              className={`transition-all delay-150 duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="mb-4 text-2xl font-bold text-slate-700 md:text-3xl lg:text-4xl dark:text-slate-300">
                {personalInfo.tagline}
              </p>
            </div>

            <div
              className={`transition-all delay-300 duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600 md:mx-0 md:text-xl dark:text-slate-400">
                {personalInfo.role}
              </p>
            </div>

            <div
              className={`transition-all delay-500 duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#contact"
                  className="transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="transform rounded-lg border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Work
                </a>
              </div>
            </div>
          </div>

          {/* Portrait with SVG mask */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <div
              className={`transition-all delay-200 duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <div className="group relative">
                {/* SVG mask version (modern browsers) */}
                <svg
                  viewBox="0 0 400 400"
                  className="h-64 w-64 drop-shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96"
                  aria-label={`Portrait of ${personalInfo.name}`}
                >
                  <defs>
                    {/* Organic blob mask */}
                    <clipPath id="hero-mask">
                      <path d="M200,50 C280,50 350,100 370,180 C390,260 360,340 280,360 C200,380 120,360 70,280 C20,200 50,100 130,70 C160,60 180,50 200,50 Z">
                        {/* Subtle animation on the mask path */}
                        <animate
                          attributeName="d"
                          dur="20s"
                          repeatCount="indefinite"
                          values="
                            M200,50 C280,50 350,100 370,180 C390,260 360,340 280,360 C200,380 120,360 70,280 C20,200 50,100 130,70 C160,60 180,50 200,50 Z;
                            M200,60 C270,40 340,110 360,190 C380,270 350,330 270,370 C190,390 110,350 60,270 C10,190 60,110 140,60 C170,50 180,60 200,60 Z;
                            M200,50 C280,50 350,100 370,180 C390,260 360,340 280,360 C200,380 120,360 70,280 C20,200 50,100 130,70 C160,60 180,50 200,50 Z
                          "
                        />
                      </path>
                    </clipPath>

                    {/* Gradient overlay */}
                    <linearGradient
                      id="hero-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#667eea" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#764ba2"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>

                  {/* Image with clip path */}
                  <image
                    href={imageSrc}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#hero-mask)"
                    className="transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Decorative gradient overlay */}
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#hero-gradient)"
                    clipPath="url(#hero-mask)"
                    className="pointer-events-none"
                  />
                </svg>

                {/* Fallback for browsers without SVG support (uses CSS clip-path) */}
                <noscript>
                  <img
                    src={imageSrc}
                    alt={`Portrait of ${personalInfo.name}`}
                    className="h-64 w-64 object-cover md:h-80 md:w-80 lg:h-96 lg:w-96"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
                    }}
                  />
                </noscript>

                {/* Decorative elements */}
                <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  )
}
