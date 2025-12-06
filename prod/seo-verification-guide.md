# SEO Verification Guide
## YPI Website - Search Engine Optimization Checklist

**Version:** 1.0  
**Date:** December 6, 2025  
**Target:** Google, Bing, Baidu (international)

---

## 🎯 SEO Goals

### Target Metrics
- **Google Search Visibility:** First page for target keywords
- **Page Speed:** Core Web Vitals passing
- **Mobile-Friendly:** 100% compliant
- **Indexed Pages:** All 88 public pages
- **Structured Data:** Zero errors

### Target Keywords (Mining Industry)
- Mining support services Ghana
- Drilling services West Africa
- Production drilling
- Load and haul operations
- Mining equipment Ghana
- Yellow Power International
- Pre-split drilling
- Reverse circulation drilling

---

## 📋 Technical SEO Checklist

### Site Structure

#### 1. Robots.txt
- [ ] File exists at `/robots.txt`
- [ ] Allows all pages except admin
- [ ] Points to sitemap.xml
- [ ] No syntax errors

**Verification:**
```bash
# Check robots.txt
curl http://localhost:3000/robots.txt

# Expected output:
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://yellowpowerinternational.com/sitemap.xml
```

#### 2. XML Sitemap
- [ ] File exists at `/sitemap.xml`
- [ ] Valid XML format
- [ ] All public pages included (88 pages)
- [ ] Proper priority values
- [ ] lastmod dates present
- [ ] No broken URLs

**Verification:**
```bash
# Check sitemap
curl http://localhost:3000/sitemap.xml

# Validate XML
# Upload to: https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

**Expected Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yellowpowerinternational.com/</loc>
    <lastmod>2025-12-06</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- 87 more URLs -->
</urlset>
```

#### 3. URL Structure
- [ ] URLs are clean and descriptive
- [ ] No query parameters (where possible)
- [ ] Consistent structure
- [ ] Lowercase URLs
- [ ] Hyphens not underscores

**Examples:**
```
✅ Good:
/services/production-drilling
/projects/tarkwa-gold-mine
/news/new-fleet-expansion-2024

❌ Bad:
/services?id=1
/project_details
/NEWS/Article
```

#### 4. HTTPS & Security
- [ ] HTTPS enforced (Vercel handles)
- [ ] No mixed content warnings
- [ ] Valid SSL certificate
- [ ] HSTS headers (if applicable)
- [ ] Secure cookies

---

## 📄 On-Page SEO Checklist

### Meta Tags (Check 10+ pages)

#### Title Tags
- [ ] Present on all pages
- [ ] Unique per page
- [ ] 50-60 characters
- [ ] Include primary keyword
- [ ] Brand name included
- [ ] Descriptive and compelling

**Test Method:**
```javascript
// Check title length
const title = document.title;
console.log(`Title: "${title}" (${title.length} chars)`);
if (title.length < 50 || title.length > 60) {
  console.warn('Title length not optimal');
}
```

**Examples:**
```html
<!-- Homepage -->
<title>Leading Mining & Drilling Services in West Africa | Yellow Power International</title>

<!-- Service Page -->
<title>Production Drilling Services | Yellow Power International</title>

<!-- News Article -->
<title>YPI Completes Major Project in Tarkwa | YPI News</title>
```

#### Meta Descriptions
- [ ] Present on all pages
- [ ] Unique per page
- [ ] 150-160 characters
- [ ] Include target keywords
- [ ] Compelling call-to-action
- [ ] Accurate page summary

**Examples:**
```html
<meta name="description" content="Yellow Power International provides comprehensive drilling, blasting, and mining support services across West Africa. Specialized in production drilling, pre-split drilling, load & haul operations. Est. 2017 in Ghana." />
```

#### Open Graph Tags
- [ ] og:title present
- [ ] og:description present
- [ ] og:image present (1200x630px)
- [ ] og:url present
- [ ] og:type present
- [ ] og:site_name present

