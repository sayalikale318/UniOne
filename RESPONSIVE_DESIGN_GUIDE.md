# UniOne Platform - Responsive Design Guide

## Overview
This document outlines the complete responsive design implementation for the UniOne landing page and navbar across all major screen sizes from 320px to 2560px.

---

## Breakpoints & Screen Sizes

### Mobile Devices (320px - 425px)
| Viewport | Common Device |
|----------|--------------|
| **320px × 446px** | iPhone SE, iPhone 6/7/8 (compact) |
| **375px × 446px** | iPhone X, 11, 12, 13 (standard) |
| **425px × 446px** | Larger mobile devices |

**Design Approach:** Vertical stacking, single-column layout, maximum padding reduction

---

### Tablet Devices (768px - 1024px)
| Viewport | Common Device |
|----------|--------------|
| **768px × 893px** | iPad Mini, iPad (portrait) |
| **1024px × 1063px** | iPad Pro (portrait) |

**Design Approach:** 2-column grids for features, optimized touch targets

---

### Desktop Devices (1440px - 2560px)
| Viewport | Common Device |
|----------|--------------|
| **1440px × 1489px** | Standard Full HD (1440p) |
| **2560px × 2978px** | 4K Ultra HD (2560p) |

**Design Approach:** Full 2-column layouts, expanded spacing, maximum available real estate

---

## Navbar Responsiveness

### 320px - 375px (Small Mobile)
```css
Height: 52-56px
Logo Height: 55-60px
Font Size: 16-18px
Hamburger Menu: Always visible
CTA Buttons: Hidden (icon-only)
Padding: 0 8px (compact)
```
**Features:**
- Minimal branding (small wordmark)
- Fixed position with reduced height
- Touch-friendly hamburger button
- Mobile menu collapses all navigation

### 425px - 640px (Large Mobile)
```css
Height: 60-65px
Logo Height: 65-70px
Font Size: 20-24px
Hamburger Menu: Visible
CTA Buttons: Icon only on mobile
Padding: 0 12px
```

### 768px - 1024px (Tablet)
```css
Height: 70-75px
Logo Height: 80-90px
Font Size: 28-32px
Hamburger Menu: Still visible
Navigation Links: Hidden (added back on larger tablets)
Padding: 0 16-20px
```

### 1440px+ (Desktop & 4K)
```css
Height: 75-100px (100px on 4K)
Logo Height: 90-120px
Font Size: 32-48px
Hamburger Menu: Hidden
Navigation Links: Fully visible
Desktop Menu: All items shown
Padding: 0 20-50px
```

**Mobile Navbar Buttons:**
- Login: Secondary style (outline)
- Register: Primary style (gradient)
- Both: Full-width with proper spacing

---

## Hero Section Responsiveness

### 320px (iPhone SE)
```css
Padding: 16px 4px 12px
Title: 28-48px
Subtitle: 11px
Feature Items: Single line wrapping, 10px font
CTA Buttons: 100% width, stacked vertically
Hero Image: 200px
Gap: 4-6px between items
```
**Layout:** Vertical stack with minimal spacing

### 375px (iPhone X/11/12)
```css
Padding: 20px 6px 16px
Title: 32-56px
Subtitle: 12px
Feature Items: 11px
CTA Buttons: 90% width
Hero Image: 240px
```

### 425px (Larger Mobile)
```css
Padding: 24px 8px 20px
Title: 36-64px
Subtitle: 13px
Feature Items: 12px
CTA Buttons: Full width, margin padding
Hero Image: 280px
```

### 768px (Tablet Portrait)
```css
Padding: 40px 12px 28px
Title: 48-84px
Subtitle: 14-16px
Feature Items: Horizontal layout, 14px font
CTA Buttons: Horizontal, side-by-side
Hero Image: 380px
Grid: Single column layout
Gap: 40px between elements
```

### 1024px (Tablet Landscape)
```css
Padding: 48px 16px 32px
Title: 56-96px
2-Column Grid: Hero content + image side-by-side
Hero Image: 460px
Gap: 56px between columns
```

