# Phase 15: QA Test Checklist
## Yellow Power International Website - Comprehensive Testing Guide

**Project:** YPI Website  
**Version:** Phase 15 Complete  
**Date:** December 6, 2025  
**Tester:** QA Team

---

## 📋 Testing Environment Setup

### Prerequisites
- [ ] Development server running (`npm run dev` in dev/)
- [ ] Production build completed (`npm run build` in dev/)
- [ ] Browser DevTools available
- [ ] Screen reader installed (NVDA/JAWS/VoiceOver)
- [ ] Multiple browsers available (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices or emulators ready

### Test Accounts
- [ ] Admin account credentials verified
- [ ] Test email addresses available for form testing
- [ ] Newsletter service configured

---

## 🌐 1. Functional Testing - Public Pages

### Homepage (/)
- [ ] Hero section loads and displays correctly
- [ ] Services overview cards are clickable
- [ ] Stats section shows data
- [ ] Equipment showcase loads images
- [ ] Clients section displays logos
- [ ] Latest news articles appear
- [ ] Newsletter signup form functional
- [ ] All CTA buttons work
- [ ] Footer links are correct
- [ ] WhatsApp button visible and functional
- [ ] PowerBot chat widget loads

### About Pages
- [ ] `/about` - Main about page loads
- [ ] `/about/history` - Timeline displays
- [ ] `/about/leadership` - Team cards render
- [ ] `/about/mission-vision` - Content displays
- [ ] `/about/awards` - Achievement cards load
- [ ] `/about/founder` - Founder profile shows
- [ ] `/about/global-presence` - Map or locations display
- [ ] Social media links work
- [ ] Share buttons functional

### Services
- [ ] `/services` - Services overview with all 6+ services
- [ ] `/services/production-drilling` - Detail page loads
- [ ] `/services/pre-split-drilling` - Detail page loads
- [ ] `/services/reverse-circulation-drilling` - Detail page loads
- [ ] `/services/load-haul` - Detail page loads
- [ ] `/services/construction` - Detail page loads
- [ ] `/services/equipment` - Equipment catalog loads
- [ ] `/services/technology` - Tech page displays
- [ ] Quote request form on services page works
- [ ] Share buttons on each service page
- [ ] PDF brochure downloads (if available)
- [ ] Equipment images load correctly
- [ ] Technical specifications display

### Projects & Case Studies
- [ ] `/projects` - Project portfolio loads
- [ ] Project filter works correctly
- [ ] Project map displays markers
- [ ] Project cards are clickable
- [ ] `/projects/[slug]` - Individual project pages load (test 3-5)
- [ ] Project images gallery functional
- [ ] Project timeline displays
- [ ] Client testimonials show
- [ ] Metrics and results display
- [ ] Share buttons work
- [ ] `/case-studies` - Case studies page loads
- [ ] Case study filters work
- [ ] Download case study PDFs (if available)

### Clients & Partnerships
- [ ] `/clients` - Client showcase loads
- [ ] Client logos display correctly
- [ ] Client testimonials show
- [ ] `/partnerships` - Partnership page loads
- [ ] Partnership form functional
- [ ] `/suppliers` - Supplier registration page loads
- [ ] Supplier form submits correctly

### Careers
- [ ] `/careers` - Careers hub loads
- [ ] `/careers/jobs` - Job listings display
- [ ] `/careers/jobs/[jobId]` - Individual job pages load (test 3-5)
- [ ] Job application form functional
- [ ] File upload works
- [ ] `/careers/life-at-ypi` - Culture page loads
- [ ] Video testimonials play
- [ ] Employee stories display
- [ ] `/careers/training` - Training programs page loads
- [ ] `/careers/application-process` - Process page displays

### Sustainability & CSR
- [ ] `/sustainability` - Sustainability hub loads
- [ ] `/sustainability/environment` - Environmental page displays
- [ ] `/sustainability/safety` - Safety page loads
- [ ] Safety metrics display
- [ ] `/sustainability/csr` - CSR overview loads
- [ ] `/sustainability/csr/projects` - CSR projects display
- [ ] CSR project cards are detailed
- [ ] Impact metrics show
- [ ] Video content loads (if available)

### News & Media
- [ ] `/news` - News hub with articles
- [ ] News filter by category works
- [ ] News search function works
- [ ] Pagination functional
- [ ] `/news/[slug]` - Individual articles load (test 5+)
- [ ] Article images display
- [ ] Share buttons on articles
- [ ] Related articles show
- [ ] `/news/press-releases` - Press releases page
- [ ] `/news/newsletter-archive` - Newsletter archive loads
- [ ] Newsletter downloads work
- [ ] `/media` - Media hub loads
- [ ] `/media/gallery` - Image gallery functional
- [ ] Image lightbox works
- [ ] `/media/videos` - Video gallery loads
- [ ] Videos play correctly

### Contact & Locations
- [ ] `/contact` - Contact page loads
- [ ] Contact form submits
- [ ] Form validation works
- [ ] WhatsApp integration works
- [ ] Department contacts display
- [ ] Social media links functional
- [ ] `/contact/locations` - Office locations page
- [ ] Office map displays correctly
- [ ] Office location markers clickable
- [ ] Office details in popups

### Search & AI Features
- [ ] `/search` - Search page loads
- [ ] Search function works
- [ ] AI semantic search functional (if enabled)
- [ ] Search results display correctly
- [ ] PowerBot chat widget:
  - [ ] Opens when clicked
  - [ ] Accepts input
  - [ ] Provides responses
  - [ ] Sources citations work
  - [ ] Handles errors gracefully

---

## 📝 2. Form Testing

### Quote Request Form
- [ ] Form loads on services page
- [ ] All fields validate correctly
- [ ] Required field validation
- [ ] Email format validation
- [ ] Phone number validation
- [ ] Service selection works
- [ ] File upload works
- [ ] Submit button functional
- [ ] Success message displays
- [ ] Error handling works
- [ ] Email confirmation sent

### Contact Form
- [ ] Form loads on contact page
- [ ] Name field validation
- [ ] Email validation
- [ ] Message textarea works
- [ ] Character count (if any)
- [ ] Submit successful
- [ ] Confirmation message
- [ ] Email notification sent

### Newsletter Signup
- [ ] Form on homepage works
- [ ] Form on news page works
- [ ] Email validation
- [ ] Submit functional
- [ ] Success feedback
- [ ] Error feedback
- [ ] Duplicate email handling
- [ ] Link to archive works

### Job Application Form
- [ ] Form loads on job pages
- [ ] Personal info fields work
- [ ] Resume upload functional
- [ ] Cover letter upload works
- [ ] File size validation
- [ ] File type validation
- [ ] Submit successful
- [ ] Confirmation displayed

### Partnership Form
- [ ] Form loads correctly
- [ ] All fields functional
- [ ] Company info validation
- [ ] Contact validation
- [ ] Partnership type selection
- [ ] Submit works
- [ ] Confirmation shown

### Supplier Registration Form
- [ ] Form accessible
- [ ] Company details work
- [ ] Product/service selection
- [ ] Document uploads work
- [ ] Certification uploads
- [ ] Validation correct
- [ ] Submission successful

---

## 🔐 3. Admin Dashboard Testing

### Authentication
- [ ] `/admin/login` - Login page loads
- [ ] Login form validation
- [ ] Successful login
- [ ] Failed login handling
- [ ] Session persistence
- [ ] Logout functional
- [ ] Protected routes redirect

### Dashboard Home
- [ ] `/admin` - Dashboard loads
- [ ] Stats cards display
- [ ] Recent activity shows
- [ ] Quick actions work
- [ ] Navigation sidebar functional

### Content Management
- [ ] `/admin/content/news` - News list loads
- [ ] Create news article
- [ ] Edit news article
- [ ] Delete news article
- [ ] Image upload works
- [ ] Rich text editor functional
- [ ] Preview works

### Services Management
- [ ] `/admin/services` - Services list
- [ ] Edit service details
- [ ] Update specifications
- [ ] Save changes

### Projects Management
- [ ] `/admin/projects` - Projects list
- [ ] View project details
- [ ] Edit project info
- [ ] Update status

### Equipment Management
- [ ] `/admin/equipment` - Equipment list
- [ ] Add equipment
- [ ] Edit equipment
- [ ] Upload images
- [ ] Update specs

### Careers Management
- [ ] `/admin/careers/jobs` - Job listings
- [ ] Create job posting
- [ ] Edit job details
- [ ] Deactivate job
- [ ] `/admin/careers/applications` - Applications list
- [ ] View application details
- [ ] Download resumes

### Submissions Views
- [ ] `/admin/submissions/quotes` - Quote requests
- [ ] `/admin/submissions/contact` - Contact messages
- [ ] `/admin/submissions/partnerships` - Partnership inquiries
- [ ] View submission details
- [ ] Mark as read/processed
- [ ] Export functionality (if available)

### Media Library
- [ ] `/admin/media` - Media library loads
- [ ] Upload images
- [ ] Upload documents
- [ ] Organize files
- [ ] Delete files
- [ ] Search media

### Settings
- [ ] `/admin/settings` - Settings page loads
- [ ] Company info editable
- [ ] SEO settings work
- [ ] Save changes functional

---

## 📱 4. Responsive Testing

### Mobile (320px - 480px)
- [ ] Homepage layout adapts
- [ ] Navigation menu hamburger works
- [ ] Forms are usable
- [ ] Images scale correctly
- [ ] Text is readable
- [ ] Buttons are tappable (44px min)
- [ ] No horizontal scroll
- [ ] WhatsApp button positioned well
- [ ] PowerBot accessible

### Tablet (768px - 1024px)
- [ ] Layout transitions properly
- [ ] Grid columns adjust
- [ ] Navigation works
- [ ] Images responsive
- [ ] Forms full-width appropriate

### Desktop (1280px+)
- [ ] Full layout displays
- [ ] Max-width containers work
- [ ] Sidebars function
- [ ] Multi-column layouts correct
- [ ] Images high quality

### Orientation Changes
- [ ] Portrait to landscape works
- [ ] Content reflows
- [ ] No layout breaks

---

## 🌐 5. Cross-Browser Testing

### Chrome (Latest)
- [ ] All pages render correctly
- [ ] Forms work
- [ ] JavaScript executes
- [ ] No console errors
- [ ] Performance good

### Firefox (Latest)
- [ ] All pages render correctly
- [ ] Forms work
- [ ] JavaScript executes
- [ ] No console errors
- [ ] CSS renders properly

### Safari (Latest)
- [ ] All pages render correctly
- [ ] Forms work
- [ ] JavaScript executes
- [ ] iOS compatibility
- [ ] WebKit features work

### Edge (Latest)
- [ ] All pages render correctly
- [ ] Forms work
- [ ] JavaScript executes
- [ ] No console errors

### Mobile Browsers
- [ ] Chrome Mobile works
- [ ] Safari iOS works
- [ ] Samsung Internet works
- [ ] Touch interactions smooth

---

## ⚡ 6. Performance Testing

### Lighthouse Audit (Run on key pages)

#### Homepage
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90
- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms
- [ ] CLS < 0.1

#### Services Page
- [ ] Performance score documented
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] JS bundles reasonable

