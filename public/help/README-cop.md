# 🎨 Single-Page Portfolio

A modern, fully-featured single-page portfolio built with React, TypeScript, and Tailwind CSS. Perfect for showcasing web development projects and Unity games.

![Portfolio Preview](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue)

## ✨ Features

### 🎯 Core Features
- **Single-Page Layout** - Smooth scroll navigation between sections
- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark Mode** - Automatic theme switching with manual toggle
- **Parallax Effects** - Subtle depth with scroll-based animations
- **Lazy Loading** - Optimized image and iframe loading
- **Accessibility** - WCAG compliant, keyboard navigable, respects reduced motion

### 🔥 Sections
- **Hero** - Eye-catching intro with SVG-masked portrait and animated text
- **About** - Personal bio with feature cards
- **Projects** - Filterable web project gallery with modal details
- **Unity Games** - WebGL game player with fullscreen support
- **Skills** - Categorized skill showcase
- **Contact** - Working contact form with validation
- **Footer** - Clean footer with back-to-top button

### 🛠️ Technical Highlights
- React Router v7 for routing
- TypeScript for type safety
- Tailwind CSS v4 for styling
- Custom hooks for parallax, active section tracking, and theme management
- IntersectionObserver for scroll-spy and lazy loading
- Smooth animations respecting `prefers-reduced-motion`
- Lucide React for icons

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository (if from git)
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📝 Customization

### 1. Update Your Information

Edit `app/data/portfolio.ts` to add:
- Personal information (name, email, bio)
- Web projects with screenshots
- Unity games with WebGL builds or external links
- Skills and technologies

### 2. Add Your Images

Place images in `public/images/`:
- `profile.jpg` - Your profile photo (800x800px)
- `projects/` - Project screenshots (1600x900px)
- `games/` - Game screenshots (1920x1080px)

See `public/images/README.md` for detailed image guidelines.

### 3. Customize Styling

Edit `app/styles/global.css` to:
- Change gradient colors
- Adjust animations
- Customize shadows and effects

### 4. Contact Form Integration

The contact form currently logs to console. To integrate a backend:

**Option 1: Formspree (Easiest)**
- Sign up at [formspree.io](https://formspree.io)
- Update fetch URL in `app/components/Contact.tsx`

**Option 2: Custom API**
- Create your own endpoint
- Update the `handleSubmit` function in `Contact.tsx`

## 📖 Full Documentation

For complete customization guide, deployment instructions, and troubleshooting:

👉 **See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)**

## 🏗️ Project Structure

```
app/
├── components/         # UI components (Nav, Hero, Projects, etc.)
├── hooks/             # Custom React hooks
├── data/              # Portfolio data (CUSTOMIZE THIS!)
├── pages/             # Page components
├── layouts/           # Layout wrappers
└── styles/            # Global styles

public/
├── images/            # Your images go here
└── unity/             # Unity WebGL builds (optional)
```

## 🧪 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Preview production build
npm run typecheck  # Run TypeScript type checking
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy! (auto-configured for React Router)

### Netlify
```bash
npm run build
# Deploy the build/client folder
```

## 🎨 Customization Examples

### Change Primary Colors

```css
/* app/styles/global.css */
:root {
  --gradient-primary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
}
```

### Add a New Section

1. Create component in `app/components/YourSection.tsx`
2. Add to `app/pages/Home/index.tsx`
3. Add nav item in `app/components/Nav.tsx`

### Customize Animations

```css
/* app/styles/global.css */
@keyframes yourAnimation {
  from { /* ... */ }
  to { /* ... */ }
}

.your-class {
  animation: yourAnimation 1s ease-out;
}
```

## 🐛 Troubleshooting

**Images not loading?**
- Check images are in `public/` directory
- Use leading slash: `/images/file.jpg`

**Smooth scrolling not working?**
- Check `scroll-behavior: smooth` is in global.css
- Verify section IDs match nav links

**Theme not persisting?**
- Ensure localStorage is enabled in browser
- Check browser console for errors

See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for more troubleshooting tips.

## ✅ Acceptance Criteria

All requirements met:
- ✅ Single-page scroll-to-section navigation
- ✅ Hero with SVG-masked portrait and animations
- ✅ Parallax effects (respects reduced motion)
- ✅ Projects with filtering and lazy-loaded images
- ✅ Unity games with WebGL player modal
- ✅ Sticky nav with IntersectionObserver scroll-spy
- ✅ Mobile hamburger menu (keyboard accessible)
- ✅ Dark mode with theme toggle
- ✅ Accessible and performant
- ✅ Full integration guide provided

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ by Alex Paris**

Need help? Check out the [Integration Guide](./INTEGRATION_GUIDE.md) or open an issue!
