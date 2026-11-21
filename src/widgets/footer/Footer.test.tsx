import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders confirmed contact paths and service directions', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Екатеринбург');
    expect(screen.getByRole('link', { name: '+7 (992) 09 50 666' })).toHaveAttribute('href', 'tel:+79920950666');
    expect(screen.getByRole('link', { name: 'cosmoavto112@yandex.ru' })).toHaveAttribute('href', 'mailto:cosmoavto112@yandex.ru');
    expect(screen.getAllByText('Автопрокат').length).toBeGreaterThan(0);
  });
});
