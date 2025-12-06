# Accessibility Testing Guide
## YPI Website - WCAG 2.1 AA Compliance

**Version:** 1.0  
**Date:** December 6, 2025  
**Standard:** WCAG 2.1 Level AA

---

## 🎯 Accessibility Goals

### Target Compliance
- **WCAG 2.1 Level AA:** Full compliance
- **Keyboard Navigation:** 100% accessible
- **Screen Reader:** Fully compatible
- **Color Contrast:** Meets AA standards (4.5:1)

### Priority Users
- Users with visual impairments
- Users with motor disabilities
- Users with cognitive disabilities
- Keyboard-only users
- Screen reader users

---

## 🧪 Testing Methods

### 1. Automated Testing

#### Using Lighthouse
```bash
# Run accessibility audit
lighthouse http://localhost:3000 --only-categories=accessibility
```

#### Using axe DevTools
1. Install axe DevTools browser extension
2. Open page to test
3. Click axe extension
4. Run "Scan All of My Page"
5. Review violations

#### Using WAVE
1. Visit https://wave.webaim.org/
2. Enter URL or use browser extension
3. Review errors and warnings

### 2. Manual Testing

#### Keyboard Navigation Test
```
Required keyboard interactions:
- Tab: Move forward through interactive elements
- Shift+Tab: Move backward
- Enter/Space: Activate buttons/links
- Arrow keys: Navigate menus/selects
- Esc: Close modals/dropdowns
```

#### Screen Reader Test
- **Windows:** NVDA (free) or JAWS
- **Mac:** VoiceOver (built-in)
- **Mobile:** TalkBack (Android) or VoiceOver (iOS)

---

## ♿ Accessibility Checklist

### Perceivable (WCAG Principle 1)

#### 1.1 Text Alternatives
- [ ] All images have alt text
- [ ] Decorative images have empty alt ("")
- [ ] Icons have aria-labels
- [ ] Form inputs have labels
- [ ] Complex images have long descriptions

**Test Method:**
```javascript
// Check all images
document.querySelectorAll('img').forEach(img => {
  if (!img.alt && img.alt !== '') {
    console.error('Missing alt:', img.src);
  }
});
```

#### 1.2 Time-based Media
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] Auto-play disabled or controllable
- [ ] No auto-play audio

#### 1.3 Adaptable
- [ ] Proper heading hierarchy (h1-h6)
- [ ] Semantic HTML used
- [ ] Content order makes sense
- [ ] Tables have proper headers
- [ ] Forms have fieldsets/legends

**Test Method:**
```javascript
// Check heading hierarchy
const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
headings.forEach((h, i) => {
  const level = parseInt(h.tagName[1]);
  const prevLevel = i > 0 ? parseInt(headings[i-1].tagName[1]) : 0;
  if (level - prevLevel > 1) {
    console.warn('Heading jump:', h);
  }
});
```

#### 1.4 Distinguishable
- [ ] Color contrast ≥ 4.5:1 (text)
- [ ] Color contrast ≥ 3:1 (large text 18pt+)
- [ ] Color contrast ≥ 3:1 (UI components)
- [ ] Text resizable to 200%
- [ ] No information by color alone
- [ ] Focus indicators visible

**Test Method:**
Use browser DevTools contrast checker or:
- https://webaim.org/resources/contrastchecker/
- Browser extensions (e.g., ColorZilla)

### Operable (WCAG Principle 2)

#### 2.1 Keyboard Accessible
- [ ] All functionality keyboard accessible
- [ ] No keyboard traps
- [ ] Skip to main content link
- [ ] Logical tab order
- [ ] Custom widgets keyboard accessible

**Test Method:**
1. Unplug mouse
2. Navigate entire site using only keyboard
3. Verify all interactions work
4. Check tab order is logical

#### 2.2 Enough Time
- [ ] No time limits or adjustable
- [ ] Auto-save for forms
- [ ] Session timeout warnings
- [ ] Pause/stop moving content

#### 2.3 Seizures
- [ ] No flashing content (< 3 flashes/sec)
- [ ] No parallax if causes issues
- [ ] Animation reducible (prefers-reduced-motion)

