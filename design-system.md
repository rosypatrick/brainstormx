# BrAInstormX – Design System

> Version 1.1 – April 2025  
> Updated by: Founder / Lead UI Dev

---

## Color Palette

| Color Name     | Hex        | Usage                          |
|----------------|------------|---------------------------------|
| Black          | `#121212`  | Background, header, footer     |
| Dark Gray      | `#1E1E1E`  | Secondary backgrounds           |
| Medium Gray    | `#2D2D2D`  | Containers, inputs, cards       |
| Light Gray     | `#F0F0F0`  | Border contrast (light theme alt) |
| Red            | `#FF3333`  | CTA accents, buttons, borders  |
| Dark Red       | `#CC0000`  | Hover states, active buttons   |
| Light Red      | `#FF6666`  | Button gradients, glow effects |
| White          | `#FFFFFF`  | Headings, text on dark         |

---

## Typography

**Primary Font:**  
`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`

**Code Font:**
`'Fira Code', monospace`

| Element         | Font Weight | Size         | Notes                      |
|------------------|--------------|--------------|-----------------------------|
| H1               | Bold         | 3.5rem       | Hero headline               |
| H2               | Semi-bold    | 2.5rem       | Section titles              |
| Paragraph (Body) | Regular      | 1.2rem       | Primary readable content    |
| CTA Button Text  | Semi-bold    | 1.2rem       | High contrast call-to-action |

---

## Layout Rules

- **Container width max:** 1200px  
- **Grid:** CSS Grid or Flexbox as needed  
- **Spacing scale:** 8px, 16px, 24px, 32px, 48px  
- **Border radius:** `4px` standard for cards/buttons

---

## Components Overview

### Buttons
- **Primary CTA:** Dark gradient background with red left border + hover expansion effect
- **Secondary CTA:** Red gradient background with subtle glow
- **Hover:** Subtle lift (`translateY(-2px)`), glow shadow

### Cards
- **Feature Cards & Testimonials:**
  - Medium gray bg
  - White text
  - Light shadow
  - Border highlight on hover (`border-color: var(--red)`)

### Code Animation Block
- Enhanced code block with line numbers and syntax highlighting
- Red pulsing border on the left side
- Monospaced font (Fira Code) for code content
- Styled like a terminal/IDE to attract dev users

### Icons
- **SVG Icons:** Professional vector icons instead of emojis
- **Icon Containers:** 
  - Square with rounded corners (4px)
  - Red gradient background
  - White fill for icon paths

---

## Responsiveness

- Mobile breakpoint: `max-width: 768px`
- Stack sections vertically
- Collapse nav menu (initial implementation: hide nav on mobile)
- Image containers shrink to 100%, maintain padding
- Buttons scale font size down slightly on smaller screens

---

## Brand Visual Principles

- **Dark mode native** — design begins from dark, not inverse of light
- **Red = energy + action** — used intentionally to guide motion & urgency
- **Gradients used sparingly** for accents & depth (no rainbow explosions)
- **Animation = clarity, not chaos** — only used where it helps convey flow or action
- **Professional aesthetics** — clean, modern, sophisticated design elements

---

## Component Reusability Rules

- All core UI components should be modular (`/components` folder)
- Each component must:
  - Accept props
  - Be style-isolated (SCSS, CSS modules, or inline)
  - Have a README or usage comment block
  - Prefer functional components with hooks (React v18+ ready)

---

## Design Updates

- **Version 1.0:** Initial design with emoji icons
- **Version 1.1:** Updated to professional design with SVG icons and enhanced layout
