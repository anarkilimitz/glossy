import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { LandingPage } from '../pages/LandingPage';

describe('LandingPage', () => {
  it('renders the landing page hero', () => {
    render(<MemoryRouter><LandingPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /Ремонт и аренда автомобилей/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Космоавто112, на главную/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Наши услуги' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'О компании Космоавто112' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Смотреть автопрокат/ })).toHaveAttribute('href', '#rental');
  });
});
