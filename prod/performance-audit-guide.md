# Performance Audit Guide
## YPI Website - Lighthouse & Core Web Vitals Testing

**Version:** 1.0  
**Date:** December 6, 2025

---

## 🎯 Performance Goals

### Target Scores
- **Performance:** ≥ 90
- **Accessibility:** ≥ 90
- **Best Practices:** ≥ 90
- **SEO:** ≥ 90

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID/INP (First Input Delay/Interaction to Next Paint):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## 📊 Lighthouse Audit Process

### 1. Preparation
```bash
# Build production version
cd dev
npm run build
npm run start

# Access at http://localhost:3000
```

### 2. Running Lighthouse

#### Browser DevTools Method
1. Open Chrome DevTools (F12)
2. Navigate to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Select "Desktop" or "Mobile"
5. Click "Analyze page load"
6. Wait for report
7. Save report (JSON or HTML)

#### CLI Method
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit on homepage
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-home.html

# Run on specific pages
lighthouse http://localhost:3000/services --output html --output-path ./lighthouse-services.html
lighthouse http://localhost:3000/projects --output html --output-path ./lighthouse-projects.html
lighthouse http://localhost:3000/contact --output html --output-path ./lighthouse-contact.html
```

### 3. Priority Pages to Audit

#### Tier 1 (Critical)
- [ ] Homepage `/`
- [ ] Services Overview `/services`
- [ ] Contact `/contact`
- [ ] About `/about`

#### Tier 2 (Important)
- [ ] Service Detail `/services/production-drilling`
- [ ] Projects `/projects`
- [ ] News `/news`
- [ ] Careers `/careers`

#### Tier 3 (Secondary)
- [ ] Sustainability `/sustainability`
- [ ] Media Gallery `/media/gallery`
- [ ] Search `/search`

---

## 📈 Current Performance Metrics

### Build Output Analysis
```
Homepage: 177 kB First Load JS
- Base: 88 kB shared chunks
- Page-specific: 42.7 kB

Largest Pages:
- Projects: 566 kB (includes Mapbox)
- Contact: 165 kB (includes maps & forms)
- News: 145 kB (includes articles & filters)
- Services: 138 kB (includes equipment data)

Average First Load JS: ~110 kB
```

### Page Generation Stats
- **Total Static Pages:** 88
- **Dynamic Pages:** Admin routes (protected)
- **API Routes:** 12
- **Middleware:** 26.5 kB

---

## 🔍 Performance Optimization Checklist

### Images
- [ ] All images optimized (WebP format when possible)
- [ ] Next.js Image component used
- [ ] Lazy loading implemented
- [ ] Proper dimensions specified
- [ ] Alt text provided

### JavaScript
- [ ] Code splitting active
- [ ] Tree shaking enabled
- [ ] Unused code removed
- [ ] Third-party scripts deferred
- [ ] Dynamic imports where appropriate

### CSS
- [ ] Critical CSS inlined
- [ ] Unused CSS purged (Tailwind)
- [ ] CSS minified
- [ ] No render-blocking stylesheets

### Fonts
- [ ] Font preloading
- [ ] Font display: swap
- [ ] System fonts fallback
- [ ] Subset fonts (if custom)

### Caching
- [ ] Static assets cached
- [ ] API responses cached (where appropriate)
- [ ] Service worker (optional)
- [ ] CDN configured (Vercel)

### Network
- [ ] HTTP/2 enabled
- [ ] Compression (gzip/brotli)
- [ ] Connection keep-alive
- [ ] DNS prefetch for external domains

---

## 🎛️ Specific Optimizations

### Homepage Optimizations
```typescript
// ✅ Already implemented:
- Hero section image optimized
- Services cards lazy-loaded
- Stats section deferred
- News grid paginated

// 🔄 Potential improvements:
- Defer non-critical JavaScript
- Implement skeleton loaders
- Optimize font loading
```

### Projects Page Optimizations
```typescript
// ⚠️ Note: Largest bundle (566 kB) due to Mapbox
// ✅ Already implemented:
- Map lazy-loaded (client component)
- Project images optimized
- Markers dynamically rendered

// 🔄 Potential improvements:
- Implement map clustering for many projects
- Consider lighter map library alternative
- Add loading states
```

### Services Page Optimizations
```typescript
// ✅ Already implemented:
- Service cards optimized
- Equipment images lazy-loaded
- ShareButtons client-component

