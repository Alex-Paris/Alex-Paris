# Images Directory

This directory contains all images used in the portfolio.

## Directory Structure

```
images/
├── profile.jpg           # Your profile photo (800x800px recommended)
├── og-image.jpg          # Open Graph image for social sharing (1200x630px)
├── projects/             # Screenshots of web projects
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── ...
└── games/                # Screenshots of Unity games
    ├── game-1.jpg
    ├── game-2.jpg
    └── ...
```

## Image Guidelines

### Profile Photo (`profile.jpg`)
- **Size:** 800x800px or larger
- **Format:** JPG, PNG, or WebP
- **Aspect Ratio:** Square (1:1)
- **Tips:**
  - Use a professional headshot or casual photo
  - Ensure good lighting
  - Plain or blurred background works best
  - Photo will be cropped with SVG mask in Hero section

### Project Screenshots (`projects/`)
- **Size:** 1600x900px (16:9 aspect ratio)
- **Format:** JPG or WebP recommended
- **Tips:**
  - Capture the full application interface
  - Show the most interesting/impressive part
  - Use browser screenshots for web apps
  - Include some UI elements for context

### Game Screenshots (`games/`)
- **Size:** 1920x1080px (16:9 aspect ratio)
- **Format:** JPG or WebP
- **Tips:**
  - Capture exciting gameplay moments
  - Show the game's unique features
  - Use high graphics settings
  - Consider adding a logo or title overlay

### Open Graph Image (`og-image.jpg`)
- **Size:** 1200x630px
- **Format:** JPG or PNG
- **Purpose:** Shows when sharing portfolio on social media
- **Tips:**
  - Include your name and tagline
  - Add a preview of your best work
  - Use brand colors that match your portfolio

## Image Optimization

Before adding images to this folder, optimize them to reduce file size:

### Tools
- [TinyPNG](https://tinypng.com/) - Great for PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Online image optimizer with WebP support
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

### Terminal Commands
```bash
# Convert to WebP (requires imagemagick)
convert input.jpg -quality 85 output.webp

# Resize image
convert input.jpg -resize 1600x900 output.jpg
```

## Placeholder Images

If you don't have images ready, you can use placeholder services:

```typescript
// In app/data/portfolio.ts
imageUrl: 'https://placehold.co/1600x900/6366f1/ffffff?text=Project+Name'
```

Or use Unsplash for free stock photos:
```typescript
imageUrl: 'https://images.unsplash.com/photo-1234567890?w=1600&h=900&fit=crop'
```

Remember to replace these with your actual images before deploying!

## File Naming

Use descriptive, lowercase filenames with hyphens:

✅ Good:
- `ecommerce-platform-screenshot.jpg`
- `tower-defense-game.jpg`
- `portfolio-website-preview.jpg`

❌ Avoid:
- `IMG_1234.jpg`
- `Screenshot 2024-01-01.png`
- `My Project.jpg` (spaces)

## Adding New Images

1. Optimize the image (see tools above)
2. Place in appropriate subdirectory
3. Update `app/data/portfolio.ts` with the path:
   ```typescript
   imageUrl: '/images/projects/your-image.jpg'
   ```
4. Test that it displays correctly in development

---

Need help with images? Check the main `INTEGRATION_GUIDE.md` for more details!

