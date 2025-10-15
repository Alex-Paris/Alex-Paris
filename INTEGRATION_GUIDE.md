# Portfolio Integration Guide

Welcome to your new single-page portfolio! This guide will help you customize and deploy your portfolio.

## 🚀 Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── navbar.tsx         # Sticky navigation with scroll-spy
│   ├── Hero.tsx        # Hero section with masked image
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Web projects gallery
│   ├── UnityGames.tsx  # Unity games gallery
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── hooks/              # Custom React hooks
│   ├── useActiveSection.ts  # Track active section
│   ├── useParallax.ts       # Parallax scroll effects
│   ├── useTheme.ts          # Theme management
│   └── useLazyImage.ts      # Lazy load images
├── data/
│   └── portfolio.ts    # ⚠️ CUSTOMIZE YOUR DATA HERE
├── pages/
│   └── Home/
│       └── index.tsx   # Main portfolio page
├── layouts/
│   └── Default/
│       └── index.tsx   # Layout wrapper
└── styles/
    └── global.css      # Global styles & animations
```

## ✏️ Customization Guide

### 1. Update Your Personal Information

Edit `app/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',                    // ✏️ Change this
  role: 'Your Job Title',               // ✏️ Change this
  tagline: 'Your tagline',              // ✏️ Change this
  bio: [
    'Your first bio paragraph...',      // ✏️ Change this
    'Your second bio paragraph...',     // ✏️ Change this
  ],
  email: 'your.email@example.com',      // ✏️ Change this
  github: 'https://github.com/yourusername',      // ✏️ Change this
  linkedin: 'https://linkedin.com/in/yourprofile', // ✏️ Change this
  // Optional:
  twitter: 'https://twitter.com/yourhandle',
  itch: 'https://yourusername.itch.io',
}
```

### 2. Add Your Profile Image

1. Place your profile photo in `public/images/profile.jpg`
2. Recommended size: **800x800px** or larger, square aspect ratio
3. Supported formats: JPG, PNG, WebP

If you want to use a different path, update the `imageSrc` prop in `app/pages/Home/index.tsx`:

```typescript
<Hero personalInfo={personalInfo} imageSrc="/images/your-photo.jpg" />
```

### 3. Add Your Web Projects

Edit the `webProjects` array in `app/data/portfolio.ts`:

```typescript
export const webProjects: WebProject[] = [
  {
    id: 'unique-project-id',
    title: 'Your Project Name',
    description: 'Short description (1-2 sentences)',
    longDescription: 'Longer description for modal (optional)',
    tech: ['React', 'TypeScript', 'Node.js'], // Tech stack
    imageUrl: '/images/projects/project-screenshot.jpg',
    repoUrl: 'https://github.com/you/your-project',  // Optional
    liveUrl: 'https://your-project-demo.com',       // Optional
    featured: true, // Show in "Featured" filter
  },
  // Add more projects...
]
```

**Project Image Tips:**
- Place images in `public/images/projects/`
- Recommended size: **1600x900px** (16:9 aspect ratio)
- Use descriptive filenames
- Optimize images with tools like [TinyPNG](https://tinypng.com/)

### 4. Add Your Unity Games

Edit the `unityGames` array in `app/data/portfolio.ts`:

#### Option A: Host WebGL Build Locally
```typescript
{
  id: 'game-1',
  title: 'Your Game Name',
  description: 'Game description',
  tech: ['Unity', 'C#', 'WebGL'],
  imageUrl: '/images/games/game-screenshot.jpg',
  unityBuildPath: '/unity/your-game',  // Path relative to /public
  repoUrl: 'https://github.com/you/your-game',
  featured: true,
}
```

**Steps for local WebGL:**
1. Build your Unity project for WebGL
2. Create folder: `public/unity/your-game/`
3. Copy build files (index.html, Build/, TemplateData/) into that folder

#### Option B: Link to External Host (itch.io, etc.)
```typescript
{
  id: 'game-2',
  title: 'Your Game Name',
  description: 'Game description',
  tech: ['Unity', 'C#'],
  imageUrl: '/images/games/game-screenshot.jpg',
  liveUrl: 'https://yourusername.itch.io/your-game',
  repoUrl: 'https://github.com/you/your-game',
}
```

### 5. Update Your Skills

Edit the `skills` object in `app/data/portfolio.ts`:

```typescript
export const skills = {
  webDevelopment: [
    'React / Next.js',
    'TypeScript',
    // Add your skills...
  ],
  gameDevelopment: [
    'Unity Engine',
    'C#',
    // Add your skills...
  ],
  tools: [
    'Git / GitHub',
    'Docker',
    // Add your tools...
  ],
}
```

## 🎨 Styling & Theming

### Custom Colors

Edit `app/styles/global.css` to customize the gradient colors:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
  --gradient-secondary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
  --gradient-accent: linear-gradient(135deg, #your-color 0%, #your-color 100%);
}
```

### Tailwind Configuration

