# Glossy — Proposed Frontend Architecture

## Status

The stack below is proposed and subject to review. No application source structure has been created yet.

## Proposed Technology Stack

| Technology | Intended purpose |
|---|---|
| React | Component-based UI |
| TypeScript | Type safety and maintainability |
| Vite | Development server and production build tooling |
| React Router | Proposed client-side route definitions and navigation |
| SCSS | Structured styling and design-system composition |
| Material UI | Accessible primitives where they fit the approved design |
| React Hook Form | Form state and submission lifecycle |
| Zod | Runtime validation schemas |
| Vitest | Proposed unit and supporting test runner compatible with Vite |
| React Testing Library | User-oriented component and integration tests |
| Playwright | Browser-level end-to-end tests |
| ESLint / Prettier | Code quality and formatting |
| Git / GitHub | Version control and collaboration |
| GitHub Actions | Automated checks and CI/CD workflows |
| Vercel | Proposed hosting and preview deployments; not configured |

Every dependency must have a clear benefit and be reviewed before installation.

## Routing Concept

- `/` — landing page
- `/privacy-policy` — privacy policy
- `/terms` — terms, if required
- `*` — custom 404 page

A root route layout may provide shared navigation, footer, and metadata conventions. React Router renders the matched child route through `<Outlet />`; the outlet is the explicit boundary between shared layout UI and route-specific content. Route layouts may be added only where a group of routes genuinely shares structure. Route-level components should remain focused and should not become a global dumping ground.

## Proposed technology responsibilities

- **React Router:** Defines routes, links, navigation behavior, route parameters if later needed, and the custom 404 route. It does not own page styling or business submission logic.
- **Route layouts:** Own UI shared by a route group, such as the root header, footer, and shared page framing. They should avoid accumulating unrelated feature logic.
- **`<Outlet />`:** Marks where the currently matched child route renders inside a layout. It is a composition boundary, not a global state mechanism.
- **MUI:** Provides selected reusable UI components and accessibility-related primitives where appropriate, especially for interaction patterns that benefit from established behavior.
- **SCSS:** Provides project styling, custom page layouts, sections, responsive rules, approved tokens, and visual identity.
- **BEM:** Names custom SCSS blocks, elements, and modifiers so project-specific styles remain discoverable and scoped.
- **React Hook Form:** Manages form state, field registration, submission lifecycle, touched/dirty state, and accessible error state at the form boundary.
- **Zod:** Defines proposed runtime schemas for user input and external responses where validation is needed. It complements, but does not replace, backend/provider validation.

### Styling boundary (proposed)

MUI should provide selected reusable UI components and accessibility-related primitives where appropriate. SCSS/BEM should handle custom page layouts, landing-page sections, project-specific styling, and the visual identity. Avoid implementing the same component styling through competing systems without a documented reason, such as an integration constraint or a clearly defined ownership boundary.

## Principles

- Component-based architecture with clear responsibilities.
- Separation of presentation, form behavior, content, and service/integration logic.
- Reusable UI components where repetition and consistency justify them.
- Feature-based organization where it improves discoverability.
- Strong typing at component and integration boundaries.
- Avoid unnecessary abstractions and overengineering.
- Keep dependencies justified, current, and minimal.
- Treat accessibility, performance, and responsive behavior as architectural concerns.
