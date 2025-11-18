# Design Guidelines: Pratyush Portfolio

## Design Approach
**Aesthetic Direction:** Futuristic glassmorphism with neon accents, drawing inspiration from Apple's design language combined with cyberpunk aesthetics. Premium, immersive experience prioritizing visual storytelling over traditional portfolio patterns.

## Core Visual Identity

### Glassmorphism Treatment
- Frosted glass panels with 20-40px blur radius for all major content containers
- Layered depth using multiple glass panels with varying opacity (10-30%)
- Soft edge glow effects (2-4px) around glass containers
- Semi-transparent backgrounds allowing content bleed-through for depth

### Neon Glow System
- Subtle accent glows on interactive elements (buttons, cards, borders)
- Soft shadow gradients creating atmospheric lighting effects
- Glow intensity: 8-16px blur radius, 60-80% opacity
- Strategic placement on CTAs, section dividers, and hover states

### Depth & Layering
- Multi-layer approach: background elements → glass panels → foreground content
- Shadow gradients with 3-4 layer depth (use multiple box-shadows)
- Parallax depth zones: background (0.3x speed), mid-ground (0.6x speed), foreground (1x speed)
- Z-index hierarchy clearly defined across all sections

## Typography System

**Font Selection:** Use 2 Google Fonts:
- **Headlines/Display:** Outfit or Space Grotesk (weights: 300, 500, 700)
- **Body/UI:** Inter or DM Sans (weights: 400, 500, 600)

**Hierarchy:**
- Hero Headlines: 3.5-4rem desktop, 2.5rem mobile
- Section Titles: 2.5-3rem desktop, 1.75rem mobile  
- Subheadings: 1.5-1.75rem desktop, 1.25rem mobile
- Body Text: 1rem desktop, 0.95rem mobile
- Line height: 1.6 for body, 1.2 for headlines

## Layout & Spacing

**Spacing Scale:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-24 to py-32 desktop, py-16 to py-20 mobile
- Content max-width: max-w-7xl with px-6 to px-8 horizontal padding
- Card/component spacing: gap-8 to gap-12 desktop, gap-6 mobile
- Comfortable breathing room between all sections

## Page Structures

### Home Page
**Hero Section:** Full viewport (100vh) immersive introduction with parallax background layers, large typography display, frosted glass card containing name/title/brief intro, floating CTA buttons with magnetic hover effect. Glass panel positioned slightly off-center for visual interest.

**Featured Work Preview:** 3-column grid desktop (2-col tablet, 1-col mobile) showcasing 3-6 top projects with glass card containers, hover-triggered neon glow expansion, project thumbnails with soft blur overlay.

**Skills/Capabilities Highlight:** Staggered 2-column layout with glass panels containing skill categories, animated reveal on scroll, subtle neon accent lines.

**CTA Section:** Centered glass panel with strong call-to-action, magnetic button, soft glow effects.

### About Page
**Introduction Panel:** Large hero-style section with Pratyush's photo (circular or rounded glass frame with neon glow border), biography text in frosted glass container, parallax background.

**Journey Timeline:** Vertical timeline with glass nodes, connecting lines with neon glow, alternating left-right content panels, scroll-triggered reveal animations.

**Philosophy/Values:** 3-4 glass cards in grid layout, each highlighting core principles, icon or minimal graphic, soft depth shadows.

### Projects Page
**Project Grid:** Masonry or 2-3 column grid with varied card heights, each project in glass container with featured image, hover reveals project details with blur transition, neon glow border activation on hover.

**Project Details (expandable or linked):** Full-width glass panel with project showcase images, description, tech stack, role details, outcome/results.

**Filter/Category System:** Horizontal glass pill navigation at top, magnetic hover effect, active state with neon glow.

### Services Page
**Services Overview:** Hero section with value proposition in large glass panel.

**Service Cards:** 2-3 column layout with detailed service offerings, each in frosted glass container with icon/graphic, description, magnetic CTA button, hover-triggered depth lift effect.

