# Styling Guide

## Overview

Shof TV uses **Tailwind CSS v4** for styling with a custom design system.

## Color Palette

### Primary Colors
```css
--primary: #f5c518;           /* Gold */
--primary-foreground: #0d0d0a; /* Dark */
```

### Secondary Colors
```css
--secondary: #1e1e16;         /* Dark Gray */
--secondary-foreground: #c0c0b0; /* Light Gray */
```

### Neutral Colors
```css
--background: #0d0d0a;        /* Very Dark */
--background-elevated: #161612; /* Dark */
--foreground: #f5f5f0;        /* Off White */
--card: #1a1a14;              /* Card Background */
--card-foreground: #e8e8e0;   /* Card Text */
```

### Semantic Colors
```css
--muted: #252520;             /* Muted Background */
--muted-foreground: #8a8a78;  /* Muted Text */
--accent: #f5c518;            /* Accent (Gold) */
--accent-foreground: #0d0d0a; /* Accent Text */
--border: #2a2a22;            /* Border */
--border-highlight: #3a3a2e;  /* Highlighted Border */
--ring: #f5c518;              /* Focus Ring */
--destructive: #dc2626;       /* Error/Delete */
--success: #22c55e;           /* Success */
```

## Typography

### Font Families
```css
--font-sans: "Inter", system-ui, sans-serif;
--font-display: "Playfair Display", Georgia, serif;
```

### Font Sizes
- `text-xs`: 12px
- `text-sm`: 14px
- `text-base`: 16px
- `text-lg`: 18px
- `text-xl`: 20px
- `text-2xl`: 24px
- `text-3xl`: 30px
- `text-4xl`: 36px

### Font Weights
- `font-light`: 300
- `font-normal`: 400
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700
- `font-extrabold`: 800
- `font-black`: 900

## Spacing

### Scale
```
0, 1px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px, 44px, 48px, 52px, 56px, 60px, 64px, 68px, 72px, 80px, 96px
```

### Usage
```html
<!-- Padding -->
<div class="p-4">Padding all sides</div>
<div class="px-4 py-2">Horizontal and vertical</div>

<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mx-auto">Center horizontally</div>
```

## Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

### Responsive Usage
```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## Components

### Buttons

#### Primary Button
```html
<button class="btn-primary">
  Click me
</button>
```

CSS:
```css
.btn-primary {
  @apply bg-primary text-primary-foreground font-semibold px-6 py-3 rounded transition-all duration-200;
}

.btn-primary:hover {
  @apply brightness-110;
  transform: translateY(-1px);
}
```

#### Outline Button
```html
<button class="btn-outline">
  Click me
</button>
```

CSS:
```css
.btn-outline {
  @apply border border-border text-foreground font-medium px-6 py-3 rounded transition-all duration-200;
}

.btn-outline:hover {
  @apply border-primary text-primary;
}
```

### Cards

#### Card Hover Effect
```html
<div class="card-hover">
  Card content
</div>
```

CSS:
```css
.card-hover {
  @apply transition-all duration-300;
}

.card-hover:hover {
  @apply border-border-highlight;
  transform: translateY(-2px);
}
```

### Sections

#### Section Padding
```html
<section class="section-padding">
  Section content
</section>
```

CSS:
```css
.section-padding {
  @apply px-4 py-16 md:px-8 lg:px-16 lg:py-24;
}
```

## Animations

### Predefined Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse-gold {
  0%, 100% {
    box-shadow: 0 0 16px rgba(245, 197, 24, 0.2);
  }
  50% {
    box-shadow: 0 0 32px rgba(245, 197, 24, 0.4);
  }
}
```

### Using Animations
```html
<div class="animate-fade-in-up">
  Fades in and moves up
</div>

<div class="animate-pulse-gold">
  Glowing gold effect
</div>
```

## Tailwind CSS Utilities

### Common Utilities

#### Display
```html
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>
<div class="hidden">Hidden element</div>
```

#### Flexbox
```html
<div class="flex justify-center items-center">
  Centered content
</div>

<div class="flex gap-4">
  Items with gap
</div>
```

#### Grid
```html
<div class="grid grid-cols-3 gap-4">
  Three column grid
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

#### Sizing
```html
<div class="w-full h-screen">Full width and height</div>
<div class="w-1/2 h-1/2">Half width and height</div>
<div class="max-w-4xl">Max width container</div>
```

#### Positioning
```html
<div class="absolute top-0 left-0">Absolute positioning</div>
<div class="fixed bottom-0 right-0">Fixed positioning</div>
<div class="relative">Relative positioning</div>
```

## Best Practices

### 1. Use Utility Classes
```html
<!-- Good -->
<div class="flex justify-center items-center p-4">
  Content
</div>

<!-- Avoid -->
<div style="display: flex; justify-content: center; align-items: center; padding: 16px;">
  Content
</div>
```

### 2. Extract Repeated Patterns
```css
/* Instead of repeating utilities, create a component class */
@layer components {
  .card {
    @apply bg-card text-card-foreground rounded-lg p-6 shadow-lg;
  }
}
```

### 3. Use CSS Variables
```css
/* Use CSS variables for consistency */
color: var(--primary);
background-color: var(--background);
border-color: var(--border);
```

### 4. Responsive Design
```html
<!-- Mobile-first approach -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### 5. Dark Mode Support
```html
<!-- Tailwind dark mode -->
<div class="bg-white dark:bg-slate-900">
  Content
</div>
```

## Customization

### Adding Custom Colors
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'custom-color': '#your-color',
    },
  },
}
```

### Adding Custom Fonts
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      'custom': ['Your Font', 'sans-serif'],
    },
  },
}
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind CSS Components](https://tailwindcss.com/docs/reusing-styles)
- [Tailwind CSS Plugins](https://tailwindcss.com/docs/plugins)

---

For more styling examples, check the component files in `src/app/components/`
