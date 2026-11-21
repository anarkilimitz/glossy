import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup } from '@testing-library/react';
import { Hero } from './Hero';

afterEach(cleanup);

describe('Hero', () => {
  it('renders the company introduction and service directions', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1, name: /Ремонт и аренда автомобилей/ })).toBeInTheDocument();
    expect(screen.getByText(/Кузовной ремонт и покраска/)).toBeInTheDocument();
    expect(screen.getByText('Космоавто112 · Екатеринбург')).toBeInTheDocument();
  });

  it('provides prepared anchor links for the next landing sections', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);

    expect(screen.getByRole('link', { name: 'Смотреть услуги' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'Наши работы' })).toHaveAttribute('href', '#portfolio');
  });

  it('exposes an accessible landmark and visual description', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);

    expect(screen.getByRole('region', { name: /Ремонт и аренда автомобилей/ })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Направления Космоавто112' })).toBeInTheDocument();
  });
});
