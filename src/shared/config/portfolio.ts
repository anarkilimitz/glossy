export type PortfolioItem = {
	id: string;
	title: string;
	description: string;
	beforeImage: string;
	afterImage: string;
};

export const portfolioItems: readonly PortfolioItem[] = [
	{
		id: 'repair-01',
		title: 'Восстановление кузова после повреждения',
		description:
			'Подготовка, восстановление геометрии и покраска повреждённых элементов.',
		beforeImage: '/images/portfolio/repair-01/before/Polo-broken.jpg',
		afterImage: '/images/portfolio/repair-01/after/Polo.jpg',
	},
	{
		id: 'repair-02',
		title: 'Ремонт и покраска кузовных элементов',
		description:
			'Локальный ремонт деталей кузова с подбором цвета и финишной обработкой.',
		beforeImage: '/images/portfolio/repair-02/before/Almera-left-broken.jpg',
		afterImage: '/images/portfolio/repair-02/after/Almera-left.jpg',
	},
	{
		id: 'repair-03',
		title: 'Устранение вмятин и царапин',
		description:
			'Восстановление внешнего вида автомобиля после кузовных повреждений.',
		beforeImage: '/images/portfolio/repair-03/before/Toyota-broken.jpg',
		afterImage: '/images/portfolio/repair-03/after/Toyota.jpg',
	},
	{
		id: 'repair-04',
		title: 'Восстановление кузова',
		description:
			'Последовательный ремонт, окраска и полировка отдельных кузовных деталей.',
		beforeImage: '/images/portfolio/repair-04/before/Changan-broken.jpg',
		afterImage: '/images/portfolio/repair-04/after/Changan.jpg',
	},
];
