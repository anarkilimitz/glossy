# Glossy — Project Overview

## Status

Initial planning document. Confirmed business information is stated explicitly; exact address, legal details, and personal-data processing remain TBD.

## Project Summary

- **Project name:** Glossy
- **Project type:** Commercial automotive services website
- **Business domain:** Body repair (including painting), mechanical repair, and car rental
- **Company:** Космоавто112
- **City:** Екатеринбург
- **Phones:** +7 (965) 50 58 651; +7 (992) 09 50 666
- **Email:** cosmoavto112@yandex.ru
- **Purpose:** Help potential customers understand the available services, explore the business and its automotive work, and contact the company.

## Main Services

1. Body repair, including painting
2. Mechanical repair
3. Car rental

## Target Audience

Vehicle owners and prospective customers who need reliable automotive services, want to review the quality of completed work, or are interested in renting a car. Specific customer segments, geography, language requirements, and accessibility needs are TBD.

## Goals

### Business goals

- Present the service offering clearly and professionally.
- Build trust through strong presentation of the business and completed work.
- Generate qualified contact and service inquiries.
- Establish a foundation that can support future content and marketing work.

### Website goals

- Explain services quickly on desktop and mobile.
- Make contact actions easy to find and complete.
- Present automotive photography and portfolio work effectively.
- Provide a credible, accessible, responsive experience.

## Core User Needs

- Understand whether Glossy provides the needed service.
- Learn enough about the process or offering to decide on next steps.
- View evidence of automotive work, where approved content is available.
- Ask a question or request contact without unnecessary friction.
- Use the site comfortably on a phone, tablet, or desktop.

## Scope

The initial scope is a responsive marketing website with a landing page made up of six content sections, plus shared Header and Footer regions: Hero, Services, About/Advantages, Portfolio, Car Rental, and Contact/Final CTA. It also includes a contact form, legal pages as required, SEO foundations, accessibility considerations, and a custom 404 page. Header and Footer are structural elements and are not counted as content sections.

## Landing page structure

The following terminology is used consistently across the project:

- **Header/navigation:** Shared structural region containing the wordmark, primary navigation, contact CTA, and responsive menu control. It supports access to the page sections but is not counted as a content section.
- **Footer:** Shared structural region containing concise navigation, confirmed contact paths, and approved legal links when available. It is not counted as a content section.
- **Hero:** Opening value proposition and primary next action.
- **Services:** The three approved service directions: body repair, mechanical repair, and car rental. Painting is a body-repair subservice.
- **About/Advantages:** Approved company context, process information, or differentiators.
- **Portfolio:** Approved examples of completed automotive work.
- **Car Rental:** Approved rental offering information and inquiry path.
- **Contact/Final CTA:** Contact details, preliminary contact form, privacy notice/link, and final conversion action.

This is six content sections plus shared Header and Footer regions, not eight content sections.

## Out of Scope for the Initial Release

- Online booking or payment
- Real-time vehicle availability
- Customer accounts or authentication
- Quote calculation or pricing engine
- Inventory management
- CRM, ERP, or workshop-management integration
- Review or testimonial system
- Multilingual support unless later approved

## Initial Assumptions

- The first release is primarily informational and lead-generating.
- Contact form submission will require an approved backend or third-party service; the provider is TBD.
- The final visual direction and design tokens require approval before implementation.
- Content, imagery, portfolio permissions, service details, and legal copy will be supplied or approved by the business.

## Unknown Business Information

The following are intentionally TBD: exact address, legal details, opening hours, guarantees, certifications, staff information, testimonials, social profiles, analytics requirements, privacy contact, legal jurisdiction, and personal-data processing. Confirmed prices and vehicles are maintained in `docs/development/IMPLEMENTATION_SPEC.md`.

## Decision and unknowns register

| Question / unknown | Current status or assumption | Priority | Affected area | Required decision before implementation |
|---|---|---:|---|---|
| Which business services, descriptions, and claims are final? | Three service directions are approved; detailed claims and advantages still require approval. | High | Requirements, content, UI | Approve service copy and permitted claims. |
| What are the final contact form fields and submission provider? | A preliminary contract is proposed; fields, endpoint/provider, and workflow are not confirmed. | High | Contact flow, security, deployment | Approve the minimum fields, provider, and ownership of submission handling. |
| What legal pages, privacy wording, and jurisdiction apply? | Privacy is expected; terms and jurisdiction are TBD. | High | Requirements, security, release | Obtain approved legal content and consent requirements. |
| Which visual direction and assets are approved? | Light Minimal v1 is approved; concrete tokens, assets, permissions, breakpoints, and font settings remain preliminary. | High | Design, landing page | Finalize production-ready content/assets and design values. |
| What hosting, domain, analytics, and third-party integrations are needed? | Vercel is proposed; all operational details are TBD. | Medium | Architecture, deployment, privacy | Review and approve the integration and operating model. |