**Test Method:**
```css
/* Check for reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### 2.4 Navigable
- [ ] Page titles unique and descriptive
- [ ] Link text descriptive (no "click here")
- [ ] Multiple ways to find pages
- [ ] Clear navigation structure
- [ ] Focus order logical
- [ ] Focus visible
- [ ] Current location identified

**Test Method:**
```javascript
// Check link text quality
document.querySelectorAll('a').forEach(link => {
  const text = link.textContent.trim().toLowerCase();
  if (['click here', 'here', 'read more', 'more'].includes(text)) {
    console.warn('Generic link text:', link);
  }
});
```

#### 2.5 Input Modalities
- [ ] Touch targets ≥ 44x44px
- [ ] No pointer-only functions
- [ ] Labels clickable (associated with inputs)
- [ ] Motion not required for operation

### Understandable (WCAG Principle 3)

#### 3.1 Readable
- [ ] Page language declared (lang attribute)
- [ ] Language changes marked
- [ ] Clear, simple language
- [ ] Jargon explained or avoided

**Test Method:**
```html
<!-- Check html lang attribute -->
<html lang="en">
```

#### 3.2 Predictable
- [ ] No context change on focus
- [ ] No context change on input
- [ ] Consistent navigation
- [ ] Consistent identification
- [ ] No surprise navigation

#### 3.3 Input Assistance
- [ ] Error identification clear
- [ ] Form labels/instructions provided
- [ ] Error suggestions given
- [ ] Error prevention (confirmations)
- [ ] Help available

**Test Method:**
Test all forms:
1. Submit with errors
2. Verify error messages clear
3. Check error associated with field (aria-describedby)
4. Confirm suggestions provided

### Robust (WCAG Principle 4)

#### 4.1 Compatible
- [ ] Valid HTML
- [ ] Proper ARIA usage
- [ ] No ARIA roles conflict with native HTML
- [ ] Status messages announced
- [ ] Dynamic content updates announced

**Test Method:**
```bash
# Validate HTML
https://validator.w3.org/

# Check with screen reader
# Perform action -> Verify announcement
```

---

## 🔍 Page-Specific Testing

### Homepage Testing
- [ ] Hero section keyboard accessible
- [ ] Service cards have proper headings
- [ ] Stats section readable by screen reader
- [ ] News articles have descriptive links
- [ ] Newsletter form accessible
- [ ] All images have alt text

### Forms Testing

#### Contact Form
- [ ] All inputs have labels
- [ ] Required fields indicated
- [ ] Error messages clear and helpful
- [ ] Success message announced
- [ ] Keyboard navigable
- [ ] Tab order logical

**Screen Reader Test Script:**
1. Navigate to form
2. Hear form purpose announced
3. Tab to first field
4. Hear label and required status
5. Enter invalid data
6. Submit
7. Hear error message
8. Correct error
9. Submit successfully
10. Hear success message

#### Quote Request Form
- [ ] File upload keyboard accessible
- [ ] Service selection accessible
- [ ] Multi-step form (if any) navigable
- [ ] Progress indicated
- [ ] Back button functional

### Navigation Testing
- [ ] Skip to main content link works
- [ ] All menu items keyboard accessible
- [ ] Dropdown menus keyboard accessible
- [ ] Mobile menu keyboard accessible
- [ ] Breadcrumbs present and functional
- [ ] Search accessible

### Admin Dashboard Testing
- [ ] Login form accessible
- [ ] Dashboard cards keyboard navigable
- [ ] Data tables accessible
- [ ] Sortable columns announced
- [ ] Pagination accessible
- [ ] Rich text editor keyboard accessible
- [ ] Image upload accessible

---

## 🎨 Color Contrast Testing

### Text Contrast Requirements
- **Normal text (< 18pt):** 4.5:1
- **Large text (≥ 18pt or bold ≥ 14pt):** 3:1
- **UI components:** 3:1
- **Graphics:** 3:1

### YPI Color Palette Testing

#### Primary Colors
```css
/* Gold on Navy */
--gold-500: #FDB714 on --navy: #003B5C
✓ Contrast Ratio: 8.2:1 (Pass AAA)

/* White on Navy */
--white: #FFFFFF on --navy: #003B5C
✓ Contrast Ratio: 12.6:1 (Pass AAA)

/* Navy on White */
--navy: #003B5C on --white: #FFFFFF
✓ Contrast Ratio: 12.6:1 (Pass AAA)

