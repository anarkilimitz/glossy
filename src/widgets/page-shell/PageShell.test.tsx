import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PageShell } from './PageShell';

describe('PageShell', () => {
  it('renders shared header, main content and footer once', () => {
    render(<MemoryRouter><PageShell><p>Page content</p></PageShell></MemoryRouter>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveTextContent('Page content');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
