# Glossy — Initial Design System

> This document contains proposals and placeholders. Only values explicitly approved by the design owner should become production tokens.

## Token Status

- **Proposed:** exploration values used for discussion.
- **Approved:** reviewed values ready for implementation.
- **TBD:** awaiting research, content, or stakeholder decision.

## Foundations

- **Color tokens:** Proposed semantic groups: background, surface, elevated surface, text, muted text, border, brand accent, focus, success, warning, and error. Exact colors and contrast checks: TBD.
- **Typography:** Proposed roles: display, heading, body, label, caption, and numeric/data text. Font families, weights, sizes, line heights, and licenses: TBD.
- **Spacing:** Use a consistent scale based on approved design measurements. Base unit and scale: TBD.
- **Breakpoints:** Define behavior around content needs rather than device names. Exact breakpoints: TBD.
- **Grid and containers:** Use a responsive column grid with a readable maximum content width. Column count, gutters, and max widths: TBD.
- **Border radius:** Establish a restrained radius scale for controls, cards, and media. Values: TBD.
- **Shadows:** Prefer subtle elevation with accessible contrast; exact recipes: TBD.

## Components

- **Buttons:** Primary, secondary, text, loading, disabled, focus-visible, and destructive only when necessary. Labels must describe the action.
- **Form controls:** Labels, hint text, required state, validation message, focus state, disabled state, and autocomplete behavior must be defined.
- **Cards:** Use consistent media ratio, content padding, heading hierarchy, and action placement. Avoid cards when they add no useful grouping.
- **Navigation:** Define desktop, mobile-open, mobile-closed, sticky, focus, and current-location states.
- **Icons:** Use one consistent icon source with accessible labels; decorative icons are hidden from assistive technology.
- **Motion:** Define duration and easing tokens only after concept approval; provide reduced-motion alternatives.

## Accessibility

Use semantic HTML, visible focus indicators, sufficient contrast, keyboard support, accessible names, logical focus order, scalable text, and tested reduced-motion behavior. Do not communicate meaning by color alone.
