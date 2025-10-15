import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import { personalInfo } from '~/data/portfolio'
import { cn } from '~/lib/cn'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Contact section with form and social links
 * Features:
 * - Contact form with validation
 * - Social media links
 * - Animated entrance
 * - Form submission handling
 */
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    // TODO: Replace with actual form submission logic
    // This is a placeholder that simulates an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For now, we'll just log the form data and show success
      console.log('Form submitted:', formData)

      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const socialLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-red-500',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'hover:text-slate-700 dark:hover:text-white',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-600',
    },
    // {
    //   icon: <Twitter size={24} />,
    //   label: 'Twitter',
    //   href: personalInfo.twitter,
    //   color: 'hover:text-sky-500',
    // },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-purple-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-purple-900 dark:mix-blend-soft-light" />
        <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-blue-900 dark:mix-blend-soft-light" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={cn(
            'mb-16 text-center transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Get In Touch
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div
            className={cn(
              'transition-all delay-100 duration-700',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Sent Successfully!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <p className="text-center text-sm text-green-600 dark:text-green-400">
                  Thank you! I&#39;ll get back to you soon.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact info and social links */}
          <div
            className={cn(
              'transition-all delay-200 duration-700',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            )}
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-slate-50 p-8 dark:bg-slate-800">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Let&#39;s Connect
                </h3>
                <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
                  I&#39;m always interested in hearing about new projects,
                  collaboration opportunities, or just having a chat about web
                  development and game design. Don&#39;t hesitate to reach out!
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                      <Mail size={20} />
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-slate-500 uppercase dark:text-slate-400">
                  Find me online
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={
                        link.label !== 'Email'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-600 dark:bg-slate-700 dark:text-slate-400',
                        link.color,
                        'shadow-soft hover:shadow-medium transform transition-all duration-300 hover:-translate-y-1',
                      )}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
