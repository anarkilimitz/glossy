import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Fleet } from './Fleet';

afterEach(cleanup);

describe('Fleet', () => {
	it('renders the heading and description', () => {
		render(<Fleet />);
		expect(
			screen.getByRole('region', { name: 'Аренда автомобилей' })
		).toBeInTheDocument();
		expect(
			screen.getByText(
				'Автомобили для работы в такси и повседневных поездок в Екатеринбурге.'
			)
		).toBeInTheDocument();
	});

	it('renders configured categories and prices', () => {
		render(<Fleet />);
		expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(8);
		const categoryPrices = Array.from(
			document.querySelectorAll('.fleet-category__price')
		).map((price) => price.textContent?.replace(/\s/g, ''));
		expect(categoryPrices).toEqual(
			expect.arrayContaining([
				'от1 500₽/сутки'.replace(/\s/g, ''),
				'от2 200₽/сутки'.replace(/\s/g, ''),
				'от2 500₽/сутки'.replace(/\s/g, ''),
				'от3 000₽/сутки'.replace(/\s/g, ''),
			])
		);
	});

	it('renders vehicles, rental CTAs, and accessible images', () => {
		render(<Fleet />);
		expect(
			screen.getByRole('heading', { name: 'Chery Arrizo 8' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Haval F7' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Hyundai Solaris' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Volkswagen Polo' })
		).toBeInTheDocument();
		expect(
			screen.getAllByRole('link', { name: 'Уточнить по аренде' })
		).toHaveLength(4);
		expect(
			screen
				.getAllByRole('link', { name: 'Уточнить по аренде' })
				.every((link) => link.getAttribute('href') === '#contacts')
		).toBe(true);
		expect(
			screen.getAllByRole('img').every((image) => image.getAttribute('alt'))
		).toBe(true);
	});

	it('shows a stable placeholder when an image is missing', () => {
		render(<Fleet />);
		const image = screen.getByAltText('Автомобиль Chery Arrizo 8');
		fireEvent.error(image);
		expect(
			screen.getByRole('img', {
				name: 'Фотография автомобиля Chery Arrizo 8 пока не добавлена',
			})
		).toBeInTheDocument();
		expect(
			screen.queryByAltText('Автомобиль Chery Arrizo 8')
		).not.toBeInTheDocument();
	});
});
