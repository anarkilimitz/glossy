import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { LandingPage } from '../pages/LandingPage';

describe('LandingPage', () => {
  it('renders the project foundation message', () => {
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Glossy' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Космоавто112, на главную/ })).toBeInTheDocument();
  });
});