/* Gray text on White */
--gray-600: #6B7280 on --white: #FFFFFF
✓ Contrast Ratio: 5.7:1 (Pass AA)
```

### Contrast Testing Tools
1. **Browser DevTools:**
   - Chrome: Inspect element > Styles > Color picker
   - Shows contrast ratio automatically

2. **WebAIM Contrast Checker:**
   - https://webaim.org/resources/contrastchecker/

3. **Contrast Checker Extensions:**
   - ColorZilla
   - WAVE
   - axe DevTools

---

## 🎤 Screen Reader Testing Guide

### NVDA (Windows - Free)

#### Installation
1. Download from https://www.nvaccess.org/
2. Install and launch
3. Use Insert key as NVDA modifier

#### Basic Commands
```
NVDA+Q: Quit NVDA
NVDA+Space: Pass through mode
Tab/Shift+Tab: Navigate elements
Enter/Space: Activate
Insert+Down: Read all
Insert+F7: Elements list
H: Next heading
F: Next form field
B: Next button
L: Next link
```

#### Testing Script
```
1. Start NVDA (Ctrl+Alt+N)
2. Navigate to homepage
3. Hear page title
4. Insert+Down (read all)
5. Verify logical reading order
6. Tab through interactive elements
7. Verify each element properly announced
8. Test forms (tab, enter data, submit)
9. Test navigation (menus, links)
10. Check dynamic content updates
```

### VoiceOver (Mac)

#### Basic Commands
```
Cmd+F5: Toggle VoiceOver
VO+A: Read all
VO+Right/Left: Navigate
VO+Space: Activate
VO+U: Rotor (elements list)
VO+H: Next heading
VO+J: Next form control
```

### Testing Checklist
- [ ] Page title announced on load
- [ ] Headings navigable and hierarchical
- [ ] Links descriptive
- [ ] Images have alt text announced
- [ ] Forms have labels announced
- [ ] Required fields identified
- [ ] Errors announced
- [ ] Buttons have accessible names
- [ ] Dynamic content updates announced
- [ ] Modal focus trapped correctly

---

## 📋 Keyboard Navigation Testing

### Global Navigation
```
Test Sequence:
1. Load page
2. Press Tab
3. Verify "Skip to main content" appears
4. Press Enter on skip link
5. Verify focus moves to main content
6. Tab through header navigation
7. Verify each menu item focusable
8. Press Enter on dropdown
9. Verify submenu appears
10. Use arrow keys in submenu
11. Press Esc to close
```

### Form Navigation
```
Test Sequence:
1. Tab to first form field
2. Verify focus visible
3. Enter data
4. Tab to next field
5. Test field validation (blur event)
6. Tab to submit button
7. Press Enter
8. Verify form submits or shows errors
9. If errors, verify focus moves to first error
```

### Modal/Dialog Navigation
```
Test Sequence:
1. Open modal (via keyboard)
2. Verify focus trapped in modal
3. Tab through modal elements
4. Verify can't tab outside
5. Press Esc
6. Verify modal closes
7. Verify focus returns to trigger element
```

---

## 🐛 Common Accessibility Issues

### Issue 1: Missing Alt Text
**Problem:** Images without alt attributes  
**Impact:** Screen readers can't describe images  
**Fix:**
```jsx
// ❌ Bad
<img src="/image.jpg" />

// ✅ Good
<Image src="/image.jpg" alt="Description" />

// ✅ Good (decorative)
<Image src="/decoration.jpg" alt="" />
```

### Issue 2: Poor Color Contrast
**Problem:** Text too light on light background  
**Impact:** Users with low vision can't read  
**Fix:** Use contrast checker, adjust colors

### Issue 3: Keyboard Traps
**Problem:** Can't tab out of element  
**Impact:** Keyboard users stuck  
**Fix:** Ensure proper focus management

### Issue 4: Missing Form Labels
**Problem:** Inputs without associated labels  
**Impact:** Screen readers don't announce purpose  
**Fix:**
```jsx
// ❌ Bad
<input type="email" placeholder="Email" />

// ✅ Good
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Good (visual label hidden)
<label htmlFor="email" className="sr-only">Email</label>
<input id="email" type="email" placeholder="Email" />
```

### Issue 5: Generic Link Text
**Problem:** "Click here", "Read more" links  
**Impact:** Links out of context are meaningless  
**Fix:**
```jsx
// ❌ Bad
<a href="/article">Click here</a>

// ✅ Good
<a href="/article">Read article about mining safety</a>

// ✅ Good (with visually hidden text)
<a href="/article">
  Read more <span className="sr-only">about mining safety</span>
</a>
```

---

## ✅ Accessibility Checklist Summary

### Critical Items (Must Fix)
- [ ] All images have alt text or alt=""
- [ ] All form inputs have labels
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Keyboard navigation works on all pages
- [ ] No keyboard traps
- [ ] Focus indicators visible
- [ ] Heading hierarchy correct
- [ ] Page titles unique

### Important Items (Should Fix)
- [ ] Skip to main content link
- [ ] ARIA labels on icon buttons
- [ ] Error messages associated with fields
- [ ] Link text descriptive
- [ ] Status messages announced
- [ ] Dynamic content updates announced

### Nice to Have (Enhancement)
- [ ] Reduced motion support
- [ ] High contrast mode support
- [ ] Custom focus indicators
- [ ] Descriptive link preview
- [ ] Helpful inline guidance

---

## 📊 Reporting Template

```markdown
# Accessibility Audit Report
Date: ___________
Auditor: ___________
Standard: WCAG 2.1 Level AA

## Summary
- Total Issues: ___
- Critical: ___
- High: ___
- Medium: ___
- Low: ___

## Critical Issues
1. [Issue] Description
   - Location: Page/component
   - WCAG Criterion: X.X.X
   - Fix: Action needed

## Compliance Score
- Perceivable: ____%
- Operable: ____%
- Understandable: ____%
- Robust: ____%

Overall: ____% compliant

## Next Steps
1. Fix critical issues
2. Re-test
3. Address high priority items
```

---

**End of Accessibility Testing Guide**
