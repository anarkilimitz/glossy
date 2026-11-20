# Glossy — Security Guidelines

## Principles

- Never commit secrets, tokens, private keys, or real credentials.
- Keep environment variables documented by name and purpose, not by value; never expose server-only secrets to the browser.
- Protect GitHub accounts, branches, workflows, and deployment settings with appropriate access controls.
- Review dependencies for known vulnerabilities and keep them justified and maintained.

## Frontend and Forms

- Use framework-safe rendering and avoid injecting untrusted HTML.
- Validate and normalize user input on the client for usability, then validate again on the backend.
- Frontend validation is not a replacement for backend validation.
- Submit forms only over HTTPS to an approved backend or external form provider; the project does not currently assume a backend exists.
- Minimize collected personal data. The final fields, lawful basis, privacy wording, recipient, and retention period are TBD and require approval before implementation.
- The intended data flow is: user enters the minimum approved data in the browser, the frontend performs usability validation, and the approved backend/provider performs authoritative validation, spam controls, delivery, and storage or forwarding. The exact endpoint and provider are TBD.
- Avoid logging personal data or sensitive form contents in the browser, hosting platform, CI, analytics, or provider logs unless explicitly justified and approved.
- Define CSRF or equivalent request protection, spam protection, rate limiting, duplicate handling, and retention with the backend/integration owner.

## Platform and Integrations

- Use HTTPS and configure appropriate security headers at the hosting layer, including a reviewed Content Security Policy where practical.
- Review external links, redirects, embeds, fonts, analytics, form providers, and other third parties before use.
- Document each approved third party's data access, processing purpose, configuration, and removal path before integration.
- Handle errors with useful user messages while keeping stack traces and sensitive details out of the UI.
- Provide privacy notice and consent behavior as required by the applicable jurisdiction.

## Proportional operational requirements

- Production and form submission traffic must use HTTPS.
- Environment variable names and purposes may be documented, but values and populated environment files must never be committed. Browser-exposed values must not contain server-only secrets.
- Apply rate limiting and spam protection at the backend/provider boundary; frontend controls alone are insufficient.
- Define a minimal retention period for contact data and error records before launch. Until approved, do not assume indefinite storage.
- Keep operational logs useful for troubleshooting while excluding message bodies, contact details, tokens, and other unnecessary personal data.
- Review analytics, fonts, embeds, and form providers as external integrations with privacy implications; do not add them by assumption.

No actual secrets or credentials belong in this repository.
