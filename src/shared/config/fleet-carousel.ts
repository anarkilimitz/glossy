export type FleetCarouselVehicle = {
	id: string;
	name: string;
	pricePerDay: number;
	image: string;
};

export const fleetCarouselVehicles: readonly FleetCarouselVehicle[] = [
	{
		id: 'chery-arrizo-8',
		name: 'Chery Arrizo 8',
		pricePerDay: 3000,
		image: '/images/fleet-carousel/chery-arrizo-8/chery.png',
	},
	{
		id: 'haval-f7',
		name: 'Haval F7',
		pricePerDay: 2500,
		image: '/images/fleet-carousel/haval-f7/haval.png',
	},
	{
		id: 'hyundai-solaris',
		name: 'Hyundai Solaris',
		pricePerDay: 2200,
		image: '/images/fleet-carousel/hyundai-solaris/hyundai.png',
	},
	{
		id: 'volkswagen-polo',
		name: 'Volkswagen Polo',
		pricePerDay: 2200,
		image: '/images/fleet-carousel/volkswagen-polo/volkswagen.png',
	},
] as const;
