import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';
import { Card } from './Card';
import { Link } from './Link';
import { Section } from './Section';
import { Typography } from './Typography';

describe('UI primitives', () => {
  it('renders a button with its native type and label', () => {
    render(<Button type="submit">Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'submit');
  });

  it('keeps disabled buttons unavailable', () => {
    render(<Button disabled>Unavailable</Button>);
    expect(screen.getByRole('button', { name: 'Unavailable' })).toBeDisabled();
  });

  it('uses the explicitly requested typography element', () => {
    render(<Typography as="h2" variant="display">Section title</Typography>);
    expect(screen.getByRole('heading', { level: 2, name: 'Section title' })).toBeInTheDocument();
  });

  it('renders internal and external links with the appropriate element', () => {
    render(<MemoryRouter><><Link to="/services">Services</Link><Link to="https://example.com">Website</Link></></MemoryRouter>);
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
    expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://example.com');
  });

  it('renders card content and a semantic section', () => {
    render(<Section aria-label="Services"><Card>Repair</Card></Section>);
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByText('Repair')).toBeInTheDocument();
  });
});
