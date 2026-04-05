# Contributing to Shof TV

Thank you for your interest in contributing to Shof TV! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions with other contributors.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/shof-tv.git
   cd shof-tv
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/Mostafa-SAID7/shof-tv.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server
```bash
npm start
```
The app will be available at `http://localhost:4200`

### Building for Production
```bash
npm run build
```

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Commit Guidelines

Follow conventional commits format:
```
type(scope): subject

body

footer
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding or updating tests
- `chore`: Changes to build process, dependencies, etc.

### Examples
```
feat(navbar): add mobile menu toggle
fix(hero): correct image alignment on mobile
docs: update installation instructions
```

## Pull Request Process

1. Update your branch with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request on GitHub with:
   - Clear title and description
   - Reference to related issues
   - Screenshots if UI changes
   - Testing instructions

4. Ensure all checks pass:
   - Build succeeds
   - Tests pass
   - Linting passes

5. Request review from maintainers

6. Address any feedback and update your PR

## Code Style

### TypeScript/Angular
- Use strict mode
- Follow Angular style guide
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### CSS
- Use Tailwind CSS utilities
- Follow BEM naming for custom classes
- Keep specificity low
- Mobile-first approach

## Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for >80% code coverage
- Use descriptive test names

## Documentation

- Update README.md if needed
- Add comments to complex code
- Document new features
- Update CHANGELOG.md

## Docker Development

### Build Docker Image
```bash
docker build -t shof-tv:dev .
```

### Run with Docker Compose
```bash
docker-compose up
```

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots if applicable

## Questions?

Feel free to open an issue or discussion for questions.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Shof TV! 🎉
