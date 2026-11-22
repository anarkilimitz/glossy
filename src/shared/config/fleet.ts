export type FleetCategory = {
	id: string;
	name: string;
	priceFrom: number;
	description: string;
};

export type FleetVehicle = {
	id: string;
	name: string;
	pricePerDay: number;
	image: string;
};

export const fleetCategories: readonly FleetCategory[] = [
	{
		id: 'economy',
		name: 'Economy',
		priceFrom: 1500,
		description: 'Доступный вариант для повседневных поездок.',
	},
	{
		id: 'comfort',
		name: 'Comfort',
		priceFrom: 2200,
		description: 'Вариант для регулярных поездок по Екатеринбургу.',
	},
	{
		id: 'comfort-plus',
		name: 'Comfort Plus',
		priceFrom: 2500,
		description: 'Более высокий уровень в линейке доступных категорий.',
	},
	{
		id: 'business',
		name: 'Business',
		priceFrom: 3000,
		description: 'Категория для деловых и повседневных поездок.',
	},
] as const;

export const fleetVehicles: readonly FleetVehicle[] = [
	{
		id: 'chery-arrizo-8',
		name: 'Chery Arrizo 8',
		pricePerDay: 3000,
		image: '/images/fleet/chery-arrizo-8/Cherry-rental-one.jpg',
	},
	{
		id: 'haval-f7',
		name: 'Haval F7',
		pricePerDay: 2500,
		image: '/images/fleet/haval-f7/Haval.jpg',
	},
	{
		id: 'hyundai-solaris',
		name: 'Hyundai Solaris',
		pricePerDay: 2200,
		image: '/images/fleet/hyundai-solaris/Hyndai-rental.jpg',
	},
	{
		id: 'volkswagen-polo',
		name: 'Volkswagen Polo',
		pricePerDay: 2200,
		image: '/images/fleet/volkswagen-polo/Polo-rental.jpg',
	},
] as const;
