import type { MetaDescriptor } from 'react-router'

interface MetaOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

/**
 * Generate meta tags for a page
 * TODO: Update the base URL and default image with your actual domain and OG image
 */
export function generateMeta({
  title,
  description,
  image = 'https://yourdomain.com/og-image.png', // TODO: Replace with your OG image
  url = 'https://yourdomain.com', // TODO: Replace with your domain
  type = 'website',
}: MetaOptions): MetaDescriptor[] {
  return [
    { title },
    { name: 'description', content: description },

    // Open Graph / Facebook
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
}
