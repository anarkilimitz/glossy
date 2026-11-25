# Glossy — Design Brief

## Status

Light Minimal v1 is the approved visual direction. Exact colors, sizes, breakpoints, imagery, and other design-token values remain preliminary until finalized.

## Visual Concept

Glossy should feel like a premium automotive studio: modern, clean, confident, professional, and precise. The experience should use strong visual hierarchy, spacious layouts, high-quality photography, carefully controlled typography, and subtle motion without becoming theatrical or template-like.

## Brand Personality

Confident, refined, capable, trustworthy, and detail-oriented. The tone should avoid both generic automotive clichés and unsupported luxury claims.

## Audience

Vehicle owners and prospective customers evaluating body repair (including painting), mechanical repair, or rental services. Audience demographics, location, and purchasing context are TBD.

## Research Needed

- Premium automotive service and detailing websites
- Independent repair and restoration studios
- Automotive editorial photography and showroom presentation
- Accessibility patterns for image-led marketing sites
- Competitor patterns in the confirmed service area

References must be documented before borrowing recognizable patterns; no competitor assets should be copied.

## Direction

- **Photography:** Real, high-resolution, permissioned vehicle and workshop imagery; emphasize material, craft, process, and controlled lighting.
- **Typography:** Strong display hierarchy paired with highly legible body text; Medeo Sans is the project font, loaded locally from `medeo-font@1.1.0` as a variable WOFF2 with Latin/Cyrillic coverage under OFL 1.1. Medeo Sans Display is not loaded separately; the Sans variable font provides optical-size behavior for large headings.
- **Color:** Restrained premium palette with a clear surface, text, accent, and status system; exact values TBD.
- **Layout:** Intentional whitespace, clear rhythm, asymmetry only when it improves hierarchy, and a consistent content container.
- **Animation:** Subtle entrance, hover, and transition motion; respect reduced-motion preferences and never hide essential content.
- **Desktop:** Editorial composition, generous imagery, precise alignment, and clear CTA hierarchy.
- **Mobile:** Fast comprehension, thumb-friendly controls, concise content blocks, stable media crops, and a simple navigation model.

## UI States

Design default, hover, focus-visible, active, disabled, loading, success, error, empty, and reduced-motion states before implementation.

## Constraints

- Do not treat preliminary design-token values as final without explicit finalization.
- Do not use unlicensed imagery or fabricated business content.
- Design for performance, accessibility, responsive behavior, and content changes.
- Keep the visual system implementable with the proposed stack and without unnecessary complexity.

## Stage 10 — Fleet carousel direction

The approved Light Minimal v1 direction is extended with a large 3D composition of real vehicle photographs. The focused vehicle dominates the composition while side vehicles follow a shallow arc created with perspective, scale, and restrained rotation. The section uses a light surface, CSS pseudo-element circles/accents for depth, and no background imagery or theatrical effects. Vehicle photography remains content supplied and approved by the project owner.
