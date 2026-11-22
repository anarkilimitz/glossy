# Fleet carousel images

These folders hold approved, real vehicle photographs for the Stage 10 fleet carousel. Add only imagery supplied or approved by the project owner; no stock, generated, or third-party photographs are included by default.

- Use WebP or AVIF where possible, with a WebP fallback if required by the deployment target.
- Recommended source size: at least 1600 × 1000 px, with a 16:10 aspect ratio.
- Name the primary image `car.webp` (or update `src/shared/config/fleet-carousel.ts` when using another filename).
- Keep one vehicle's files inside its matching folder: `chery-arrizo-8`, `haval-f7`, `hyundai-solaris`, or `volkswagen-polo`.

When an image is absent or fails to load, the component keeps the media box dimensions and shows an accessible text fallback.
