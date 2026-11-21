export const siteConfig = {
  name: 'Glossy',
  companyName: 'Космоавто112',
  city: 'Екатеринбург',
  phones: ['+7 (965) 50 58 651', '+7 (992) 09 50 666'],
  email: 'cosmoavto112@yandex.ru',
  navigation: [
    { label: 'Главная', href: '/#home' },
    { label: 'Услуги', href: '/#services' },
    { label: 'О компании', href: '/#about' },
    { label: 'Наши работы', href: '/#portfolio' },
    { label: 'Автопрокат', href: '/#rental' },
    { label: 'Контакты', href: '/#contact' },
  ],
  serviceDirections: ['Кузовной ремонт', 'Механический ремонт', 'Автопрокат'],
} as const;