**Verification:**
```html
<meta property="og:title" content="Leading Mining Services in West Africa" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://yellowpowerinternational.com/og-image.jpg" />
<meta property="og:url" content="https://yellowpowerinternational.com/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Yellow Power International" />
```

#### Twitter Card Tags
- [ ] twitter:card present
- [ ] twitter:title present
- [ ] twitter:description present
- [ ] twitter:image present

**Test Tools:**
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

#### Canonical URLs
- [ ] Present on all pages
- [ ] Points to correct URL
- [ ] Absolute URLs (not relative)
- [ ] HTTPS URLs
- [ ] No self-referencing chains

```html
<link rel="canonical" href="https://yellowpowerinternational.com/services/production-drilling" />
```

### Content Structure

#### Headings
- [ ] One H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical hierarchy (H1 > H2 > H3)
- [ ] No skipped levels
- [ ] Descriptive and unique

**Test Script:**
```javascript
// Check heading structure
const h1s = document.querySelectorAll('h1');
if (h1s.length === 0) console.error('No H1 found');
if (h1s.length > 1) console.warn('Multiple H1s found');

const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
headings.forEach((h, i) => {
  console.log(`${h.tagName}: ${h.textContent.trim()}`);
});
```

#### Images
- [ ] All images have alt text
- [ ] Alt text descriptive (not keyword stuffing)
- [ ] File names descriptive
- [ ] Images optimized (< 200 KB)
- [ ] Proper dimensions specified
- [ ] Next/Image component used

**Bad:**
```html
<img src="img001.jpg" alt="mining">
```

**Good:**
```html
<Image 
  src="/images/equipment/production-drill-1.jpg" 
  alt="Atlas Copco ROC D9C production drilling rig at Tarkwa mine site" 
  width={800} 
  height={600} 
/>
```

#### Internal Linking
- [ ] Relevant internal links present
- [ ] Descriptive anchor text
- [ ] No broken internal links
- [ ] Important pages linked from multiple places
- [ ] Logical link structure

**Best Practices:**
```html
<!-- ❌ Bad -->
<a href="/services">Click here</a>

<!-- ✅ Good -->
<a href="/services/production-drilling">Learn about our production drilling services</a>
```

---

## 🏗️ Structured Data (Schema.org)

### Organization Schema
- [ ] Present on homepage
- [ ] Includes company name
- [ ] Logo URL
- [ ] Contact info
- [ ] Social media profiles
- [ ] Address

