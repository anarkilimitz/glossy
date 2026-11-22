import { useState } from 'react';
import {
	fleetCategories,
	fleetVehicles,
	type FleetVehicle,
} from '../../shared/config/fleet';
import { Button, Card, Section, Typography } from '../../shared/ui';

function formatPrice(price: number) {
	return `${price.toLocaleString('ru-RU')} ₽`;
}

function FleetImage({ vehicle }: { vehicle: FleetVehicle }) {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return (
			<div
				className="fleet-card__placeholder"
				role="img"
				aria-label={`Фотография автомобиля ${vehicle.name} пока не добавлена`}
			>
				<span>Фотография пока не добавлена</span>
			</div>
		);
	}

	return (
		<img
			className="fleet-card__image"
			src={vehicle.image}
			alt={`Автомобиль ${vehicle.name}`}
			loading="lazy"
			onError={() => setHasError(true)}
		/>
	);
}

export function Fleet() {
	return (
		<Section
			id="rental"
			className="fleet"
			aria-labelledby="fleet-title"
			spacing="large"
			background="muted"
		>
			<div className="fleet__intro">
				<Typography as="p" variant="body-small" className="fleet__eyebrow">
					Автопрокат
				</Typography>
				<Typography
					as="h2"
					variant="h2"
					id="fleet-title"
					className="fleet__title"
				>
					Аренда автомобилей
				</Typography>
				<Typography as="p" variant="body-large" className="fleet__description">
					Автомобили для работы в такси и повседневных поездок в Екатеринбурге.
				</Typography>
			</div>

			<div
				className="fleet__categories"
				aria-labelledby="fleet-categories-title"
			>
				<Typography
					as="h3"
					variant="h3"
					id="fleet-categories-title"
					className="fleet__subheading"
				>
					Категории
				</Typography>
				<div className="fleet__category-grid">
					{fleetCategories.map((category) => (
						<Card key={category.id} className="fleet-category">
							<Typography
								as="h4"
								variant="h4"
								className="fleet-category__title"
							>
								{category.name}
							</Typography>
							<Typography
								as="p"
								variant="body"
								className="fleet-category__description"
							>
								{category.description}
							</Typography>
							<p className="fleet-category__price">
								<span>от</span> {formatPrice(category.priceFrom)}
								<small>/сутки</small>
							</p>
						</Card>
					))}
				</div>
			</div>

			<div className="fleet__vehicles" aria-labelledby="fleet-vehicles-title">
				<Typography
					as="h3"
					variant="h3"
					id="fleet-vehicles-title"
					className="fleet__subheading"
				>
					Автопарк
				</Typography>
				<div className="fleet__vehicle-grid">
					{fleetVehicles.map((vehicle) => (
						<Card key={vehicle.id} className="fleet-card">
							<div className="fleet-card__media">
								<FleetImage vehicle={vehicle} />
							</div>
							<div className="fleet-card__content">
								<Typography as="h4" variant="h4" className="fleet-card__title">
									{vehicle.name}
								</Typography>
								<p className="fleet-card__price">
									{formatPrice(vehicle.pricePerDay)}
									<small>/сутки</small>
								</p>
								<Button as="a" href="#contacts" variant="outline" size="medium">
									Уточнить по аренде
								</Button>
							</div>
						</Card>
					))}
				</div>
			</div>

			<div className="fleet__buyout">
				<div>
					<Typography as="h3" variant="h3" className="fleet__buyout-title">
						Индивидуальный выкуп
					</Typography>
					<Typography
						as="p"
						variant="body"
						className="fleet__buyout-description"
					>
						Рассматриваете индивидуальный выкуп автомобиля? Обсудим условия
						отдельно.
					</Typography>
				</div>
				<Button as="a" href="#contacts" variant="primary" size="medium">
					Обсудить выкуп
				</Button>
			</div>
		</Section>
	);
}