The project uses Tailwind CSS v4. The configuration is minimal by design. If you need custom values, you can extend Tailwind in `app/styles/global.css`:

```css
@theme {
  --color-brand: #667eea;
}
```

### Dark Mode

Dark mode is automatically supported! The theme:
- Follows system preference by default
- Can be toggled via the button in the navigation
- Persists across page reloads (localStorage)

## 🖼️ Image Optimization

### Recommended Image Formats
- Use **WebP** for best compression (fallback to JPG/PNG)
- Use **SVG** for logos and icons
- Compress all images before uploading

### Lazy Loading
All project and game images are automatically lazy-loaded using IntersectionObserver. No additional setup needed!

## ♿ Accessibility Checklist

- ✅ All interactive elements are keyboard-navigable
- ✅ Proper ARIA labels on buttons and links
- ✅ Semantic HTML structure
- ✅ `prefers-reduced-motion` respected for animations
- ✅ Focus indicators on interactive elements
- ✅ Alt text on images

**Testing Accessibility:**
```bash
# Run Lighthouse audit
npm run build
# Then use Chrome DevTools > Lighthouse > Accessibility
```

## 🧪 Testing

### Test Checklist

#### Desktop (1920x1080)
- [ ] Hero section displays correctly
- [ ] Navigation scrolls to sections smoothly
- [ ] Active nav link updates on scroll
- [ ] Projects filter works
- [ ] Project modal opens/closes
- [ ] Unity game player modal works
- [ ] Contact form validates input
- [ ] Theme toggle works
- [ ] All external links open in new tab

#### Mobile (375x667 - iPhone SE)
- [ ] Hamburger menu opens/closes
- [ ] All sections are readable
- [ ] Touch scrolling is smooth
- [ ] Forms are usable
- [ ] Images load correctly

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals
- [ ] No keyboard traps

#### Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Images lazy load
- [ ] No layout shift
- [ ] Smooth 60fps scrolling

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect React Router and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build/client` folder to [Netlify Drop](https://app.netlify.com/drop)

### Environment Variables

If you add a contact form backend, create a `.env` file:

```bash
VITE_CONTACT_API_URL=https://your-api.com/contact
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_CONTACT_API_URL
```

## 📧 Contact Form Integration

The contact form currently logs to console. To integrate with a backend:

### Option 1: Formspree (Easy)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `app/components/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setFormStatus('submitting')

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      throw new Error('Failed to send')
    }
  } catch (error) {
    setFormStatus('error')
  }
}
```

### Option 2: Custom API

Create your own API endpoint and update the fetch URL in `Contact.tsx`.

## 🎯 SEO Optimization

### Update Meta Tags

Edit `app/root.tsx` to customize SEO:

```typescript
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Name | Full-Stack Developer</title>
        <meta name="description" content="Your compelling description for search engines" />
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Your description" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
      </head>
      {/* ... */}
    </html>
  )
}
```

### Create Open Graph Image

1. Create a 1200x630px image showcasing your portfolio
2. Save as `public/images/og-image.jpg`
3. This will show when sharing on social media

## 🐛 Troubleshooting

### Images Not Loading

**Problem:** Images show broken icon  
**Solution:** 
- Ensure images are in `public/` directory
- Use leading slash: `/images/file.jpg` not `images/file.jpg`
- Check filename case sensitivity

### Unity Game Not Loading

**Problem:** Unity WebGL build shows error  
**Solution:**
- Ensure all build files are in `public/unity/your-game/`
- Check browser console for CORS errors
- Test the build directly by visiting `/unity/your-game/index.html`

### Smooth Scrolling Not Working

**Problem:** Navigation doesn't scroll smoothly  
**Solution:**
- Check if `scroll-behavior: smooth` is in `app/styles/global.css`
- Ensure section IDs match nav links

### Dark Mode Not Persisting

**Problem:** Theme resets on refresh  
**Solution:**
- Check browser's localStorage is enabled
- Inspect localStorage in DevTools to verify theme is saved

## 📚 Additional Resources

- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [WebGL Best Practices](https://docs.unity3d.com/Manual/webgl-building.html)

## 💡 Tips & Best Practices

1. **Keep content concise** - Attention spans are short
2. **Update regularly** - Add new projects as you complete them
3. **Optimize images** - Faster loading = better UX
4. **Test on real devices** - Simulators don't catch everything
5. **Get feedback** - Share with friends and iterate

## 🆘 Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed
4. Try clearing the build cache: `rm -rf build .react-router`

---

## ✅ Acceptance Criteria

- [x] AppSinglePage can be dropped into project replacing routes
- [x] Hero shows a masked image (SVG) on modern browsers and clip-path fallback
- [x] Parallax is present and respects prefers-reduced-motion
- [x] Projects render from data/projects.js and images lazy-load
- [x] UnityGames embeds load only upon play or near viewport
- [x] Navbar updates active link via IntersectionObserver
- [x] Mobile hamburger menu works and is keyboard accessible
- [x] Integration steps are included

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

