# Shof TV - Angular Landing Page

A modern, responsive landing page for Shof TV built with **Angular 19**, **Tailwind CSS**, and **TypeScript**.

[![Build Status](https://github.com/Mostafa-SAID7/shof-tv/workflows/Build%20and%20Test/badge.svg)](https://github.com/Mostafa-SAID7/shof-tv/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Angular Version](https://img.shields.io/badge/angular-19.2.20-red.svg)](https://angular.io/)

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/shof-tv.git
cd shof-tv

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:4200` in your browser.

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

| Document | Description |
|----------|-------------|
| [PROJECT_SETUP.md](docs/PROJECT_SETUP.md) | Setup and installation guide |
| [STRUCTURE.md](docs/STRUCTURE.md) | Project structure and organization |
| [TECHNOLOGIES.md](docs/TECHNOLOGIES.md) | Tech stack and dependencies |
| [STYLES.md](docs/STYLES.md) | Styling guide and design system |
| [FEATURES.md](docs/FEATURES.md) | Current and planned features |
| [USE_CASES.md](docs/USE_CASES.md) | User scenarios and workflows |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment and hosting guide |
| [SECURITY.md](docs/SECURITY.md) | Security policies and best practices |
| [CHANGELOG.md](docs/CHANGELOG.md) | Version history and updates |
| [ERD.md](docs/ERD.md) | Database schema (planned) |
| [CONTRIBUTORS.md](docs/CONTRIBUTORS.md) | Contribution guidelines |

## 🛠️ Available Commands

```bash
# Development
npm start              # Start dev server (http://localhost:4200)
npm run build         # Build for production
npm run watch         # Watch mode build

# Testing
npm test              # Run unit tests
npm test -- --run     # Run tests once

# Code Quality
npm run lint          # Check code quality

# Docker
docker-compose up     # Start with Docker (http://localhost:3000)
docker build -t shof-tv:latest .  # Build Docker image
```

## 📁 Project Structure

```
shof-tv/
├── .github/              # GitHub workflows and templates
├── docs/                 # Comprehensive documentation
├── src/
│   ├── app/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── shared/       # Shared components
│   ├── main.ts          # Entry point
│   └── styles.css       # Global styles
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── README.md           # This file
```

## 🎨 Tech Stack

### Frontend
- **Angular 19.2.20** - Modern web framework
- **TypeScript 5.6.3** - Typed JavaScript
- **Tailwind CSS 4.2.2** - Utility-first CSS
- **RxJS 7.8.2** - Reactive programming

### Development
- **Angular CLI 19.2.23** - Build tools
- **Karma 6.4.4** - Test runner
- **Jasmine 5.1.2** - Testing framework

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Local development
- **Nginx** - Reverse proxy
- **GitHub Actions** - CI/CD

## 🎯 Features

### Current
✅ Responsive landing page  
✅ Modern Angular architecture  
✅ Tailwind CSS styling  
✅ Docker support  
✅ CI/CD pipelines  
✅ Comprehensive documentation  

### Planned
🔄 User authentication  
🔄 Content streaming  
🔄 Payment integration  
🔄 Mobile app  
🔄 Advanced analytics  

See [FEATURES.md](docs/FEATURES.md) for detailed roadmap.

## 🐳 Docker Support

### Development with Docker

```bash
# Start services
docker-compose up

# Access the app
# http://localhost:3000

# Stop services
docker-compose down
```

### Production Docker Image

```bash
# Build image
docker build -t shof-tv:latest .

# Run container
docker run -p 3000:3000 shof-tv:latest
```

## 🔄 CI/CD Pipeline

Automated workflows with GitHub Actions:

- **Build & Test** - Runs on every push
- **Deploy** - Runs on main branch
- **Docker Build** - Builds and pushes images

See [.github/workflows/](.github/workflows/) for details.

## 📖 Getting Started

1. **Setup Development Environment**
   - Follow [PROJECT_SETUP.md](docs/PROJECT_SETUP.md)

2. **Understand Project Structure**
   - Read [STRUCTURE.md](docs/STRUCTURE.md)

3. **Learn the Tech Stack**
   - Check [TECHNOLOGIES.md](docs/TECHNOLOGIES.md)

4. **Styling Guidelines**
   - Review [STYLES.md](docs/STYLES.md)

5. **Start Contributing**
   - See [CONTRIBUTING.md](.github/CONTRIBUTING.md)

## 🤝 Contributing

We welcome contributions! Please:

1. Read [CONTRIBUTING.md](.github/CONTRIBUTING.md)
2. Follow [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
3. Check [good first issues](https://github.com/Mostafa-SAID7/shof-tv/labels/good%20first%20issue)
4. Create a feature branch
5. Submit a pull request

See [CONTRIBUTORS.md](docs/CONTRIBUTORS.md) for more details.

## 🔒 Security

- Security policy: [SECURITY.md](docs/SECURITY.md)
- Report vulnerabilities: security@shof-tv.com
- No public disclosure until fixed

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)
- All contributors and supporters

## 📞 Support

- **Documentation**: See [docs/](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/Mostafa-SAID7/shof-tv/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Mostafa-SAID7/shof-tv/discussions)
- **Email**: support@shof-tv.com

## 🗺️ Roadmap

### Q2 2026
- User authentication
- User profiles
- Social login

### Q3 2026
- Content management system
- Video streaming
- Search and filtering

### Q4 2026
- Payment integration
- Analytics dashboard
- Admin panel

### 2027
- Mobile app
- Live streaming
- AI recommendations

See [FEATURES.md](docs/FEATURES.md) for detailed roadmap.

## 📊 Project Stats

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Karma + Jasmine
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## 🎓 Learning Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Docker Guide](https://docs.docker.com/)

## 📈 Performance

- Optimized bundle size
- Lazy loading support
- Production build optimization
- Docker multi-stage builds
- Nginx caching

## 🔍 SEO

- Semantic HTML
- Meta tags
- Structured data
- Mobile-friendly
- Fast load times

---

**Made with ❤️ by [Mostafa SAID](https://github.com/Mostafa-SAID7)**

⭐ If you find this project helpful, please star it on GitHub!

Last Updated: 2026-04-05
