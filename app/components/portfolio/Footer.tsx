import { Github, Linkedin, Mail, Twitter, Gamepad2 } from 'lucide-react'

import { personalInfo } from '~/data/portfolio'

import { Container } from '../ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github,
      show: !!personalInfo.github,
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin,
      show: !!personalInfo.linkedin,
    },
    {
      name: 'Twitter',
      url: personalInfo.twitter,
      icon: Twitter,
      show: !!personalInfo.twitter,
    },
    {
      name: 'Itch.io',
      url: personalInfo.itch,
      icon: Gamepad2,
      show: !!personalInfo.itch,
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      show: true,
    },
  ].filter((link) => link.show)

  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <Container className="py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url?.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.url?.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
