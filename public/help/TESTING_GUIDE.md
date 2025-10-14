# Testing Guide

This guide provides comprehensive testing steps to ensure your portfolio works perfectly before deployment.

## 🧪 Manual Testing Checklist

### Desktop Testing (1920x1080)

#### Navigation
- [x] Navbar bar is sticky and visible on scroll
- [x] Clicking nav links smoothly scrolls to sections
- [x] Active nav item updates as you scroll through sections
- [ ] Theme toggle button switches between light/dark mode
- [x] Theme persists after page refresh

#### Hero Section
- [x] Profile image displays correctly with SVG mask
- [x] Text animations play on page load
- [x] "Get in Touch" button scrolls to contact section
- [x] "View Work" button scrolls to projects section
- [x] Scroll indicator (down arrow) is visible and animated

#### About Section
- [x] Bio paragraphs are readable and well-formatted
- [x] Three feature cards display with icons
- [x] Hover effects work on feature cards
- [x] Background parallax decoration moves on scroll

#### Projects Section
- [x] All projects display in grid layout
- [x] "All Projects" / "Featured" toggle works
- [x] Technology filter buttons work correctly
- [x] Clicking a project card opens the modal
- [x] Modal displays project details correctly
- [x] Modal close button (X) works
- [x] Clicking outside modal closes it
- [x] "View Live Demo" opens in new tab (if available)
- [x] "View Source" opens GitHub in new tab (if available)
- [x] Images lazy-load (check Network tab in DevTools)

#### Unity Games Section
- [x] Game cards display with screenshots
- [x] Hover reveals play button overlay
- [x] Clicking "Play Game" opens fullscreen player modal
- [ ] Game loads in iframe (if WebGL build exists)
- [ ] Fullscreen button works
- [x] Close button exits player modal
- [x] ESC key closes player modal
- [x] External game links open correctly

#### Skills Section
- [x] Three skill categories display correctly
- [x] All skills listed under appropriate categories
- [x] Hover effects work on skill cards
- [x] Cards animate on scroll into view

#### Contact Section
- [x] Form fields accept input
- [x] Name field validates (required)
- [x] Email field validates format
- [x] Message field accepts text
- [ ] Submit button shows loading state
- [ ] Success message appears after submission (placeholder)
- [x] Social media links work and open in new tabs
- [ ] Email link opens mail client

#### Footer
- [x] Copyright year is current
- [x] "Back to Top" button scrolls to hero
- [x] All text is readable

---

### Mobile Testing (iPhone SE - 375x667)

#### General
- [ ] All sections fit within viewport width
- [ ] No horizontal scrolling
- [ ] Touch scrolling is smooth
- [ ] Text is readable without zooming

#### Navigation
- [ ] Hamburger menu icon visible
- [ ] Clicking hamburger opens mobile menu
- [ ] Mobile menu shows all nav links
- [ ] Clicking nav link closes menu and scrolls
- [ ] Theme toggle works in mobile view
- [ ] Close icon (X) appears when menu is open

#### Hero Section
- [ ] Profile image displays at appropriate size
- [ ] Text stacks vertically
- [ ] Buttons stack vertically and are tappable
- [ ] All text is readable

#### About Section
- [ ] Feature cards stack vertically
- [ ] All text is readable
- [ ] Cards are tappable

#### Projects Section
- [ ] Projects display one per row
- [ ] Filter buttons wrap appropriately
- [ ] Project cards are tappable
- [ ] Modal displays correctly on mobile
- [ ] Modal is scrollable
- [ ] Images don't overflow

#### Unity Games Section
- [ ] Game cards display one per row
- [ ] Play button is easily tappable
- [ ] Game player modal fits screen
- [ ] Game is playable (if touch controls supported)

#### Skills Section
- [ ] Skill cards stack vertically
- [ ] All skills are readable

#### Contact Form
- [ ] Form fields are easily tappable
- [ ] Keyboard doesn't obscure input fields
- [ ] Submit button is fully visible
- [ ] Virtual keyboard works properly

#### Footer
- [ ] Footer content is readable
- [ ] "Back to Top" button works

---

### Tablet Testing (iPad - 768x1024)

#### General
- [ ] Layout adapts to tablet size
- [ ] Content uses available space well
- [ ] No awkward gaps or overflow

#### Projects & Games
- [ ] Cards display in 2-column grid
- [ ] Modals display centered and properly sized

---

### Keyboard Navigation Testing

#### Tab Order
- [ ] Tab moves through elements in logical order
- [ ] Skip to main content (if implemented)
- [ ] All interactive elements are focusable
- [ ] Focus indicator is clearly visible
- [ ] No keyboard traps

#### Specific Actions
- [ ] Enter/Space activates buttons
- [ ] Enter/Space opens/closes modals
- [ ] ESC closes modals
- [ ] ESC closes mobile menu
- [ ] Arrow keys work in appropriate contexts

---

### Accessibility Testing

#### Screen Reader
- [ ] All images have alt text
- [ ] Buttons have aria-labels where needed
- [ ] Headings are in logical hierarchy (h1 → h2 → h3)
- [ ] Form fields have associated labels
- [ ] ARIA attributes are used correctly
- [ ] Links indicate when opening in new tab

