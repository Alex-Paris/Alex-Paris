import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import '../styles/globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alex Paris | Full-Stack Developer & Unity Game Developer',
  description:
    'Building web applications and interactive experiences. Full-stack developer passionate about creating seamless user experiences on the web and in games.',
  keywords: [
    'Alex Paris',
    'Full-Stack Developer',
    'Unity Developer',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Alex Paris' }],
  creator: 'Alex Paris',
  publisher: 'Alex Paris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexparis.dev',
    title: 'Alex Paris | Full-Stack Developer & Unity Game Developer',
    description:
      'Building web applications and interactive experiences. Full-stack developer passionate about creating seamless user experiences on the web and in games.',
    siteName: 'Alex Paris Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Paris | Full-Stack Developer & Unity Game Developer',
    description:
      'Building web applications and interactive experiences. Full-stack developer passionate about creating seamless user experiences on the web and in games.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}`}>{children}</body>
    </html>
  )
}
