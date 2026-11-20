# Glossy — Deployment Plan

## Current status

Vercel is the proposed deployment platform but is not yet configured. No application, hosting project, deployment infrastructure, domain, or CI/CD pipeline exists yet.

## Planned workflow

1. Develop locally with documented environment requirements.
2. Run formatting, linting, type checking, tests, and production build checks.
3. Submit changes through the approved GitHub workflow; AI agents must not push or merge without explicit user approval.
4. Use GitHub Actions for repeatable checks; deployment automation is subject to configuration review.
5. Create preview deployments for review before production.
6. Promote the approved build to production only after explicit release approval.
7. If a release must be reverted, redeploy the last known-good deployment or use the platform's approved rollback capability, after confirming the target.

AI agents must not push, merge, deploy, change production settings, or perform other restricted release actions without explicit user approval.

## Environment and Operations

- Keep environment variable names documented and values in the hosting secret store.
- Do not place real credentials in GitHub, source files, logs, or preview comments.
- Domain, DNS ownership, email delivery, form endpoint, analytics, and legal configuration are TBD.
- Production must use HTTPS.
- Define rollback by redeploying the last known-good deployment or using the platform's approved rollback capability.

## Post-Deployment Verification

Check the homepage, navigation, legal pages, 404 route, form states, responsive layouts, console errors, metadata, HTTPS, analytics behavior if approved, and critical accessibility paths. Record any known issues before release.