#### Motion Preferences
- [ ] Test with `prefers-reduced-motion: reduce`:
  ```css
  /* In DevTools, simulate reduced motion */
  ```
- [ ] Animations are disabled or minimal
- [ ] Parallax effects are disabled
- [ ] Scroll behavior is immediate (not smooth)

#### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1 for normal, 3:1 for large)
- [ ] Interactive elements are distinguishable
- [ ] Focus indicators are visible

---

### Performance Testing

#### Lighthouse Audit (DevTools)
```bash
# Build first
npm run build

# Then run Lighthouse in Chrome DevTools
# Target scores:
```
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 90+

#### Key Metrics
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.5s

#### Image Loading
- [ ] Images appear only when scrolled into view (lazy loading)
- [ ] Loading skeleton displays before image loads
- [ ] No layout shift when images load

#### Network
- [ ] Check Network tab in DevTools
- [ ] Unity WebGL iframes load only when clicked
- [ ] No unnecessary API calls
- [ ] Assets are cached appropriately

---

### Browser Compatibility

Test in these browsers:

#### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)

#### Known Issues
- SVG masks may not work in very old browsers (IE11) - clip-path fallback should work

---

### Visual Regression Testing

#### Light Mode
- [ ] Hero section looks correct
- [ ] All sections have proper contrast
- [ ] Shadows are visible but subtle
- [ ] Gradients display smoothly

#### Dark Mode
- [ ] All text is readable on dark backgrounds
- [ ] Card backgrounds are distinguishable
- [ ] Hover effects are visible
- [ ] Gradients adapt to dark theme

---

### Edge Cases & Error Handling

#### Empty States
- [ ] No projects: Shows "No projects" message
- [ ] No games: Shows appropriate message
- [ ] Filter returns no results: Shows "No matches" message

#### Long Content
- [ ] Very long project title: Truncates with ellipsis
- [ ] Very long description: Line clamps work
- [ ] Many tech tags: Shows "+X more" indicator

#### Broken Images
- [ ] Broken image shows loading skeleton
- [ ] Alt text is displayed

#### Network Issues
- [ ] Contact form handles failures gracefully
- [ ] Error messages are user-friendly

---

### Security Testing

- [ ] External links have `rel="noopener noreferrer"`
- [ ] Unity iframe has appropriate `sandbox` attributes
- [ ] No console errors or warnings
- [ ] No exposed sensitive data in code
- [ ] No XSS vulnerabilities in form inputs

---

## 🔧 Debugging Tools

### Browser DevTools
```
F12 or Cmd+Option+I
```

### Useful Console Commands
```javascript
// Check localStorage for theme
localStorage.getItem('theme')

// Force reduced motion
// DevTools → Rendering → Emulate CSS media: prefers-reduced-motion

// Test specific viewport size
// DevTools → Device Toolbar → Responsive → Enter dimensions
```

### React DevTools
- Install React DevTools browser extension
- Inspect component props and state
- Profile component performance

---

## 🐛 Common Issues
4x
### Issue: Smooth scrolling not working
**Solution:** Check `html { scroll-behavior: smooth }` in global.css

### Issue: Images not loading
**Solution:** Verify image paths start with `/` and files exist in `public/`

### Issue: Modal not closing
**Solution:** Check ESC key handler and click-outside listener

### Issue: Theme not persisting
**Solution:** Check browser localStorage is enabled, not in private mode

### Issue: Unity game not loading
**Solution:** 
- Check iframe src path is correct
- Verify all Unity build files are in public/unity/
- Check browser console for CORS errors

---

## 📊 Test Results Template

Copy and fill out after testing:

```markdown
## Test Results - [Date]

### Environment
- Browser: [Chrome/Firefox/Safari/Edge]
- Version: [Version number]
- OS: [macOS/Windows/Linux/iOS/Android]
- Screen: [Resolution]

### Test Summary
- Total Tests: [X]
- Passed: [X]
- Failed: [X]
- Issues Found: [List issues]

### Performance
- Lighthouse Score: [XX/100]
- FCP: [X.X]s
- LCP: [X.X]s
- CLS: [X.XX]

### Issues
1. [Issue description]
   - Severity: [High/Medium/Low]
   - Steps to reproduce: [...]
   - Expected: [...]
   - Actual: [...]

### Sign-off
Tested by: [Name]
Date: [Date]
Status: [Approved/Needs Fixes]
```

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] All tests passed on desktop
- [ ] All tests passed on mobile
- [ ] Lighthouse score > 90 in all categories
- [ ] No console errors or warnings
- [ ] All images optimized and loading correctly
- [ ] Contact form integrated with backend (or placeholder noted)
- [ ] Personal information updated in portfolio.ts
- [ ] Profile photo added
- [ ] At least 3 projects added with real content
- [ ] Social media links updated
- [ ] README.md customized
- [ ] Open Graph image created
- [ ] Tested in multiple browsers
- [ ] Keyboard navigation verified
- [ ] Screen reader tested (optional but recommended)

---

**Happy Testing! 🚀**

For more help, see [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)

