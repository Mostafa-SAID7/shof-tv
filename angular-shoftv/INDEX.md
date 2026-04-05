# ShofTV Angular Project - Complete Index

## 📌 Start Here

**New to this project?** Start with one of these files:

1. **Quick Start** → `QUICKSTART.md` (30 seconds to see it running)
2. **Setup Guide** → `README.md` (comprehensive setup instructions)
3. **Architecture** → `PROJECT_MANIFEST.md` (understand the structure)

---

## 🗂️ Complete File Structure

### Root Configuration Files
```
angular-shoftv/
├── package.json                 # npm dependencies
├── angular.json                 # Angular CLI configuration
├── tsconfig.json               # TypeScript base config
├── tsconfig.app.json           # TypeScript app config
├── tailwind.config.js          # Tailwind CSS v4 config
├── postcss.config.js           # PostCSS pipeline
├── README.md                   # Full documentation
├── QUICKSTART.md               # 30-second setup
├── PROJECT_MANIFEST.md         # Detailed architecture
└── INDEX.md                    # This file
```

### Source Code

#### Application Root
```
src/
├── index.html                  # HTML entry point
├── main.ts                     # Bootstrap entry point
├── styles.css                  # Global styles with design tokens
└── app/
```

#### App Directory
```
app/
├── app.component.ts            # Root component with router-outlet
├── app.config.ts               # Angular providers (Router, Animations)
├── app.routes.ts               # Route definitions
├── shared/                     # Reusable components
│   ├── navbar/
│   │   └── navbar.component.ts
│   ├── footer/
│   │   └── footer.component.ts
│   ├── cookie-preferences/
│   │   └── cookie-preferences.component.ts
│   └── live-chat/
│       └── live-chat.component.ts
└── pages/                      # Page components
    ├── home/
    │   └── home.component.ts
    ├── about/
    │   └── about.component.ts
    ├── contact/
    │   └── contact.component.ts
    ├── help/
    │   └── help.component.ts
    ├── forgot-password/
    │   └── forgot-password.component.ts
    ├── gift-cards/
    │   └── gift-cards.component.ts
    ├── ticket/
    │   └── ticket.component.ts
    ├── concessions/
    │   └── concessions.component.ts
    └── friends/
        └── friends.component.ts
```

---

## 🎯 Quick Navigation

### Getting Started
- **I just downloaded this** → Read `QUICKSTART.md`
- **I want to set it up** → Run `npm install && ng serve`
- **I want to understand the code** → Read `PROJECT_MANIFEST.md`
- **I want full documentation** → Read `README.md`

### Development
- **Edit a page** → Go to `src/app/pages/{page-name}/`
- **Change colors** → Edit `src/styles.css` CSS variables
- **Add a new page** → Create in `src/app/pages/`, add to `app.routes.ts`
- **Edit navbar** → Edit `src/app/shared/navbar/navbar.component.ts`

### Deployment
- **Build for production** → `ng build --configuration production`
- **Deploy to Vercel** → `npm i -g vercel` then `vercel`
- **Deploy to Netlify** → Build, then drag-drop `dist/` folder
- **Deploy to GitHub Pages** → Setup GitHub Actions workflow

---

## 📖 Documentation Files

### README.md (158 lines)
**Complete project documentation** including:
- Project structure overview
- Design features and color system
- Page descriptions
- Setup instructions
- Key features and components
- Browser support
- Customization guide

### QUICKSTART.md (197 lines)
**Fast setup guide** with:
- 30-second setup commands
- Page navigation URLs
- Common tasks and how-tos
- Troubleshooting
- File structure reference
- Next steps

### PROJECT_MANIFEST.md (209 lines)
**Detailed architecture document** covering:
- All configuration files
- Complete source file structure
- Design system (colors, typography)
- Component patterns and routing
- Dependencies overview
- Build and deployment options

### INDEX.md (This file)
**Navigation and quick reference** with:
- Complete file structure
- Quick navigation links
- Command reference
- Development tips
- Component descriptions

---

## 🚀 Command Reference

### Development
```bash
# Install dependencies
npm install

# Start development server (hot reload)
ng serve

# Serve on specific port
ng serve --port 4300

# Open browser automatically
ng serve --open
```

### Building
```bash
# Build for development
ng build

# Build for production (optimized)
ng build --configuration production

# Watch mode (rebuild on changes)
ng build --watch
```

### Testing
```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e
```

### Deployment
```bash
# Build then deploy to Vercel
ng build --configuration production
vercel

# Or use GitHub Actions for auto-deployment
```