**Verification:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yellow Power International",
  "url": "https://yellowpowerinternational.com",
  "logo": "https://yellowpowerinternational.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233-268-066-942",
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madina",
    "addressRegion": "Greater Accra",
    "addressCountry": "GH"
  },
  "sameAs": [
    "https://linkedin.com/company/yellow-power-international",
    "https://facebook.com/yellowpowerintl",
    "https://twitter.com/yellowpowerintl"
  ]
}
```

### LocalBusiness Schema
- [ ] Present on contact/locations pages
- [ ] Includes all office locations
- [ ] Operating hours
- [ ] Geographic coordinates

### BreadcrumbList Schema
- [ ] Present on all relevant pages
- [ ] Matches actual breadcrumbs
- [ ] Correct position values

### Article Schema
- [ ] Present on news articles
- [ ] Headline, author, publish date
- [ ] Image included
- [ ] Article body

### JobPosting Schema
- [ ] Present on job pages
- [ ] Title, description, location
- [ ] Salary range (if applicable)
- [ ] Application URL

**Test Tools:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

---

## 📱 Mobile SEO

### Mobile-Friendly Test
- [ ] Passes Google Mobile-Friendly Test
- [ ] Responsive design works on all sizes
- [ ] Text readable without zooming
- [ ] Touch targets adequate (44x44px)
- [ ] No horizontal scrolling

**Test URL:**
https://search.google.com/test/mobile-friendly

### Viewport Configuration
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Mobile Performance
- [ ] Mobile page speed score > 85
- [ ] Images optimized for mobile
- [ ] Mobile-first responsive design
- [ ] No mobile-specific errors

---

## ⚡ Page Speed & Core Web Vitals

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **FID/INP (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅

**Test Tools:**
- PageSpeed Insights: https://pagespeed.web.dev/
- Web Vitals Extension: Chrome Web Store
- Vercel Analytics: Built-in monitoring

### Performance Impact on SEO
- Slow pages rank lower
- Core Web Vitals are ranking factors
- Mobile speed especially important
- User experience affects bounce rate

---

## 🔗 Link Building & External SEO

### Backlink Quality
- [ ] No spam backlinks
- [ ] Relevant industry backlinks
- [ ] Local business directories
- [ ] Industry associations
- [ ] News mentions

### Social Signals
- [ ] Active social media presence
- [ ] Content shared on social platforms
- [ ] Engagement with community
- [ ] Social profiles linked

### Local SEO
- [ ] Google Business Profile created
- [ ] Accurate NAP (Name, Address, Phone)
- [ ] Local directories listed
- [ ] Reviews on Google/Yelp
- [ ] Local content created

---

## 🔍 Content SEO

### Content Quality
- [ ] Original, unique content
- [ ] Comprehensive coverage
- [ ] Expertise demonstrated (E-E-A-T)
- [ ] Regular updates
- [ ] No duplicate content
- [ ] Proper grammar and spelling

### Keyword Optimization
- [ ] Primary keyword in title
- [ ] Keywords in first paragraph
- [ ] Keywords in headings
- [ ] Natural keyword density (2-3%)
- [ ] LSI keywords included
- [ ] No keyword stuffing

**Target Keywords by Page:**
```
Homepage:
- Mining support services Ghana
- Drilling services West Africa
- Yellow Power International

Services:
- Production drilling services
- Pre-split drilling
- Reverse circulation drilling
- Load and haul operations
- Mining construction services

About:
- Mining company Ghana
- Drilling company West Africa
- Mining support services