#### Projects Page
- [ ] Performance score documented
- [ ] Map loads efficiently
- [ ] Images lazy-loaded
- [ ] No layout shifts

#### News Page
- [ ] Performance score documented
- [ ] Pagination efficient
- [ ] Images optimized

#### Contact Page
- [ ] Performance score documented
- [ ] Forms load quickly
- [ ] Maps efficient

### Load Time Testing
- [ ] First page load < 3s
- [ ] Subsequent pages < 1s
- [ ] API responses < 500ms
- [ ] Image loading optimized
- [ ] Font loading optimized

### Bundle Size Analysis
- [ ] Total JS bundle documented
- [ ] First Load JS < 200kB
- [ ] Shared chunks appropriate
- [ ] Code splitting working
- [ ] Tree shaking effective

---

## ♿ 7. Accessibility Testing

### Keyboard Navigation
- [ ] Tab order logical
- [ ] All interactive elements focusable
- [ ] Focus indicators visible
- [ ] Skip to main content works
- [ ] Dropdown menus keyboard accessible
- [ ] Forms keyboard accessible
- [ ] Modal dialogs trap focus
- [ ] ESC key closes modals

### Screen Reader Testing
- [ ] Page titles announced
- [ ] Headings structure correct (h1-h6)
- [ ] Landmarks used properly
- [ ] Images have alt text
- [ ] Links descriptive
- [ ] Form labels associated
- [ ] Error messages announced
- [ ] Dynamic content updates announced
- [ ] ARIA labels present where needed