---

## 📄 Component Quick Reference

### Shared Components (Used on Every Page)
| Component | File | Purpose |
|-----------|------|---------|
| Navbar | `shared/navbar/` | Header with navigation |
| Footer | `shared/footer/` | Footer with links |
| Cookie Modal | `shared/cookie-preferences/` | Consent management |
| Chat Widget | `shared/live-chat/` | Customer support |

### Page Components
| Page | File | Route | Description |
|------|------|-------|-------------|
| Home | `pages/home/` | `/` | Landing page with hero, features, timeline, team |
| About | `pages/about/` | `/about` | Company story and mission |
| Contact | `pages/contact/` | `/contact` | Contact form and location |
| Help | `pages/help/` | `/help` | FAQ and support center |
| Forgot Password | `pages/forgot-password/` | `/forgot-password` | Password recovery |
| Gift Cards | `pages/gift-cards/` | `/gift-cards` | Gift card purchase flow |
| Ticket | `pages/ticket/` | `/ticket` | Ticket confirmation |
| Concessions | `pages/concessions/` | `/concessions` | Snack pre-ordering |
| Friends | `pages/friends/` | `/friends` | Social network feature |

---

## 🎨 Design System

### Colors (from `src/styles.css`)
```css
--primary: #f5c518;              /* Golden Yellow */
--primary-dark: #d4a818;         /* Dark Golden */
--background: #0a0a0f;           /* Near Black */
--background-secondary: #1a1a20; /* Dark Gray */
--text: #ffffff;                 /* White */
--text-muted: #a0a0a0;          /* Muted Gray */
--border: #333333;              /* Border Gray */
--success: #10b981;             /* Green */
--error: #ef4444;               /* Red */
```

### Typography
- Heading Font: System fonts (Tailwind default)
- Body Font: System fonts (Tailwind default)
- Sizes: Use Tailwind scales (text-xs, text-sm, text-base, text-lg, text-xl, text-2xl)
- Line Heights: 1.4-1.6 for readability

### Spacing
- Uses Tailwind spacing scale
- Gap sizes: gap-2, gap-4, gap-6, gap-8
- Padding/Margin: p-4, px-6, py-8, mx-auto, etc.

---

## 💡 Development Tips

### Hot Reload
Changes automatically reload in browser. Just save files and the dev server updates.

### Component Structure
All components follow this pattern:
```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [...],
  template: `<div>...</div>`,
  styles: []
})
export class ComponentNameComponent {}
```

### Adding Images
Place images in `src/assets/` and reference:
```typescript
<img src="assets/image-name.jpg" alt="description" />
```

### Forms
Use template-driven syntax in templates:
```html
<input [(ngModel)]="property" />
<button (click)="onSubmit()">Submit</button>
```

### Styling
Use Tailwind classes directly in templates:
```html
<div class="bg-primary text-white p-4 rounded-lg">
  Content
</div>
```

---

## 🔗 Useful Links

### Official Docs
- [Angular 19 Docs](https://angular.io)
- [Angular Router Guide](https://angular.io/guide/router)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Deployment
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

### Community
- [Angular Discord](https://discord.gg/angular)
- [Stack Overflow - angular tag](https://stackoverflow.com/questions/tagged/angular)

---

## ✅ Checklist for Getting Started

- [ ] Download project ZIP
- [ ] Extract `angular-shoftv/` folder
- [ ] Read `QUICKSTART.md`
- [ ] Run `npm install`
- [ ] Run `ng serve`
- [ ] Open `http://localhost:4200`
- [ ] Click around all pages
- [ ] Edit a component and see hot reload
- [ ] Read `PROJECT_MANIFEST.md` to understand structure
- [ ] Customize colors in `src/styles.css`
- [ ] Add your content/images
- [ ] Build with `ng build --configuration production`
- [ ] Deploy to Vercel/Netlify/GitHub Pages

---

## 📞 Support

If you encounter issues:

1. **Check `QUICKSTART.md` Troubleshooting section**
2. **Verify Node/npm versions**: `node --version` (need 18+)
3. **Clear node_modules**: `rm -rf node_modules` then `npm install`
4. **Check Angular CLI**: `ng version`
5. **Read full docs**: `README.md` or `PROJECT_MANIFEST.md`

---

## 📝 Notes

- All code is production-ready
- Full TypeScript typing throughout
- Responsive design (mobile-first)
- No external UI libraries (pure Tailwind)
- Easy to customize and extend
- Well-documented code

---

**Start with `QUICKSTART.md` for immediate setup!**