Projects:
- Mining projects Ghana
- Drilling projects West Africa
- [Specific mine names]
```

### Content Freshness
- [ ] News section regularly updated
- [ ] Blog/insights published
- [ ] Project portfolio current
- [ ] Job listings up-to-date
- [ ] Last modified dates shown

---

## 📊 SEO Analytics & Monitoring

### Google Search Console
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Coverage report checked
- [ ] Performance monitored
- [ ] Mobile usability checked
- [ ] Core Web Vitals reviewed

**Key Metrics to Monitor:**
1. Total clicks
2. Total impressions
3. Average CTR
4. Average position
5. Indexed pages count
6. Mobile usability issues
7. Core Web Vitals status

### Google Analytics 4
- [ ] Property set up
- [ ] Tracking code installed
- [ ] Goals configured
- [ ] E-commerce tracking (if applicable)
- [ ] Event tracking set up

**Key Metrics to Track:**
1. Organic traffic
2. Bounce rate
3. Average session duration
4. Pages per session
5. Goal completions
6. Top landing pages
7. Exit pages

### Bing Webmaster Tools
- [ ] Site verified
- [ ] Sitemap submitted
- [ ] Reports reviewed

---

## 🐛 Common SEO Issues

### Issue 1: Duplicate Content
**Problem:** Same content on multiple URLs  
**Detection:**
```bash
# Check for duplicate titles
grep -r "<title>" dev/app | sort | uniq -d
```
**Fix:** Use canonical tags, 301 redirects, or noindex

### Issue 2: Missing Meta Descriptions
**Problem:** Pages without descriptions  
**Detection:** Check Google Search Console or crawl site  
**Fix:** Add unique meta descriptions to all pages

### Issue 3: Broken Links (404s)
**Problem:** Links pointing to non-existent pages  
**Detection:** Use broken link checker tools  
**Fix:** Update or remove broken links

### Issue 4: Slow Page Speed
**Problem:** Pages load slowly  
**Detection:** Run PageSpeed Insights  
**Fix:** Optimize images, minify code, use CDN

### Issue 5: Mobile Usability Issues
**Problem:** Site not mobile-friendly  
**Detection:** Mobile-Friendly Test  
**Fix:** Implement responsive design

### Issue 6: Structured Data Errors
**Problem:** Invalid schema markup  
**Detection:** Rich Results Test  
**Fix:** Validate and correct JSON-LD

---

## ✅ Pre-Launch SEO Checklist

### Week Before Launch
- [ ] Run full SEO audit
- [ ] Fix all critical issues
- [ ] Submit sitemap to Search Console
- [ ] Set up Google Analytics
- [ ] Set up Bing Webmaster Tools
- [ ] Create Google Business Profile
- [ ] Verify all redirects work
- [ ] Test 404 page

### Launch Day
- [ ] Verify DNS propagation
- [ ] Check HTTPS working
- [ ] Verify robots.txt allows crawling
- [ ] Submit site to search engines
- [ ] Check all tracking working
- [ ] Monitor for any errors

### Week After Launch
- [ ] Monitor Search Console daily
- [ ] Check for crawl errors
- [ ] Verify pages being indexed
- [ ] Monitor Core Web Vitals
- [ ] Review initial traffic
- [ ] Check for any security issues

---

## 📈 Ongoing SEO Tasks

### Daily
- [ ] Monitor Search Console for critical issues
- [ ] Check site uptime
- [ ] Review traffic spikes/drops

### Weekly
- [ ] Review Search Console performance
- [ ] Check for new backlinks
- [ ] Monitor Core Web Vitals
- [ ] Review top-performing content

### Monthly
- [ ] Full SEO audit
- [ ] Update content calendar
- [ ] Analyze keyword rankings
- [ ] Review competitor SEO
- [ ] Update old content
- [ ] Check for broken links
- [ ] Review and optimize metadata

### Quarterly
- [ ] Comprehensive competitive analysis
- [ ] Content strategy review
- [ ] Technical SEO audit
- [ ] Link building campaign
- [ ] Performance optimization
- [ ] Schema markup review

---

## 🎯 SEO Tools & Resources

### Free Tools
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Google Rich Results Test
- PageSpeed Insights
- Mobile-Friendly Test
- Screaming Frog (free version)

### Paid Tools (Optional)
- Ahrefs
- SEMrush
- Moz Pro
- Screaming Frog (full version)

### Browser Extensions
- SEO Meta in 1 Click
- Lighthouse
- Web Developer
- MozBar

---

## 📊 SEO Reporting Template

```markdown
# SEO Audit Report
Date: ___________
Auditor: ___________

## Technical SEO
- Sitemap: ☐ Pass ☐ Fail
- Robots.txt: ☐ Pass ☐ Fail
- HTTPS: ☐ Pass ☐ Fail
- Mobile-Friendly: ☐ Pass ☐ Fail
- Page Speed: ___ / 100

## On-Page SEO
- Title Tags: ☐ Pass ☐ Fail
- Meta Descriptions: ☐ Pass ☐ Fail
- Headings: ☐ Pass ☐ Fail
- Images: ☐ Pass ☐ Fail
- Internal Links: ☐ Pass ☐ Fail

## Structured Data
- Organization: ☐ Pass ☐ Fail
- LocalBusiness: ☐ Pass ☐ Fail
- Breadcrumbs: ☐ Pass ☐ Fail
- Articles: ☐ Pass ☐ Fail
- Jobs: ☐ Pass ☐ Fail

## Performance
- LCP: ___ s
- FID/INP: ___ ms
- CLS: ___

## Issues Found
1. [Priority] Issue description
2. [Priority] Issue description

## Recommendations
1. Action item
2. Action item

## SEO Score: ___ / 100
```

---

**End of SEO Verification Guide**
