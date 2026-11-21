import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Services } from './Services';

afterEach(cleanup);

describe('Services', () => {
  it('renders the section heading and description', () => {
    render(<MemoryRouter><Services /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 2, name: 'Наши услуги' })).toBeInTheDocument();
    expect(screen.getByText('Комплексные решения для обслуживания, ремонта и аренды автомобилей в Екатеринбурге')).toBeInTheDocument();
  });

  it('renders the three confirmed service cards and their lists', () => {
    render(<MemoryRouter><Services /></MemoryRouter>);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Кузовной ремонт и покраска' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Техническое обслуживание и ремонт' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Аренда автомобилей' })).toBeInTheDocument();
    expect(screen.getByText('Покраска отдельных элементов')).toBeInTheDocument();
    expect(screen.getByText('Обслуживание кондиционеров')).toBeInTheDocument();
    expect(screen.getByText('Comfort Plus')).toBeInTheDocument();
  });

  it('provides real anchor destinations for each CTA', () => {
    render(<MemoryRouter><Services /></MemoryRouter>);

    expect(screen.getByRole('link', { name: /Обсудить ремонт/ })).toHaveAttribute('href', '#contacts');
    expect(screen.getByRole('link', { name: /Записаться на обслуживание/ })).toHaveAttribute('href', '#contacts');
    expect(screen.getByRole('link', { name: /Смотреть автопрокат/ })).toHaveAttribute('href', '#rental');
  });

  it('exposes accessible section and list semantics', () => {
    render(<MemoryRouter><Services /></MemoryRouter>);

    expect(screen.getByRole('region', { name: 'Наши услуги' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByRole('list')).toHaveLength(3);
  });
});
