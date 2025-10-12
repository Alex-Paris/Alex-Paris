# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🎯 Step 1: Install & Run (30 seconds)

```bash
# Navigate to project
cd /Users/alexparis/Documents/Projects/ReactJs/Alex-Paris

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser. You should see the portfolio!

---

## ✏️ Step 2: Update Your Information (2 minutes)

Open `app/data/portfolio.ts` and update:

### Personal Info (Lines 51-65)
```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name Here',              // ⬅️ CHANGE THIS
  role: 'Your Job Title',               // ⬅️ CHANGE THIS
  tagline: 'Your tagline or motto',     // ⬅️ CHANGE THIS
  bio: [
    'First paragraph about you...',     // ⬅️ CHANGE THIS
    'Second paragraph...',              // ⬅️ CHANGE THIS
    'Third paragraph...',               // ⬅️ CHANGE THIS
  ],
  email: 'your.email@example.com',      // ⬅️ CHANGE THIS
  github: 'https://github.com/yourusername',      // ⬅️ CHANGE THIS
  linkedin: 'https://linkedin.com/in/yourprofile', // ⬅️ CHANGE THIS
}
```

**Save the file.** The page will auto-reload with your info!

---

## 🖼️ Step 3: Add Your Photo (1 minute)

1. Find a photo of yourself (square aspect ratio works best)
2. Rename it to `profile.jpg`
3. Place it in: `public/images/profile.jpg`

**Refresh the browser.** Your photo should appear in the hero section!

> **Tip:** Recommended size: 800x800px or larger

---

## 🚀 Step 4: Add One Project (1 minute)

In `app/data/portfolio.ts`, find the `webProjects` array (Line 68) and replace the first project:

```typescript
export const webProjects: WebProject[] = [
  {
    id: 'my-first-project',                    // ⬅️ Unique ID
    title: 'My Awesome Project',               // ⬅️ Project name
    description: 'A cool web app I built',     // ⬅️ Short description
    tech: ['React', 'TypeScript', 'Node.js'],  // ⬅️ Your tech stack
    imageUrl: 'https://placehold.co/1600x900/667eea/ffffff?text=My+Project', // Temporary
    liveUrl: 'https://my-project.com',         // ⬅️ Optional
    repoUrl: 'https://github.com/you/project', // ⬅️ Optional
    featured: true,
  },
  // ... keep or remove other sample projects
]
```

**Save and check the Projects section!**

---

## ✅ You're Done!

Your portfolio is now personalized! 🎉

### What You Have:
- ✅ Live development server running
- ✅ Your name and info displayed
- ✅ Your photo in the hero section
- ✅ Your first project listed

---

## 🎨 Next Steps (Optional)

### Make it Perfect
1. **Add More Projects** - Copy the project template and add more
2. **Add Project Screenshots** - Place images in `public/images/projects/`
3. **Update Skills** - Edit the `skills` object in `portfolio.ts`
4. **Add Unity Games** - Edit the `unityGames` array
5. **Customize Colors** - See `INTEGRATION_GUIDE.md`

### Deploy
1. **Build:** `npm run build`
2. **Deploy to Vercel:** Push to GitHub, import on vercel.com
3. **Done!** Your portfolio is live 🌐

---

## 📚 Full Documentation

For complete customization options:
- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** - Everything you need to know
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Testing before deployment
- **[SUMMARY.md](./SUMMARY.md)** - Technical overview

---

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill the process on port 5173
npx kill-port 5173
npm run dev
```

### Images not showing?
- Make sure images are in `public/images/`
- Check that paths start with `/` (e.g., `/images/profile.jpg`)
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Can't see changes?
- Save the file
- Check terminal for errors
- Browser should auto-reload

---

## 💬 Questions?

Check the full docs in `INTEGRATION_GUIDE.md` or open an issue on GitHub!

**Happy coding!** 🚀

