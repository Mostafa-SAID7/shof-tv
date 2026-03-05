# ShofTV Landing Page - Angular + Tailwind CSS

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Angular CLI: `npm install -g @angular/cli`

### Setup Steps

1. Copy the entire `angular-shoftv/` folder to your desired location:
   ```bash
   cp -r angular-shoftv ~/projects/shoftv-landing
   cd ~/projects/shoftv-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   ng serve
   ```

4. Open http://localhost:4200 in your browser.

## Project Structure

```
angular-shoftv/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Fixed top navigation with mobile menu
│   │   │   ├── hero/            # Full-screen hero with CTA and stats
│   │   │   ├── features/        # 6-card feature grid
│   │   │   ├── content-carousel/# Horizontal content cards with category filter
│   │   │   ├── pricing/         # 3-tier pricing cards
│   │   │   ├── devices/         # Device compatibility showcase
│   │   │   ├── faq/             # Accordion FAQ with Angular animations
│   │   │   ├── cta/             # Email signup call-to-action
│   │   │   └── footer/          # Multi-column footer
│   │   ├── app.component.ts     # Root component composing all sections
│   │   ├── app.config.ts        # Application config with routing + animations
│   │   └── app.routes.ts        # Route definitions (expandable)
│   ├── styles.css               # Global styles, Tailwind imports, design tokens
│   ├── index.html               # HTML entry point
│   └── main.ts                  # Bootstrap entry
├── angular.json                 # Angular workspace config
├── tailwind.config.js           # Tailwind with custom design tokens
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

## Design Tokens (CSS Variables)

The theme is defined via CSS custom properties in `src/styles.css`:

| Token               | Value     | Usage                    |
|---------------------|-----------|--------------------------|
| --background        | #0a0a0f   | Page background          |
| --foreground        | #f0f0f5   | Primary text             |
| --card              | #12121a   | Card backgrounds         |
| --primary           | #e50914   | Brand red (CTA, accents) |
| --accent            | #ff6b35   | Secondary orange accent  |
| --muted             | #1e1e2e   | Subtle backgrounds       |
| --muted-foreground  | #8888a0   | Secondary text           |
| --border            | #2a2a3e   | Border color             |

## Tech Stack

- **Angular 19** (standalone components)
- **Tailwind CSS 3.4** (utility-first styling)
- **Angular Animations** (FAQ accordion)
- **No external UI library required** (custom shadcn-inspired tokens)

## Customization

- Replace gradient placeholders in the carousel with actual images
- Update pricing values, channel counts, and content titles
- Add your own logo SVG to the navbar and footer
- Connect the email signup form to your backend
