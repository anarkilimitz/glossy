import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { About } from './About';

afterEach(cleanup);

describe('About', () => {
  it('renders the confirmed company heading and description', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 2, name: 'О компании Космоавто112' })).toBeInTheDocument();
    expect(screen.getByText(/Космоавто112 — компания в Екатеринбурге/)).toBeInTheDocument();
  });

  it('renders the three confirmed business directions', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    expect(screen.getByText('Кузовной ремонт и покраска автомобилей')).toBeInTheDocument();
    expect(screen.getByText('Техническое обслуживание и ремонт')).toBeInTheDocument();
    expect(screen.getByText('Аренда автомобилей для работы в такси')).toBeInTheDocument();
  });

  it('exposes accessible section and visual landmarks without fictional actions', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    expect(screen.getByRole('region', { name: 'О компании Космоавто112' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Три направления работы Космоавто112 в Екатеринбурге' })).toBeInTheDocument();
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});
