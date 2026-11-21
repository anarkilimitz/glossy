# Glossy

Glossy is a planned commercial automotive services website for Космоавто112 in Екатеринбург. The approved service scope includes body repair (including painting), mechanical repair, and car rental. Exact address, legal details, and personal-data processing remain TBD.

## Current status

The project has a minimal React/TypeScript/Vite application foundation with React Router, SCSS, Material UI theme wiring, ESLint, TypeScript, and Vitest configured. Product content, full page sections, backend submission, deployment infrastructure, and CI/CD remain out of scope for this foundation stage.

## Proposed technology stack

React, TypeScript, Vite, React Router, SCSS, Material UI, React Hook Form, Zod, Vitest, React Testing Library, `@testing-library/user-event`, DOM matchers, Playwright, ESLint, Prettier, GitHub Actions, and Vercel are proposed only. Dependencies and configuration must be reviewed and approved before installation.

## Documentation index

- [Project overview](docs/project/PROJECT_OVERVIEW.md)
- [Preliminary product requirements](docs/project/PRODUCT_REQUIREMENTS.md)
- [Development roadmap](docs/project/ROADMAP.md)
- [Architecture](docs/architecture/ARCHITECTURE.md)
- [Development guidelines](docs/development/DEVELOPMENT_GUIDELINES.md)
- [Design brief](docs/design/DESIGN_BRIEF.md)
- [Design system](docs/design/DESIGN_SYSTEM.md)
- [Testing strategy](docs/testing/TESTING_STRATEGY.md)
- [Security guidelines](docs/security/SECURITY.md)
- [Deployment plan](docs/deployment/DEPLOYMENT.md)
- [Implementation specification](docs/development/IMPLEMENTATION_SPEC.md)

## Planned development workflow

1. Complete Product Discovery and confirm business, content, legal, and technical unknowns.
2. Approve requirements, content dependencies, and the visual direction.
3. Record technical decisions and review the proposed toolchain.
4. Set up the application only after the preceding decisions are ready.
5. Implement the approved layout, routes, sections, form boundary, and legal content.
6. Run automated checks, accessibility and responsive QA, and stakeholder review.
7. Configure previews, production hosting, and release operations after explicit approval.

The current foundation intentionally contains only the application shell, base route, custom 404 route, shared container, preliminary SCSS token layer, and test setup. Full page sections, contact submission, backend, deployment, and CI/CD are not configured yet.
