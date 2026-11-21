# Glossy — AI Agent Instructions

## Context and Workflow

Glossy is a planned commercial automotive services website covering body repair, mechanical repair, and car rental. Documentation comes first. Inspect existing files before editing, follow the requested scope, and keep unknown business details as TBD or explicit assumptions.

## Technology Status

React, TypeScript, Vite, React Router, SCSS, Material UI, React Hook Form, Zod, Vitest, React Testing Library, Playwright, ESLint, Prettier, GitHub Actions, and Vercel are proposed, not yet configured. Do not create application code or install dependencies unless the task explicitly authorizes it.

## Coding and Quality Rules

- Use TypeScript without unjustified `any`; keep components focused and props explicit.
- Use semantic, accessible React and keyboard-friendly interactions.
- Use SCSS and approved tokens; follow BEM for custom classes and do not default to inline styles.
- Keep presentation, business logic, and integrations appropriately separated.
- Add or update relevant tests; report only checks actually run.
- Do not ignore TypeScript, lint, build, or test errors.

## Security and Git Restrictions

- Never expose or commit secrets, real credentials, or populated `.env` files.
- Frontend validation never replaces backend validation.
- Do not modify files outside the requested scope.
- Do not delete existing files without explicit approval.
- Do not install dependencies or change package versions without explaining why and receiving approval.
- Never run destructive commands without explicit confirmation.
- Never push, merge, rewrite Git history, create branches, or switch branches without explicit approval.

## Agent Handoff

Always summarize changes, assumptions, missing information, and checks actually executed. Never claim tests passed when they were not run.