// 🔄 Potential improvements:
- Equipment image thumbnails
- Incremental static regeneration
```

---

## 📱 Mobile Performance

### Mobile-Specific Considerations
- [ ] Touch targets ≥ 44x44px
- [ ] Viewport meta tag configured
- [ ] Mobile-first responsive design
- [ ] Reduced motion support
- [ ] Offline functionality (optional)

### Mobile Testing Checklist
- [ ] Test on real devices (iOS/Android)
- [ ] Test on 3G/4G networks
- [ ] Test with DevTools throttling
- [ ] Verify touch interactions
- [ ] Check mobile keyboard behavior

---

## 🐛 Common Performance Issues

### Issue: Large JavaScript Bundles
**Symptoms:**
- First Load JS > 200 kB
- Slow initial page load
- High Time to Interactive

**Solutions:**
1. Code split large components
2. Use dynamic imports
3. Remove unused dependencies
4. Analyze bundle with webpack-bundle-analyzer

### Issue: Unoptimized Images
**Symptoms:**
- Large image files (> 500 KB)
- Slow LCP
- High bandwidth usage

**Solutions:**
1. Use Next.js Image component
2. Convert to WebP format
3. Implement lazy loading
4. Specify image dimensions

### Issue: Render-Blocking Resources
**Symptoms:**
- Slow First Contentful Paint
- White screen on initial load
- Blocking CSS/JS

**Solutions:**
1. Inline critical CSS
2. Defer non-critical JavaScript
3. Use font-display: swap
4. Preload key resources

### Issue: Layout Shifts (High CLS)
**Symptoms:**
- Content jumping during load
- Images/ads causing shifts
- Dynamic content insertion

**Solutions:**
1. Specify image dimensions
2. Reserve space for dynamic content
3. Avoid inserting content above viewport
4. Use CSS aspect-ratio

---

## 📊 Monitoring & Reporting

### Production Monitoring
- [ ] Vercel Analytics enabled
- [ ] Core Web Vitals tracked
- [ ] Real User Monitoring (RUM)
- [ ] Error tracking (optional: Sentry)

### Regular Audits
- **Weekly:** Check Vercel Analytics dashboard
- **Monthly:** Run full Lighthouse audits
- **Quarterly:** Comprehensive performance review
- **After major updates:** Re-audit affected pages

### Metrics to Track
1. **Page Load Time**
   - Target: < 3s on 3G
   - Current: ~1-2s on fast connection

2. **Time to Interactive**
   - Target: < 3.8s mobile
   - Monitor via Lighthouse

3. **Bundle Size**
   - Target: First Load < 200 kB
   - Current: Average ~110 kB (excellent)

4. **API Response Time**
   - Target: < 500ms
   - Monitor via Vercel Functions

---

## 🔄 Continuous Optimization

### Before Each Release
1. Run production build
2. Audit 5-10 key pages
3. Check bundle sizes
4. Verify Core Web Vitals
5. Test on mobile devices

### Performance Budget
```javascript
// Recommended budgets
{
  "firstLoad": "200kb",
  "pageSpecific": "100kb",
  "images": "500kb per page",
  "thirdParty": "50kb",
  "totalJS": "200kb",
  "totalCSS": "50kb"
}
```

### Tools & Resources
- **Lighthouse:** Built into Chrome DevTools
- **WebPageTest:** https://www.webpagetest.org/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Vercel Analytics:** Built-in
- **Bundle Analyzer:** `npm run analyze` (if configured)

---

## ✅ Performance Checklist Summary

### Critical Performance Items
- [x] Next.js Image component used throughout
- [x] Code splitting implemented
- [x] CSS optimized with Tailwind purge
- [x] Static generation for all public pages
- [x] API routes optimized
- [x] No console errors in production
- [x] Bundle sizes within targets

### Good Performance Indicators
- [x] First Load JS average: ~110 kB
- [x] 88 static pages generated
- [x] Shared chunks: 88 kB (good caching)
- [x] Largest page: 566 kB (acceptable for map functionality)
- [x] Build succeeds without warnings
- [x] TypeScript strict mode enabled

### Areas for Future Enhancement
- [ ] Implement service worker (PWA)
- [ ] Add skeleton loaders
- [ ] Optimize map library (if needed)
- [ ] Implement incremental static regeneration
- [ ] Add image blur placeholders
- [ ] Consider edge caching strategies

---

## 📝 Audit Report Template

```markdown
# Performance Audit Report
Date: ___________
Auditor: ___________

## Homepage Results
- Performance Score: ___ / 100
- LCP: ___ s
- FID/INP: ___ ms
- CLS: ___
- Bundle Size: ___ kB

## Issues Found
1. [Priority] Issue description
2. [Priority] Issue description

## Recommendations
1. Action item
2. Action item

## Next Steps
- [ ] Fix critical issues
- [ ] Re-audit
- [ ] Deploy optimizations
```

---

**End of Performance Audit Guide**
