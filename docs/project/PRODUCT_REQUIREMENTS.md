# Glossy — Preliminary Product Requirements

> This is a preliminary specification. Content, integrations, legal requirements, and acceptance details must be reviewed with stakeholders before implementation.

## Global Requirements

- Responsive layouts across supported desktop, tablet, and mobile widths.
- Keyboard-accessible navigation and form controls.
- SEO metadata, semantic HTML, appropriate headings, and share metadata where approved.
- Clear loading, success, empty, and error states.
- No fabricated prices, testimonials, credentials, vehicle availability, guarantees, or reviews.

## Shared structural region: Header and Navigation

**Purpose:** Provide orientation and fast access to key sections and contact actions.

**Content/UI:** Glossy wordmark or approved logo, navigation links, primary contact CTA, responsive menu control.

**Interactions:** Anchor navigation on the landing page; mobile menu opens, closes, and supports Escape and keyboard focus management.

**Responsive considerations:** Desktop navigation becomes a compact mobile menu; controls remain touch-friendly.

**Acceptance criteria:** Users can reach every primary section; active/open states are understandable; navigation is keyboard and screen-reader usable.

The header/navigation is shared structural chrome, not one of the six content sections of the landing page.

## 1. Hero

**Purpose:** Communicate the value proposition and prompt a relevant next action.

**Content/UI:** Approved headline, supporting copy, primary and optional secondary CTA, approved automotive visual.

**Interactions:** CTAs navigate to services or contact; media does not block content or controls.

**Responsive considerations:** Text remains readable over or beside imagery; composition works without relying on hover.

**Acceptance criteria:** The service category is clear quickly; at least one prominent contact path is available; layout remains usable at narrow widths.

## 2. Services

**Purpose:** Explain the three approved service directions.

**Content/UI:** Body repair, mechanical repair, and car rental. Painting is presented within body repair, with separate descriptions for element painting, local repair, body repair with painting, and welding work.

**Interactions:** Cards may link to contact or future detail pages; interaction behavior must be consistent.

**Responsive considerations:** Cards reflow without awkward truncation or excessive scrolling.

**Acceptance criteria:** All three directions are visible and distinguishable; painting is not presented as a fourth direction; the body-repair subservices are understandable; no unsupported claims are presented.

## 3. About the Company / Advantages

**Purpose:** Give visitors context and reasons to consider contacting Glossy.

**Content/UI:** Approved company story, process overview, or differentiators. Claims require business approval.

**Interactions:** Optional expandable details only if needed; no invented credentials or guarantees.

**Responsive considerations:** Maintain hierarchy and legibility alongside supporting imagery.

**Acceptance criteria:** Content is factual or clearly marked as pending; users can understand the intended positioning.

## 4. Portfolio / Completed Automotive Projects

**Purpose:** Show the quality and range of completed work.

**Content/UI:** Approved project images, captions, categories, and optional before/after presentation.

**Interactions:** Gallery viewing or filtering may be included if content volume justifies it; images need meaningful alternative text.

**Responsive considerations:** Preserve image quality and avoid layout shift; support touch interaction.

**Acceptance criteria:** Every displayed asset is approved for use, loads with an appropriate fallback, and does not imply unsupported results.

## 5. Car Rental

**Purpose:** Explain the rental offering and lead users to an inquiry.

**Content/UI:** Approved rental description, vehicle information only when current and confirmed, terms summary, CTA.

**Interactions:** CTA opens contact flow or approved inquiry path; no real-time availability is implied unless implemented.

**Responsive considerations:** Rental content and CTA remain clear on mobile.

**Acceptance criteria:** The section clearly states how to inquire; unavailable data is omitted or marked TBD.

## 6. Contact / Final CTA

**Purpose:** Convert interest into a contact or service inquiry.

**Content/UI:** Contact form, approved contact details, privacy notice/link, final CTA.

**Interactions:** Client-side validation, submit loading state, success confirmation, recoverable error state, and spam protection as approved.

**Responsive considerations:** Inputs are easy to use with touch and mobile keyboards; errors are visible near fields and summarized accessibly.

**Acceptance criteria:** Required fields and formats are communicated; invalid submissions are blocked; submission states are unambiguous; backend validation remains authoritative.

## Shared structural region: Footer

**Purpose:** Close the page with concise navigation, confirmed contact paths, and links to legal documents when available.

**Content/UI:** Космоавто112 name or approved logo, concise navigation, confirmed phones and email, city, and links to approved legal documents. Exact address, legal details, and personal-data processing content remain TBD.

**Acceptance criteria:** Footer is present on the landing page and applicable routes; confirmed contact links are usable; no unconfirmed address or legal claim is shown; legal links appear only when approved documents exist; the footer remains compact and accessible on mobile.

### Preliminary contact form contract (proposed)

This is a proposed product and integration boundary, not a confirmed final field list or business workflow. The minimum fields, labels, consent wording, provider, recipient, and retention period remain TBD.

| Field or behavior | Preliminary requirement | Status |
|---|---|---|
| Customer name | A name field may be collected to address the inquiry; required/optional status is TBD. | Proposed; business decision required |
| Contact method | At least one approved contact method is needed; the exact field(s), format(s), and required/optional status are TBD. | Proposed; business decision required |
| Service or inquiry details | A free-text message or equivalent inquiry details field is proposed; required/optional status and length are TBD. | Proposed; business decision required |
| Service category | A service selector may be useful, but whether it is included and its options are TBD. | Optional proposal |
| Consent/privacy | Show an approved privacy notice and collect consent where required by the applicable jurisdiction and processing basis. | Required in principle; wording and mechanism TBD |

Validation should provide clear labels, format checks, length limits, accessible field-level errors, and a summary for invalid submission. The backend or approved external provider remains authoritative for validation and acceptance.

The form should expose these states:

- **Idle:** Inputs and submit control are available.
- **Loading:** The submission control is disabled and progress is communicated accessibly.
- **Success:** A clear confirmation is shown without implying a response time that has not been approved.
- **Error:** A recoverable, non-sensitive message is shown and entered values are preserved where safe.
- **Retry:** The user can retry after a transient failure without re-entering the form.
- **Duplicate prevention:** Disable or otherwise guard repeated submission while a request is in flight; the integration should also use an idempotency or duplicate-detection approach where supported.

Spam protection, rate limiting, personal-data handling, logging, retention, and the backend/provider responsibility must be agreed with the implementation owner. The frontend must not be treated as the security boundary, and no backend is currently assumed to exist.

## Additional Pages and Features

- Privacy Policy page with approved legal content.
- Terms of Service page if required by the business and jurisdiction.
- Custom 404 page with a useful recovery link.
- Responsive navigation, semantic SEO metadata, and accessible focus states.
- Analytics and third-party services only after approval and privacy review.

## Stage 10 — Fleet 3D carousel

The landing page includes a dedicated fleet visual section immediately before the footer. It presents four confirmed rental vehicles — Chery Arrizo 8, Haval F7, Hyundai Solaris, and Volkswagen Polo — with the active vehicle in focus, secondary vehicles creating perspective, model name, and confirmed daily rental price. The section supports responsive layouts, keyboard-accessible previous/next controls, cyclic manual navigation, automatic rotation, hover/focus pausing, image fallbacks, and reduced-motion preferences.