### Visual Accessibility
- [ ] Color contrast > 4.5:1 (text)
- [ ] Color contrast > 3:1 (large text)
- [ ] Text resizable to 200%
- [ ] No info by color alone
- [ ] Focus indicators visible
- [ ] No flashing content

### WCAG 2.1 AA Compliance
- [ ] Perceivable requirements met
- [ ] Operable requirements met
- [ ] Understandable requirements met
- [ ] Robust requirements met

---

## 🔍 8. SEO Verification

### Meta Tags (Check 10+ pages)
- [ ] Title tags present (50-60 chars)
- [ ] Meta descriptions present (150-160 chars)
- [ ] Open Graph tags correct
- [ ] Twitter Card tags correct
- [ ] Canonical URLs correct
- [ ] No duplicate titles
- [ ] Keywords relevant

### Structured Data
- [ ] Organization schema present
- [ ] LocalBusiness schema correct
- [ ] BreadcrumbList on relevant pages
- [ ] Article schema on news
- [ ] JobPosting schema on careers
- [ ] FAQPage schema where used
- [ ] Review schema (if applicable)
- [ ] Test with Rich Results Tool

### Technical SEO
- [ ] `/robots.txt` accessible and correct
- [ ] `/sitemap.xml` accessible and valid
- [ ] XML sitemap includes all pages
- [ ] URLs are SEO-friendly
- [ ] No broken links (404s)
- [ ] Redirects working (301s)
- [ ] HTTPS enforced
- [ ] Mobile-friendly (Google test)
- [ ] Page speed optimized

