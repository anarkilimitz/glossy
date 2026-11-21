import { Button, Card, IconButton, Link, Section, Typography } from '../shared/ui';

export function UiDemoPage() {
  return (
    <Section aria-labelledby="ui-demo-title" background="muted">
      <Typography as="h1" variant="h1" id="ui-demo-title">Glossy UI primitives</Typography>
      <Typography variant="body-large">Development-only showcase of the reusable foundation.</Typography>

      <Section as="div" spacing="small" contained={false} aria-labelledby="typography-title">
        <Typography as="h2" variant="h2" id="typography-title">Typography</Typography>
        <Typography as="p" variant="display">Display sample</Typography>
        <Typography as="p" variant="body">Body sample</Typography>
        <Typography as="p" variant="caption">Caption sample</Typography>
      </Section>

      <Section as="div" spacing="small" contained={false} aria-labelledby="controls-title">
        <Typography as="h2" variant="h2" id="controls-title">Controls</Typography>
        <Button>Primary</Button>{' '}
        <Button variant="secondary" size="small">Secondary</Button>{' '}
        <Button variant="outline" size="large">Outline</Button>{' '}
        <Button variant="text" disabled>Disabled</Button>{' '}
        <IconButton aria-label="Open menu"><span aria-hidden="true">☰</span></IconButton>
      </Section>

      <Card>
        <Typography as="h2" variant="h3">Card</Typography>
        <Typography as="p" variant="body">A neutral surface for grouped content.</Typography>
        <Link to="/">Internal link</Link>{' · '}
        <Link to="https://example.com" external>External link</Link>
      </Card>
    </Section>
  );
}
