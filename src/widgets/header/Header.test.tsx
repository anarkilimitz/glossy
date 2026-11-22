import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { Header } from './Header';

function renderHeader() { return render(<MemoryRouter><Header /></MemoryRouter>); }
afterEach(cleanup);

describe('Header', () => {
  it('renders primary navigation, phone and CTA', () => {
    renderHeader();
    expect(screen.getByRole('navigation', { name: 'Основная навигация' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Главная' })).toHaveAttribute('href', '/#home');
    expect(screen.getByRole('link', { name: 'Услуги' })).toHaveAttribute('href', '/#services');
    expect(screen.getByRole('link', { name: 'О компании' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Наши работы' })).toHaveAttribute('href', '/#portfolio');
    expect(screen.getByRole('link', { name: 'Автопрокат' })).toHaveAttribute('href', '/#rental');
    expect(screen.getByRole('link', { name: 'Контакты' })).toHaveAttribute('href', '/#contacts');
    expect(screen.getByRole('link', { name: '+7 (965) 50 58 651' })).toHaveAttribute('href', 'tel:+79655058651');
    expect(screen.getByRole('button', { name: 'Записаться на ремонт' })).toBeInTheDocument();
  });

  it('opens the mobile menu and closes it with Escape', () => {
    renderHeader();
    const menuButton = screen.getByRole('button', { name: 'Открыть меню' });
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation', { name: 'Мобильная навигация' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Закрыть меню' })).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'Открыть меню' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu after selecting navigation', () => {
    renderHeader();
    fireEvent.click(screen.getByRole('button', { name: 'Открыть меню' }));
    fireEvent.click(screen.getAllByRole('link', { name: 'Контакты' }).at(-1)!);
    expect(screen.getByRole('button', { name: 'Открыть меню' })).toBeInTheDocument();
  });
});