### 1440px (Full HD Desktop)
```css
Padding: 60px 40px
Title: 64-120px
Feature Items: Horizontal layout with icons
CTA Buttons: Large, spacious
Hero Image: 540px
Gap: Full spacing, premium feel
```

### 2560px (4K)
```css
Padding: 80px 60px
Title: 80-140px
Subtitle: 22px
Feature Items: 16px with proper spacing
CTA Buttons: 18px font, 18px × 48px padding
Hero Image: 680px
Full container width utilization
```

---

## ScrollBanner Responsiveness

### 320px - 375px
```css
Card Width: 120-130px
Card Height: 160-175px
Label Font: 9-10px
Emoji Size: 16-18px
Fade Width: 24-30px
Padding: 0 10-12px
Scrollable content optimized for thumb navigation
```

### 425px - 640px
```css
Card Width: 140-150px
Card Height: 185-200px
Label Font: 10.5-11px
Emoji Size: 20px
Fade Width: 36-50px
Section Padding: 32px 0 40px
```

### 768px
```css
Card Width: 160px
Card Height: 210px
Label Font: 11.5px
Emoji Size: 24px
Fade Width: 60px
```

### 1024px+
```css
Card Width: 200px
Card Height: 260px
Label Font: 13px
Emoji Size: 28px
Fade Width: 120px
Padding: 40px 0 48px
Desktop-optimized spacing
```

### 1440px+
```css
Card Width: 220px
Card Height: 300px
Label Font: 15px
Emoji Size: 36px
Premium card sizes
Full scrolling experience
```

### 2560px
```css
Card Width: 280px
Card Height: 380px
Label Font: 18px
Emoji Size: 48px
Ultra-premium card sizes
Maximum visual impact
```

---

## Why Choose Section

### Small Mobile (320px - 425px)
```css
Padding: 32-48px 0
Title: 18-20px
Grid: 1 column
Card Padding: 14-16px
Icon Size: 36-40px
Text Size: 11-13px
```

### Tablet (768px - 1024px)
```css
Padding: 56-80px 0
Title: 28-36px
Grid: 2 columns
Card Padding: 22px 20px
Icon Size: 48px
Text Size: 14-15px
```

### Desktop (1440px+)
```css
Padding: 120px 0 128px
Title: 48-52px
Grid: 3 columns
Card Padding: 28-30px
Icon Size: 56px
Text Size: 16-18px
Theme scaling with viewport
```

### 4K (2560px)
```css
Padding: 160px 0 176px
Title: 64px
Grid: 3 columns (wider)
Card Padding: 40-44px
Icon Size: 80px
Text Size: 16-22px
```

---

## HomepagePlanning Section

### Mobile (320px - 425px)
```css
Section Padding: 32-48px 12px
Title: 22-24px
Grid: 1 column
Card Padding: 20-22px
Icon Size: 48px
```

### Tablet (768px)
```css
Section Padding: 64px 16px
Title: 36px
Grid: 2 columns
Card Padding: 24px
Icon Size: 52px
```

### Desktop (1440px+)
```css
Section Padding: 120px 40px
Title: 48-52px
Grid: 3 columns
Card Padding: 28-32px
Icon Size: 60px
```

### 4K (2560px)
```css
Section Padding: 160px 60px
Title: 64px
Grid: 3 columns (wider)
Card Padding: 44px 40px
Icon Size: 72px
Text: 16-22px
```

---

## Common Layout Rules

### Padding Reductions
| Viewport | Horizontal Padding | Vertical Padding |
|----------|-------------------|-----------------|
| 320px | 8px | 16px |
| 375px | 10px | 20px |
| 425px | 12px | 24px |
| 640px | 14px | 32px |
| 768px | 16px | 40px |
| 1024px | 20px | 48px |
| 1440px | 40px | 60px |
| 2560px | 60px | 80px |

