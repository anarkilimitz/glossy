# Glossy — Development Guidelines

## TypeScript

- Prefer explicit, narrow types at boundaries.
- Avoid `any`; use a safer type or document a narrowly scoped exception.
- Keep runtime validation for external and user-provided data.
- Do not suppress compiler errors without explaining why.

## React

- Keep components focused and composable.
- Use PascalCase for component names and camelCase for variables and functions.
- Use descriptive file names; component files may use PascalCase, hooks use `useSomething`.
- Keep business logic out of presentational components where practical.
- Use hooks for reusable stateful behavior, with stable dependency lists.
- Define props explicitly and avoid overly broad prop objects.
- Keep state local unless multiple consumers genuinely need shared state.

### Routing responsibilities (proposed)

- Use React Router for route definitions, links, navigation, and the custom 404 route.
- Use route layouts for shared navigation, footer, and route-group framing.
- Render child routes through `<Outlet />` at the layout boundary; do not use it as a substitute for state management.
- Keep route components focused on their page or section responsibilities.

## Styling

- Use SCSS and approved design tokens as the default styling strategy.
- Follow BEM naming for custom CSS classes: `.block`, `.block__element`, `.block--modifier`.
- Avoid inline styles as the default; use them only for truly dynamic values or integration boundaries.
- Use MUI for selected reusable UI components and accessibility-related primitives where appropriate.
- Use SCSS/BEM for custom page layouts, landing-page sections, project-specific styling, responsive behavior, and visual identity.
- Customize Material UI through the approved theme and documented overrides rather than scattered hacks.
- Avoid styling the same responsibility through competing systems unless the reason and ownership boundary are documented.

## Forms and Errors

- Use React Hook Form and Zod when the proposed stack is approved.
- Use React Hook Form for form state and submission lifecycle; use Zod for proposed runtime schemas and client-side usability validation.
- Pair every input with a visible label and accessible error message.
- Handle loading, success, and failure states explicitly.
- Treat client-side validation as usability support, not backend security.

## Quality

- Format with Prettier and lint with ESLint.
- Fix TypeScript, lint, and test failures rather than ignoring them.
- Avoid unnecessary duplication, oversized components, and premature abstractions.
- Add tests for meaningful behavior and regressions.

## Dependencies

Do not install dependencies without a clear reason, scope explanation, and approval consistent with project workflow. Prefer existing platform capabilities when adequate.
