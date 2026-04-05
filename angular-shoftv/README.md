# ShofTV - Angular + Tailwind + shadcn/ui Project

A complete Angular implementation of the ShofTV streaming platform landing page and multi-page application, styled with Tailwind CSS and shadcn/ui design patterns.

## 📋 Project Structure

```
angular-shoftv/
├── src/
│   ├── app/
│   │   ├── shared/           # Reusable navbar, footer, cookie modal, chat widget
│   │   ├── pages/            # Page components (Home, About, Contact, Help, etc.)
│   │   ├── app.component.ts  # Root component with routing outlet
│   │   ├── app.routes.ts     # Route definitions
│   │   └── app.config.ts     # Application config with providers
│   ├── styles.css            # Global styles with Tailwind and CSS variables
│   ├── index.html            # HTML entry point
│   └── main.ts               # Bootstrap entry point
├── angular.json              # Angular configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies
```

## 🎨 Design Features

- **Dark Cinematic Theme**: Near-black backgrounds with golden-yellow (#f5c518) primary color
- **Responsive Layout**: Mobile-first design with Tailwind breakpoints
- **Reusable Components**: Standalone Angular components with sharp typing
- **Modern UX**: Cookie preferences modal, live chat widget, smooth routing

## 📦 Pages Included

1. **Home** (`/`) - Landing page with WeUnder banner, hero, features, timeline, team
2. **About Us** (`/about`) - Company mission, journey timeline, team bios
3. **Contact Us** (`/contact`) - Multi-channel contact form with location map
4. **Help Center** (`/help`) - FAQ, support categories, live chat integration
5. **Forgot Password** (`/forgot-password`) - Password recovery flow
6. **Gift Cards** (`/gift-cards`) - Interactive gift card purchase builder
7. **Ticket Confirmation** (`/ticket`) - Digital ticket display with QR code
8. **Concessions** (`/concessions`) - Pre-order snacks with cart sidebar
9. **Friends** (`/friends`) - Social feature with activity feed

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Angular CLI 19+

### Installation

1. **Copy the project to your machine**
   ```bash
   cd angular-shoftv
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   ng serve
   # or
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200` (or the port shown in terminal)

### Build for Production

```bash
ng build --configuration production
# Output will be in dist/my-project/
```

## 🎯 Key Features

### Color System
- **Primary**: Golden Yellow (#f5c518)
- **Background**: Near-Black (#0a0a0f)
- **Text**: White (#ffffff)
- **Accent**: Olive/Gold tones for hover states

All colors use CSS custom properties in `styles.css` for easy theming.

### Components
- **Navbar**: Sticky header with mobile hamburger menu
- **Hero**: Large cinematic hero with CTA buttons
- **Features**: 6-card feature grid
- **Timeline**: Company journey with milestones
- **Team**: Team member profiles
- **Forms**: Fully typed contact and gift card forms
- **Footer**: Multi-column footer with social links
- **Modals**: Cookie preferences and live chat

### Responsive Design
- Mobile: 320px+
- Tablet: 768px (md breakpoint)
- Desktop: 1024px (lg breakpoint)

## 🛠️ Development Notes

### Standalone Components
All components are Angular standalone components (no NgModule required).

### Type Safety
Full TypeScript typing with interfaces for data structures.

### Styling
- Tailwind CSS v4 with PostCSS
- CSS custom properties for theming
- No additional component libraries needed

### Routing
Angular Router with lazy loading support and 404 redirects.

## 📱 Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Change Colors
Edit CSS variables in `src/styles.css`:
```css
:root {
  --primary: #f5c518;      /* Golden yellow */
  --background: #0a0a0f;   /* Near black */
  --text: #ffffff;         /* White */
}
```

### Add New Pages
1. Create component in `src/app/pages/`
2. Add route to `app.routes.ts`
3. Link from navbar in `src/app/shared/navbar/navbar.component.ts`

### Modify Content
Edit template strings in component files or extract to separate template files.

## 📄 License
This project is for ShofTV and follows their branding guidelines.

## 🤝 Support
For Angular-specific questions, see:
- [Angular Documentation](https://angular.io)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://typescriptlang.org)