### Font Size Scaling
- Use `clamp()` for responsive font sizing
- Base mobile: 11-13px for body text
- Base desktop: 16-18px
- Headings scale from 28px (mobile) to 64px (4K)

### Grid Configurations
| Viewport | Feature Grid | Why Choose | Planning |
|----------|-------------|-----------|----------|
| Mobile | 1 column | 1 column | 1 column |
| 540px | 1 column | 1 column | 1 column |
| Tablet | 2 columns | 2 columns | 2 columns |
| Desktop | 3 columns | 3 columns | 3 columns |
| 4K | 3 columns | 3 columns | 3 columns |

---

## Important CSS Breakpoints

```css
/* Mobile First Breakpoints */
320px   - Ultra-compact mobile
375px   - Standard mobile
425px   - Large mobile
480px   - Mobile/Tablet boundary
540px   - Tablet portrait
640px   - Large mobile resolution
768px   - Tablet standard
900px   - Between tablet and desktop
1024px  - Tablet landscape
1100px  - Wide tablet
1440px  - Full HD desktop
2560px  - 4K ultra-wide
```

---

## Testing Checklist

### Mobile Testing (320px-425px)
- [ ] Navbar compresses properly
- [ ] Hamburger menu works
- [ ] Hero section stacks vertically
- [ ] CTA buttons are full-width
- [ ] ScrollBanner scrolls smoothly
- [ ] Text is readable (13px+)
- [ ] Images scale proportionally
- [ ] Touch targets are 44px+

### Tablet Testing (768px-1024px)
- [ ] Navigation shows appropriately
- [ ] 2-column grid layouts work
- [ ] Hero shows side-by-side content
- [ ] Spacing is balanced
- [ ] Cards are properly sized
- [ ] No horizontal scroll

### Desktop Testing (1440px+)
- [ ] Full navigation visible
- [ ] 3-column grids optimal
- [ ] Spacing is premium
- [ ] Typography is impactful
- [ ] Hover states work

### 4K Testing (2560px)
- [ ] No excessive whitespace
- [ ] Content properly scaled
- [ ] Large fonts readable
- [ ] Images sharp and clear
- [ ] Full viewport utilized

---

## Mobile Menu Behavior

### Login Button Styling
- **Small Mobile:** Full-width, secondary style (outline)
- **Tablet+:** Icon-only or hidden
- **Desktop:** Full button with text

### Register Button Styling
- **Small Mobile:** Full-width, primary style (gradient)
- **Tablet+:** Icon-only or hidden
- **Desktop:** Full button with text

### Menu Structure
```
Navbar
├── Brand (logo + wordmark)
├── Nav Links (hidden < 1024px)
├── Theme Toggle
└── Mobile Menu (< 1024px)
    ├── Links List
    ├── Login Button
    └── Register Button
```

---

## Performance Considerations

1. **Image Loading:** Use responsive image sizes
2. **Font Loading:** Preload Syne and DM Sans
3. **CSS:** Minified to 10.10 kB gzipped
4. **Media Queries:** Mobile-first approach
5. **Touch Targets:** Minimum 44px × 44px

---

## Accessibility

- [ ] Text contrast ratio ≥ 4.5:1
- [ ] Touch targets ≥ 44px
- [ ] Keyboard navigation works
- [ ] Color not only info carrier
- [ ] Focus indicators visible
- [ ] Semantic HTML used
- [ ] ARIA labels where needed

---

## Future Enhancements

1. Add support for landscape mobile orientations
2. Implement progressive image enhancement
3. Add CSS Grid support for older browsers
4. Optimize animations for prefers-reduced-motion
5. Add print media queries
6. Test with screen readers

---

## Resources

- CSS Breakpoints: Used mobile-first approach
- Font Sizes: `clamp()` for fluid typography
- Spacing: Proportional scaling system
- Colors: CSS custom properties (variables)
- Icons: SVG-based Icon component

---

**Last Updated:** March 2026
**CSS File Size:** 54.81 kB (10.10 kB gzipped)
**Total Breakpoints:** 13 major breakpoints
