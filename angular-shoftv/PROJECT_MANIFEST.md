# ShofTV Angular Project - Complete File Manifest

## Configuration Files

### Root Config
- `package.json` - Dependencies (Angular 21, Tailwind CSS v4, TypeScript, PostCSS)
- `angular.json` - Angular project configuration with build/serve configs
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript configuration
- `tailwind.config.js` - Tailwind CSS v4 configuration with dark mode and custom colors
- `postcss.config.js` - PostCSS configuration for Tailwind

## Source Files Structure

### Entry Point
- `src/index.html` - HTML entry point with app-root selector
- `src/main.ts` - Bootstrap Angular application
- `src/styles.css` - Global CSS with Tailwind directives and design tokens

### App Configuration
- `src/app/app.component.ts` - Root component with router outlet and shared components
- `src/app/app.config.ts` - Application providers (Router, Animations)
- `src/app/app.routes.ts` - Route definitions for all pages

### Shared Components (Reusable)
- `src/app/shared/navbar/navbar.component.ts` - Sticky header with mobile menu
- `src/app/shared/footer/footer.component.ts` - Footer with links and social icons
- `src/app/shared/cookie-preferences/cookie-preferences.component.ts` - Cookie consent modal
- `src/app/shared/live-chat/live-chat.component.ts` - Live chat widget (bottom right)

### Page Components

#### Home Page
- `src/app/pages/home/home.component.ts` - Landing page with:
  - WeUnder banner (yellow background, closing date)
  - Hero section with CTA buttons
  - Official studio partners grid
  - "Our Mission" section
  - Timeline (2018-2024)
  - Team member showcase (4 profiles)
  - Call-to-action button

#### About Page
- `src/app/pages/about/about.component.ts` - About page with mission, timeline, and team details

#### Contact Page
- `src/app/pages/contact/contact.component.ts` - Multi-channel contact with:
  - Contact form (First Name, Last Name, Email, Subject, Message)
  - Email section with support email
  - Call section with phone number
  - Headquarters location with address
  - Embedded map

#### Help Center
- `src/app/pages/help/help.component.ts` - Help page with:
  - Hero search bar
  - 4 help categories (cards with icons)
  - FAQ accordion
  - Still need help section with Live Chat/Contact buttons

#### Authentication Pages
- `src/app/pages/forgot-password/forgot-password.component.ts` - Password recovery form

#### E-Commerce Pages
- `src/app/pages/gift-cards/gift-cards.component.ts` - Gift card purchase flow with:
  - Hero section with messaging
  - Amount selector ($25, $50, $100, Custom)
  - Card type selection (Digital/Physical)
  - Recipient personalization form
  - Price calculation and checkout button

- `src/app/pages/ticket/ticket.component.ts` - Ticket confirmation showing:
  - Success icon and message
  - Ticket details card
  - Movie information
  - Theater and seating info
  - QR code for scanning
  - Download PDF and Back to Home buttons

#### Concessions
- `src/app/pages/concessions/concessions.component.ts` - Pre-order snacks with:
  - 4 tabs (Popcorn, Drinks, Snacks, Combos)
  - Product grid with images
  - Product cards with prices
  - Side cart showing order summary
  - Subtotal, tax, and total calculation
  - Checkout button

#### Social/Friends
- `src/app/pages/friends/friends.component.ts` - Friends page with:
  - Search bar
  - Friends list (4 friends with status)
  - Recent activity feed (movie reviews and ratings)
  - Load more button

## Design System

### Colors (CSS Custom Properties)
- `--primary`: #f5c518 (Golden Yellow)
- `--primary-dark`: #d4a818 (Darker Yellow)
- `--background`: #0a0a0f (Near Black)
- `--background-secondary`: #1a1a20 (Dark Gray)
- `--text`: #ffffff (White)
- `--text-muted`: #a0a0a0 (Muted Gray)
- `--border`: #333333 (Border Gray)
- `--success`: #10b981 (Green)
- `--error`: #ef4444 (Red)

### Typography
- Font Family: Default system fonts with Tailwind fallbacks
- Heading sizes: 2xl, xl, lg with proper line heights
- Body text: 14px-16px with 1.5-1.6 line height

### Spacing & Layout
- Uses Tailwind spacing scale (4px = 1 unit)
- Flexbox for layouts (flex, gap-4, justify-between, items-center)
- Responsive breakpoints (md: 768px, lg: 1024px)
- Container max-width: 1200px (xl breakpoint)

## Component Patterns

### Standalone Components
All components follow Angular 19 standalone pattern:
```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule, ...],
  template: `...`,
  styles: []
})
```

### Routing
Standalone route definitions in `app.routes.ts`:
- `/` → HomeComponent
- `/about` → AboutComponent
- `/contact` → ContactComponent
- `/help` → HelpComponent
- `/forgot-password` → ForgotPasswordComponent
- `/gift-cards` → GiftCardsComponent
- `/ticket` → TicketComponent
- `/concessions` → ConcessionsComponent
- `/friends` → FriendsComponent
- `**` → Redirect to home

### State Management
Component-level state using TypeScript class properties and Angular signals (when needed).

## Asset Requirements

The following images/assets should be provided:
- Team member photos (4 profiles)
- Studio logos (Warner Bros, Universal, Paramount, etc.)
- Product images (popcorn, drinks, snacks, etc.)
- Movie poster for ticket (Dune: Part Two example)
- QR code (can be generated)
- Map (embedded Google Maps iframe)

## Dependencies Overview

### Core Angular (21.2.1)
- @angular/animations
- @angular/common
- @angular/core
- @angular/forms
- @angular/platform-browser
- @angular/router

### Styling
- tailwindcss (v4.2.0)
- autoprefixer
- postcss

### Development Tools
- TypeScript (5.7.3)
- @types/node, @types/react (for development)

## Build and Deployment

### Development
```bash
ng serve
# Runs on http://localhost:4200
```

### Production Build
```bash
ng build --configuration production
# Output: dist/angular-shoftv/
```

### Deployment Options
- Vercel (recommended for Angular)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Traditional hosting (Apache, Nginx)

## Notes

- All components use Tailwind CSS for styling (no CSS modules)
- No external UI component library (shadcn/ui style with custom Tailwind)
- Full TypeScript typing throughout
- Responsive design from mobile-first approach
- Color scheme matches ShofTV brand (golden yellow on dark backgrounds)
- Cookie modal and chat widget are always visible but can be toggled
- Forms include proper validation and error handling templates
