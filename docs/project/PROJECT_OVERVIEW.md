# Glossy — Project Overview

## Status

Initial planning document. Business-specific details remain TBD unless explicitly stated.

## Project Summary

- **Project name:** Glossy
- **Project type:** Commercial automotive services website
- **Business domain:** Automotive maintenance, repair, body repair, professional car painting, and car rental
- **Purpose:** Help potential customers understand the available services, explore the business and its automotive work, and contact the company.

## Main Services

1. Automotive maintenance and repair
2. Body repair
3. Professional car painting
4. Car rental

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

The initial scope is a responsive marketing website with a landing page made up of six content sections, plus a shared header/navigation region: Hero, Services, About/Advantages, Portfolio, Car Rental, and Contact/Final CTA. It also includes a contact form, legal pages as required, SEO foundations, accessibility considerations, and a custom 404 page. The header is structural navigation and is not counted as a content section.

## Landing page structure

The following terminology is used consistently across the project:

- **Header/navigation:** Shared structural region containing the wordmark, primary navigation, contact CTA, and responsive menu control. It supports access to the page sections but is not counted as a content section.
- **Hero:** Opening value proposition and primary next action.
- **Services:** The four proposed core service categories.
- **About/Advantages:** Approved company context, process information, or differentiators.
- **Portfolio:** Approved examples of completed automotive work.
- **Car Rental:** Approved rental offering information and inquiry path.
- **Contact/Final CTA:** Contact details, preliminary contact form, privacy notice/link, and final conversion action.

This is six content sections plus the header/navigation region, not seven content sections.

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

The following are intentionally TBD: legal company name, address, service area, phone number, email address, opening hours, pricing, rental fleet and availability, guarantees, certifications, staff information, testimonials, social profiles, analytics requirements, privacy contact, and legal jurisdiction.

## Decision and unknowns register

| Question / unknown | Current status or assumption | Priority | Affected area | Required decision before implementation |
|---|---|---:|---|---|
| Which business services, descriptions, and claims are final? | The four service categories are planning scope; detailed content is TBD. | High | Requirements, content, UI | Approve service copy and permitted claims. |
| What are the final contact form fields and submission provider? | A preliminary contract is proposed; fields, endpoint/provider, and workflow are not confirmed. | High | Contact flow, security, deployment | Approve the minimum fields, provider, and ownership of submission handling. |
| What legal pages, privacy wording, and jurisdiction apply? | Privacy is expected; terms and jurisdiction are TBD. | High | Requirements, security, release | Obtain approved legal content and consent requirements. |
| Which visual direction and assets are approved? | Design direction, imagery, portfolio permissions, and tokens require approval. | High | Design, landing page | Approve the concept and production-ready content/assets. |
| What hosting, domain, analytics, and third-party integrations are needed? | Vercel is proposed; all operational details are TBD. | Medium | Architecture, deployment, privacy | Review and approve the integration and operating model. |
