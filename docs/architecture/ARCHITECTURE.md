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

## Proposed source structure

The following structure is the smallest planned organization that keeps shared UI, page sections, content data, and integrations separate:

```text
src/
├── app/                 # App.tsx, router.tsx, theme.ts
├── components/
│   ├── layout/          # Header, Footer, PageLayout
│   ├── ui/              # Button, Link, Container, Section, Card, FormField
│   └── seo/             # route metadata helpers
├── sections/            # Hero, Services, AboutAdvantages, Portfolio, CarRental, ContactsFinalCta
├── pages/               # LandingPage, legal pages, NotFoundPage
├── data/                # typed services/prices, vehicles, site contacts/navigation
├── forms/               # contact schema and form UI
├── styles/              # abstracts, base, components, sections, themes, main.scss
└── integrations/        # provider/backend adapter after approval
```

Sections own composition and section-specific presentation. Shared components own repeated UI primitives and structural chrome. Business data stays in typed modules under `data/`; JSX maps over that data and does not contain duplicated prices, vehicle records, or contact values. The form UI and validation may be prepared, but production submission remains TBD until a provider/backend and personal-data processing are approved.

## Data and styling ownership

- `data/services.ts` is the single source for the three service directions, body-repair subservices, mechanical services, and confirmed prices.
- `data/vehicles.ts` is the single source for rental categories, confirmed vehicles, and daily prices.
- `data/site.ts` is the single source for confirmed company name, city, phones, email, and navigation labels.
- Components receive typed props and render data; they do not embed business records or make provider calls.
- CSS Custom Properties published by the design system are the runtime source of token values. The MUI theme must consume those same values and must not create an independent palette.
- SCSS/BEM owns custom layout, section composition, responsive behavior, visual identity, and project-specific states. MUI owns selected accessible primitives and their interaction behavior. MUI is not used to replace custom landing-page styling.
- `styles/themes/_tokens.scss` publishes CSS Custom Properties; SCSS compile-time maps and mixins are limited to implementation mechanics described in `DESIGN_SYSTEM.md`.

## Fonts, metadata, and routing rules

- Manrope is the preliminary font choice. The final source, license, Cyrillic support, loading strategy, and fallback stack remain TBD.
- Metadata is owned by route-level page configuration and shared SEO helpers. Section components do not mutate document metadata.
- React Router owns route definitions, navigation, route parameters when needed, the shared root layout, and the custom 404 route. The root layout renders Header and Footer around `<Outlet />`; the landing page renders the six content sections in approved order. Do not create a route per landing-page section without a later requirement.

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