### Content SEO
- [ ] H1 tags unique per page
- [ ] Heading hierarchy logical
- [ ] Internal linking strategy
- [ ] Image alt attributes
- [ ] Content quality good
- [ ] Keyword usage natural

---

## 🔗 9. Link Testing

### Navigation Links
- [ ] Header navigation works
- [ ] Footer navigation works
- [ ] Breadcrumbs functional
- [ ] Sidebar links (admin)

### Internal Links
- [ ] All internal links resolve
- [ ] No 404 errors
- [ ] Service links work
- [ ] Project links work
- [ ] News article links work
- [ ] Career links work

### External Links
- [ ] Social media links open correctly
- [ ] External resources open in new tab
- [ ] Partner links work
- [ ] Document downloads work

### Email & Phone Links
- [ ] `mailto:` links work
- [ ] `tel:` links work
- [ ] WhatsApp links functional

---

## 🔒 10. Security Testing

### Authentication & Authorization
- [ ] Admin routes protected
- [ ] Session management secure
- [ ] Password requirements enforced
- [ ] Failed login attempts handled
- [ ] Logout clears session

### Form Security
- [ ] CSRF protection (if applicable)
- [ ] XSS prevention
- [ ] SQL injection prevention
- [ ] File upload validation
- [ ] File type restrictions
- [ ] File size limits
- [ ] Input sanitization

### API Security
- [ ] API routes protected
- [ ] Rate limiting (if applicable)
- [ ] Error messages don't leak info
- [ ] CORS configured properly

### Data Privacy
- [ ] No sensitive data in URLs
- [ ] No API keys in client code
- [ ] Environment variables secure
- [ ] User data handled properly

---

## 📧 11. Email Testing

### Contact Form Emails
- [ ] Recipient receives email
- [ ] Sender receives confirmation
- [ ] Email formatting correct
- [ ] All form data included
- [ ] No spam folder issues

### Newsletter Emails
- [ ] Subscription confirmation sent
- [ ] Welcome email sent (if configured)
- [ ] Unsubscribe link works
- [ ] Email preferences work

### Job Application Emails
- [ ] Admin receives notification
- [ ] Applicant receives confirmation
- [ ] Attachments included
- [ ] Email formatting good

---

## 🐛 12. Bug Tracking

### Critical Bugs (P0)
Issue | Page | Description | Status
------|------|-------------|-------
      |      |             |

### High Priority Bugs (P1)
Issue | Page | Description | Status
------|------|-------------|-------
      |      |             |

### Medium Priority Bugs (P2)
Issue | Page | Description | Status
------|------|-------------|-------
      |      |             |

### Low Priority Bugs (P3)
Issue | Page | Description | Status
------|------|-------------|-------
      |      |             |

### UI/UX Polish Items
Issue | Page | Description | Status
------|------|-------------|-------
      |      |             |

---

## ✅ 13. Final Verification

### Build & Deploy
- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` succeeds
- [ ] Build output verified
- [ ] No console errors in production build
- [ ] All 88 pages generated
- [ ] Bundle sizes acceptable

### Content Verification
- [ ] All placeholder content identified
- [ ] Real content where available
- [ ] Images optimized
- [ ] Documents accessible
- [ ] No Lorem Ipsum text

### Documentation
- [ ] README updated
- [ ] Environment variables documented
- [ ] Admin guide available
- [ ] Content update procedures documented

---

## 📊 Test Summary

**Total Tests:** ~500+  
**Tests Passed:** _____  
**Tests Failed:** _____  
**Tests Skipped:** _____  
**Critical Issues:** _____  
**High Issues:** _____  
**Medium Issues:** _____  
**Low Issues:** _____  

**Overall Status:** ⚪ Not Started / 🟡 In Progress / 🟢 Passed / 🔴 Failed

**QA Sign-off:** _____________________ Date: _____

**Ready for Production:** ☐ Yes ☐ No ☐ With Caveats

**Notes:**
_________________________________________________________________________
_________________________________________________________________________
_________________________________________________________________________

---

## 📝 Testing Notes & Observations

### Performance Notes
- Largest bundle: 566 kB (projects page with map)
- Average First Load JS: ~110 kB
- All pages < 200 kB first load (excellent)

### Browser Compatibility Notes
- Pre-existing warning: Image alt text (lucide-react icon - false positive)
- Safari testing requires actual Mac/iOS device

### Accessibility Notes
- Keyboard navigation generally good
- Screen reader testing requires dedicated time
- Color contrast meets WCAG AA standards

### SEO Notes
- All meta tags present
- Structured data implemented
- Sitemap includes 88 pages
- Robots.txt configured

---

**End of QA Checklist**
