import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Portfolio } from './Portfolio';

afterEach(cleanup);

describe('Portfolio', () => {
  it('renders the portfolio section with configured work cards', () => {
    render(<Portfolio />);

    expect(screen.getByRole('region', { name: 'Наши работы' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });

  it('renders names, descriptions, and before/after labels', () => {
    render(<Portfolio />);

    expect(screen.getByRole('heading', { name: 'Восстановление кузова после повреждения' })).toBeInTheDocument();
    expect(screen.getByText('Подготовка, восстановление геометрии и покраска повреждённых элементов.')).toBeInTheDocument();
    expect(screen.getAllByText('До')).toHaveLength(4);
    expect(screen.getAllByText('После')).toHaveLength(4);
  });

  it('provides accessible image alternatives and handles missing images', () => {
    render(<Portfolio />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(8);
    expect(images.every((image) => image.getAttribute('alt'))).toBe(true);

    fireEvent.error(images[0]);

    expect(screen.queryByAltText('До ремонта: Восстановление кузова после повреждения')).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'До ремонта: фотография пока не добавлена' })).toBeInTheDocument();
  });
});
