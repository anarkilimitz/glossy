import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import {
	fleetCarouselVehicles,
	type FleetCarouselVehicle,
} from '../../shared/config/fleet-carousel';
import { Section, Typography } from '../../shared/ui';

const AUTO_ADVANCE_MS = 4500;

function formatPrice(price: number) {
	return `${price.toLocaleString('ru-RU')} ₽`;
}

function FleetCarouselImage({ vehicle }: { vehicle: FleetCarouselVehicle }) {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return (
			<div
				className="fleet-carousel__placeholder"
				role="img"
				aria-label={`Фотография автомобиля ${vehicle.name} пока не добавлена`}
			>
				<span>Фотография пока не добавлена</span>
			</div>
		);
	}

	return (
		<img
			className="fleet-carousel__image"
			src={vehicle.image}
			alt={`Автомобиль ${vehicle.name}`}
			loading="lazy"
			onError={() => setHasError(true)}
		/>
	);
}

export function FleetCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const reducedMotionRef = useRef(false);

	useEffect(() => {
		if (!window.matchMedia) return undefined;
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotionRef.current = mediaQuery.matches;
		const handleChange = (event: MediaQueryListEvent) => {
			reducedMotionRef.current = event.matches;
		};
		mediaQuery.addEventListener?.('change', handleChange);
		return () => mediaQuery.removeEventListener?.('change', handleChange);
	}, []);

	useEffect(() => {
		if (isPaused || reducedMotionRef.current) return undefined;
		const timer = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % fleetCarouselVehicles.length);
		}, AUTO_ADVANCE_MS);
		return () => window.clearInterval(timer);
	}, [isPaused]);

	const move = (step: number) => {
		setActiveIndex(
			(current) =>
				(current + step + fleetCarouselVehicles.length) %
				fleetCarouselVehicles.length
		);
		setIsPaused(true);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			move(-1);
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			move(1);
		}
	};

	return (
		<Section
			id="fleet-carousel"
			className="fleet-carousel"
			aria-labelledby="fleet-carousel-title"
			spacing="large"
			background="default"
		>
			<div className="fleet-carousel__intro">
				<Typography
					as="p"
					variant="body-small"
					className="fleet-carousel__eyebrow"
				>
					Автопарк
				</Typography>
				<Typography
					as="h2"
					variant="h2"
					id="fleet-carousel-title"
					className="fleet-carousel__title"
				>
					Выберите свой автомобиль
				</Typography>
				<Typography
					as="p"
					variant="body-large"
					className="fleet-carousel__description"
				>
					Автомобили для работы, поездок и повседневных задач.
				</Typography>
			</div>

			<div
				ref={carouselRef}
				className="fleet-carousel__viewport"
				tabIndex={0}
				aria-roledescription="карусель"
				aria-label="Автомобили для аренды"
				onKeyDown={handleKeyDown}
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
				onFocus={() => setIsPaused(true)}
				onBlur={(event) => {
					if (!event.currentTarget.contains(event.relatedTarget))
						setIsPaused(false);
				}}
			>
				<button
					type="button"
					className="fleet-carousel__control fleet-carousel__control--previous"
					aria-label="Предыдущий автомобиль"
					onClick={() => move(-1)}
				>
					<span aria-hidden="true">←</span>
				</button>
				<div className="fleet-carousel__track">
					{fleetCarouselVehicles.map((vehicle, index) => {
						const offset =
							(index - activeIndex + fleetCarouselVehicles.length) %
							fleetCarouselVehicles.length;
						const normalizedOffset =
							offset > fleetCarouselVehicles.length / 2
								? offset - fleetCarouselVehicles.length
								: offset;
						const position =
							normalizedOffset === 0
								? 'active'
								: normalizedOffset === -1
								? 'previous'
								: normalizedOffset === 1
								? 'next'
								: 'far';
						return (
							<article
								key={vehicle.id}
								className={`fleet-carousel__slide fleet-carousel__slide--${position}`}
								aria-hidden={position !== 'active'}
							>
								<div className="fleet-carousel__media">
									<FleetCarouselImage vehicle={vehicle} />
								</div>
								<div className="fleet-carousel__content">
									<Typography
										as="h3"
										variant="h3"
										className="fleet-carousel__vehicle-name"
									>
										{vehicle.name}
									</Typography>
									<p className="fleet-carousel__price">
										<span>{formatPrice(vehicle.pricePerDay)}</span>{' '}
										<small>/сутки</small>
									</p>
								</div>
							</article>
						);
					})}
				</div>
				<button
					type="button"
					className="fleet-carousel__control fleet-carousel__control--next"
					aria-label="Следующий автомобиль"
					onClick={() => move(1)}
				>
					<span aria-hidden="true">→</span>
				</button>
			</div>
			<p className="fleet-carousel__status" aria-live="polite">
				Автомобиль {activeIndex + 1} из {fleetCarouselVehicles.length}
			</p>
		</Section>
	);
}
