# Project Structure

## Directory Layout

```
shof-tv/
├── .github/                          # GitHub configuration
│   ├── workflows/                    # CI/CD workflows
│   │   ├── build.yml                # Build and test workflow
│   │   └── deploy.yml               # Deployment workflow
│   ├── ISSUE_TEMPLATE/              # Issue templates
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── pull_request_template.md     # PR template
│   ├── CONTRIBUTING.md              # Contributing guidelines
│   └── CODE_OF_CONDUCT.md           # Code of conduct
│
├── docs/                             # Documentation
│   ├── CHANGELOG.md                 # Version history
│   ├── ERD.md                       # Database schema
│   ├── FEATURES.md                  # Feature list
│   ├── SECURITY.md                  # Security policy
│   ├── STRUCTURE.md                 # This file
│   ├── PROJECT_SETUP.md             # Setup instructions
│   ├── STYLES.md                    # Styling guide
│   ├── DEPLOYMENT.md                # Deployment guide
│   ├── TECHNOLOGIES.md              # Tech stack
│   ├── CONTRIBUTORS.md              # Contributors list
│   └── USE_CASES.md                 # Use cases
│
├── src/                              # Source code
│   ├── app/                         # Angular application
│   │   ├── components/              # Reusable components
│   │   │   ├── content-carousel/
│   │   │   ├── cta/
│   │   │   ├── devices/
│   │   │   ├── faq/
│   │   │   ├── features/
│   │   │   ├── footer/
│   │   │   ├── hero/
│   │   │   ├── navbar/
│   │   │   └── pricing/
│   │   ├── pages/                   # Page components
│   │   │   ├── about/
│   │   │   ├── concessions/
│   │   │   ├── contact/
│   │   │   ├── forgot-password/
│   │   │   ├── friends/
│   │   │   ├── gift-cards/
│   │   │   ├── help/
│   │   │   ├── home/
│   │   │   └── ticket/
│   │   ├── shared/                  # Shared components
│   │   │   ├── cookie-preferences/
│   │   │   ├── footer/
│   │   │   ├── live-chat/
│   │   │   └── navbar/
│   │   ├── app.component.ts         # Root component
│   │   ├── app.config.ts            # App configuration
│   │   └── app.routes.ts            # Routing configuration
│   ├── main.ts                      # Application entry point
│   ├── index.html                   # HTML template
│   └── styles.css                   # Global styles
│
├── public/                           # Static assets
│   └── favicon.svg
│
├── .angular/                         # Angular build cache
├── .vscode/                          # VS Code settings
├── node_modules/                     # Dependencies
│
├── .dockerignore                     # Docker ignore file
├── .editorconfig                     # Editor configuration
├── .env.example                      # Environment template
├── .gitignore                        # Git ignore file
├── angular.json                      # Angular CLI config
├── Dockerfile                        # Docker image definition
├── docker-compose.yml                # Docker Compose config
├── nginx.conf                        # Nginx configuration
├── package.json                      # Dependencies
├── package-lock.json                 # Dependency lock file
├── postcss.config.js                 # PostCSS config
├── tailwind.config.js                # Tailwind config
├── tsconfig.json                     # TypeScript config
├── tsconfig.app.json                 # App TypeScript config
│
├── README.md                         # Main README
├── DEPLOYMENT.md                     # Deployment guide
└── LICENSE                           # License file
```

## Component Structure

### Page Component Example
```
pages/home/
├── home.component.ts                # Component logic
├── home.component.html              # Template (if separate)
├── home.component.css               # Styles (if separate)
└── home.component.spec.ts           # Tests
```

### Shared Component Example
```
shared/navbar/
├── navbar.component.ts              # Component logic
├── navbar.component.html            # Template
├── navbar.component.css             # Styles
└── navbar.component.spec.ts         # Tests
```

## File Naming Conventions

### Components
- `*.component.ts` - Component class
- `*.component.html` - Component template
- `*.component.css` - Component styles
- `*.component.spec.ts` - Component tests

### Services
- `*.service.ts` - Service class
- `*.service.spec.ts` - Service tests

### Models/Interfaces
- `*.model.ts` - Data models
- `*.interface.ts` - TypeScript interfaces

### Utilities
- `*.util.ts` - Utility functions
- `*.helper.ts` - Helper functions
- `*.constant.ts` - Constants

## Module Organization

### Feature Modules (Future)
```
features/
├── auth/
│   ├── auth.module.ts
│   ├── components/
│   ├── services/
│   ├── models/
│   └── pages/
├── content/
│   ├── content.module.ts
│   ├── components/
│   ├── services/
│   └── pages/
└── user/
    ├── user.module.ts
    ├── components/
    ├── services/
    └── pages/
```

### Shared Module (Future)
```
shared/
├── shared.module.ts
├── components/
├── directives/
├── pipes/
├── services/
└── models/
```

## Asset Organization

### Images
```
public/
├── images/
│   ├── hero/
│   ├── features/
│   ├── icons/
│   └── logos/
```

### Fonts
```
public/
└── fonts/
    ├── inter/
    └── playfair-display/
```

## Configuration Files

### Environment Configuration
- `.env.example` - Template for environment variables
- `.env` - Local environment (not committed)
- `.env.production` - Production environment

### Build Configuration
- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Docker Configuration
- `Dockerfile` - Docker image definition
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Docker ignore file

## Development Workflow

### Creating a New Component
```bash
ng generate component components/my-component
```

### Creating a New Service
```bash
ng generate service services/my-service
```

### Creating a New Page
```bash
ng generate component pages/my-page
```

## Best Practices

### Component Organization
- Keep components focused and single-responsibility
- Use smart/dumb component pattern
- Organize by feature, not by type

### File Size
- Keep components under 400 lines
- Keep services under 300 lines
- Split large files into smaller modules

### Naming
- Use descriptive names
- Follow Angular style guide
- Use consistent naming conventions

### Imports
- Organize imports alphabetically
- Group by type (Angular, third-party, local)
- Use absolute paths with path aliases

## Related Documentation

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
