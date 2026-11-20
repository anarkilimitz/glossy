# Glossy — Proposed Testing Strategy

> Tools and thresholds are preliminary. The goal is confidence in important behavior, not an unrealistic 100% coverage target.

## Proposed test stack

- **Vitest:** Unit and supporting test runner, selected for Vite compatibility.
- **React Testing Library:** Component and integration tests from the user's perspective.
- **`@testing-library/user-event`:** Realistic keyboard and pointer interactions.
- **DOM matchers:** Accessible and semantic assertions through the approved DOM matcher package.
- **Playwright:** Browser-level end-to-end tests.

No packages or test configuration have been installed or created at this planning stage.

## Test layers and environments

- **Unit tests (Vitest):** Pure utilities, validation schemas, formatting, and isolated logic in a DOM-free environment where possible.
- **Component tests (React Testing Library):** Rendering, accessible names, user interactions, navigation controls, and states.
- **Integration tests:** Form flows, routing with shared layout, validation and submission boundaries.
- **E2E tests (Playwright):** Critical journeys in a real browser, including responsive viewport checks where useful.
- **Test environments:** Use a lightweight Node environment for pure logic and a browser-like DOM environment for React component tests. Playwright runs against the built or development application in real supported browsers.
- **Manual QA:** Content review, visual inspection, keyboard navigation, browser checks, and exploratory testing.
- **Responsive testing:** Approved desktop, tablet, and mobile widths; verify overflow, touch targets, media, and menu behavior.
- **Accessibility testing:** Keyboard-only use, focus order, labels, headings, contrast, screen-reader smoke checks, and automated scans where available.

## Priority Examples

- Navigation reaches each landing-page section and route; mobile menu opens and closes correctly.
- Contact form validates required fields and formats, exposes errors accessibly, shows loading/success/error states, and prevents duplicate submission.
- Components render approved content without layout-breaking long text.
- 404 and legal routes load and provide recovery/navigation paths.
- Responsive layouts do not hide essential information or create horizontal scrolling.

Tests should be readable, behavior-focused, deterministic, and updated with meaningful UI changes.

## Conventions

- Name tests `*.test.ts` or `*.test.tsx`, colocated with the code when that improves discoverability; use a documented test directory for shared fixtures and end-to-end tests.
- Prefer queries by role, label, and accessible name. Use implementation-detail selectors only when there is no meaningful user-facing alternative.
- Keep unit and component tests focused on observable behavior. Mock network/provider boundaries rather than testing a third party's implementation.
- Test routes with an in-memory router or the project-approved router harness, asserting rendered route content, links, layout, and the 404 path.
- Run Playwright journeys separately from fast unit/component checks; include the configured desktop and mobile viewports where they cover meaningful risk.

## CI requirements (planned)

Once CI is configured, an approved pull request should run formatting checks, linting, type checking, unit/component/integration tests, and the production build. Playwright should run in CI for the critical journeys, with browser installation and artifacts handled by the approved workflow. The exact gates and runtime budget are TBD and must be recorded before implementation.
