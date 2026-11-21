import { Button, Card, Section, Typography } from '../../shared/ui';

type ServiceCard = {
  title: string;
  description: string;
  items: readonly string[];
  actionLabel: string;
  actionHref: '#contacts' | '#rental';
  accent: 'body' | 'mechanical' | 'rental';
};

const serviceCards: readonly ServiceCard[] = [
  {
    title: 'Кузовной ремонт и покраска',
    description: 'Восстановление кузова и лакокрасочного покрытия автомобиля.',
    items: [
      'Покраска отдельных элементов',
      'Локальный кузовной ремонт',
      'Кузовной ремонт и покраска',
      'Сварочные и жестяные работы',
    ],
    actionLabel: 'Обсудить ремонт',
    actionHref: '#contacts',
    accent: 'body',
  },
  {
    title: 'Техническое обслуживание и ремонт',
    description: 'Диагностика и ремонт основных автомобильных систем.',
    items: [
      'Техническое обслуживание',
      'Компьютерная диагностика',
      'Ремонт коробки передач',
      'Замена ремня ГРМ',
      'Шиномонтаж',
      'Обслуживание кондиционеров',
      'Сварочные работы',
    ],
    actionLabel: 'Записаться на обслуживание',
    actionHref: '#contacts',
    accent: 'mechanical',
  },
  {
    title: 'Аренда автомобилей',
    description: 'Автомобили для работы в такси с возможностью индивидуального выкупа.',
    items: ['Economy', 'Comfort', 'Comfort Plus', 'Business'],
    actionLabel: 'Смотреть автопрокат',
    actionHref: '#rental',
    accent: 'rental',
  },
];

export function Services() {
  return (
    <Section id="services" className="services" aria-labelledby="services-title" spacing="large" background="muted">
      <div className="services__intro">
        <Typography as="p" variant="body-small" className="services__eyebrow">03 направления</Typography>
        <Typography as="h2" variant="h2" id="services-title" className="services__title">Наши услуги</Typography>
        <Typography as="p" variant="body-large" className="services__description">
          Комплексные решения для обслуживания, ремонта и аренды автомобилей в Екатеринбурге
        </Typography>
      </div>

      <div className="services__grid">
        {serviceCards.map((service, index) => (
          <Card key={service.title} interactive className={`service-card service-card--${service.accent}`}>
            <div className="service-card__header">
              <span className="service-card__index" aria-hidden="true">0{index + 1}</span>
              <Typography as="h3" variant="h4" className="service-card__title">{service.title}</Typography>
            </div>
            <Typography as="p" variant="body" className="service-card__description">{service.description}</Typography>
            <ul className="service-card__list" aria-label={`Услуги: ${service.title}`}>
              {service.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Button as="a" href={service.actionHref} variant="text" size="medium" className="service-card__action">
              {service.actionLabel}<span aria-hidden="true">→</span>
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