**Process Timeline:** Horizontal or vertical flow showing workflow stages, glass nodes connected by glowing lines, step descriptions in glass containers.

**Testimonials (if applicable):** Carousel or grid of client quotes in glass panels with soft avatars.

### Contact Page
**Contact Form:** Centered glass container with frosted input fields (glass-style inputs with subtle borders), floating labels, magnetic submit button with neon glow.

**Contact Info:** Side panel or separate section with email, social links in glass containers, each with hover glow effect.

**Availability/Location:** Small glass panels showing timezone, response time, or location info.

## Component Library

### Navigation
**Desktop:** Horizontal glass navbar fixed at top with backdrop blur, logo left, nav links center/right, smooth underline/glow on active state, minimal height (h-16 to h-20).

**Mobile:** Hamburger menu triggering full-screen glass overlay navigation with large link typography, smooth slide-in animation, backdrop blur.

### Buttons
- Primary: Frosted glass with neon glow border, magnetic hover (elements subtly pull toward cursor), smooth scale transition
- Secondary: Outline style with glass fill on hover
- All buttons: rounded-xl to rounded-2xl, py-3 to py-4, px-6 to px-8

### Cards
- Frosted glass containers with rounded-2xl to rounded-3xl corners
- Hover states: lift effect (translateY -4px), enhanced glow, smooth transitions
- Padding: p-6 to p-8
- All project/service cards include thumbnail/icon, title, description, subtle CTA

### Input Fields
- Glass-style with subtle border (1px with 20% opacity)
- Floating labels that shrink on focus
- Focus state: enhanced neon glow border
- Rounded-xl corners, py-3 to py-4 padding

### Icons
Use Heroicons (outline style) via CDN for UI elements, navigation, and decorative purposes.

## Animation System

### Parallax Scrolling
- Background layers move at 0.3-0.5x scroll speed
- Mid-ground elements at 0.6-0.8x
- Foreground content at 1x
- Apply to hero sections and major dividers

### Micro-Interactions
- Magnetic buttons: cursor proximity detection (100-150px radius), smooth element pull toward cursor
- Hover scale: 1.02-1.05 for cards, 1.05-1.08 for buttons
- Glow intensity increase on hover (20-40% stronger)
- Smooth transitions: 300-400ms ease-out

### Scroll Animations
- Section reveal: fade-in with translateY (20-40px upward), stagger children elements
- 3D depth: subtle rotateX/Y on scroll for glass panels (2-4 degrees max)
- Progress indicators: subtle neon line tracking scroll progress

### Transitions
- Motion blur: brief blur effect during page/section transitions (100-200ms)
- Smooth page loads: fade-in with slight scale (0.98 to 1)
- All animations: GPU-accelerated (transform, opacity only)

## Mobile Optimization

### Responsive Adjustments
- Single column layouts below md breakpoint
- Reduce parallax intensity by 50% on mobile
- Simplify animations: remove magnetic effects, reduce 3D transforms
- Larger touch targets: min-h-12 for all interactive elements
- Increased text sizes and spacing for readability

### Performance
- Lazy load images and heavy effects
- Reduce blur radius and glow effects on mobile (maintain aesthetic with lighter implementation)
- Disable complex animations for devices with reduced motion preference
- Optimize glass blur performance with will-change property

## Images

**Hero Images:** 
- Home page: Abstract gradient/tech-inspired background with particle effects or geometric patterns (full viewport background)
- About page: Professional photo of Pratyush in circular glass frame with neon border accent
- Projects page: Featured project screenshots/mockups in glass containers with soft shadows

**Image Treatment:** All images should have soft rounded corners (rounded-xl to rounded-2xl), optional subtle neon glow borders, and be displayed through frosted glass overlays where appropriate.

## Footer
Glass container spanning full width with frosted backdrop, includes: social links with icons, email contact, copyright info, quick navigation links, all with subtle neon hover effects. py-12 to py-16 padding.