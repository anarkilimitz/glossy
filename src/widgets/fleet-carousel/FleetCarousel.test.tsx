import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FleetCarousel } from './FleetCarousel';

afterEach(cleanup);

describe('FleetCarousel', () => {
  it('renders the heading, four vehicles, names, and prices', () => {
    render(<FleetCarousel />);
    expect(screen.getByRole('region', { name: 'Выберите свой автомобиль' })).toBeInTheDocument();
    expect(document.querySelectorAll('.fleet-carousel__slide')).toHaveLength(4);
    expect(screen.getByText('Chery Arrizo 8')).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.textContent === '3 000 ₽')).toBeInTheDocument();
  });

  it('cycles through vehicles with previous and next controls', () => {
    render(<FleetCarousel />);
    const next = screen.getByRole('button', { name: 'Следующий автомобиль' });
    const previous = screen.getByRole('button', { name: 'Предыдущий автомобиль' });
    fireEvent.click(next);
    expect(screen.getByText('Автомобиль 2 из 4')).toBeInTheDocument();
    fireEvent.click(previous);
    fireEvent.click(previous);
    expect(screen.getByText('Автомобиль 4 из 4')).toBeInTheDocument();
  });

  it('pauses automatic rotation when focused and advances after the interval', () => {
    vi.useFakeTimers();
    render(<FleetCarousel />);
    fireEvent.focus(screen.getByLabelText('Автомобили для аренды'));
    act(() => vi.advanceTimersByTime(4500));
    expect(screen.getByText('Автомобиль 1 из 4')).toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText('Автомобили для аренды'));
    act(() => vi.advanceTimersByTime(4500));
    expect(screen.getByText((_, element) => element?.textContent === 'Автомобиль 2 из 4')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders an accessible fallback when an image is missing', () => {
    render(<FleetCarousel />);
    fireEvent.error(screen.getByAltText('Автомобиль Chery Arrizo 8'));
    expect(screen.getByRole('img', { name: 'Фотография автомобиля Chery Arrizo 8 пока не добавлена' })).toBeInTheDocument();
  });
});
