# Glossy — AI-first проект с инструкциями для Codex

Glossy — внутреннее название проекта разработки современного адаптивного коммерческого сайта для действующего автомобильного сервиса «Космоавто112» в Екатеринбурге. Сайт представляет кузовной ремонт и покраску, механический ремонт, аренду автомобилей, выполненные работы и способы связи с сервисом.

Проект демонстрирует инженерный подход к Frontend-разработке: документация и ограничения фиксируются до реализации, бизнес-данные вынесены из JSX, UI разделён на страницы, виджеты и общие примитивы, а изменения проверяются тестами и production-сборкой.

## Содержание

- [Технологический стек](#технологический-стек)
- [Архитектура](#архитектура)
- [Дизайн-система](#дизайн-система)
- [AI-first workflow и Codex](#ai-first-workflow-и-codex)
- [Реализованная функциональность](#реализованная-функциональность)
- [Производительность и ресурсы](#производительность-и-ресурсы)
- [Тестирование и команды](#тестирование-и-команды)
- [Локальный запуск](#локальный-запуск)
- [Статус и дальнейшее развитие](#статус-и-дальнейшее-развитие)
- [Документация](#документация)

## Технологический стек

| Технология | Назначение |
| --- | --- |
| React 19 | Компонентная модель интерфейса |
| TypeScript | Типизация компонентов и данных |
| Vite | Development-сервер и production-сборка |
| React Router | Маршруты landing page, UI demo и 404 |
| Material UI + Emotion | ThemeProvider и общие UI-настройки |
| SCSS/Sass | BEM-стили, layout, responsive-правила и токены |
| Medeo Sans | Локальная типографика Latin/Cyrillic |
| Vitest + React Testing Library | Unit/component-проверки UI |
| ESLint | Статический анализ TypeScript и React-кода |
| Sharp | Генерация WebP в production-сборке |
| vite-plugin-image-optimizer | Подключённый Vite-плагин оптимизации изображений |

React Hook Form, Zod, Playwright, Prettier, GitHub Actions и Vercel описаны как возможные дальнейшие инструменты, но в текущем `package.json` не используются.

## Архитектура

Приложение сочетает Folder by Type для страниц и общих слоёв с Folder by Feature для крупных секций. Это не FSD: строгие FSD-слои в проекте не заявлены.

```text
src/
├── app/                 # App, router, MUI theme
├── pages/               # LandingPage, NotFoundPage, development UI demo
├── widgets/             # Header, Hero, Services, About, Portfolio, Fleet
│   ├── fleet-carousel/  # 3D-карусель автопарка
│   ├── page-shell/      # общий shell
│   └── footer/
├── shared/config/       # типизированные данные сайта, работ и автопарка
├── shared/ui/           # Button, Link, Card, Section, Typography и др.
├── styles/              # tokens, base, components, widgets и pages
└── test/                # настройка Vitest
```

`LandingPage` собирает секции в `PageShell`; `Header` и `Footer` отвечают за общий chrome. Виджеты получают данные из `src/shared/config`, повторяющиеся элементы используют `src/shared/ui`. Маршрутизация находится в `src/app/router.tsx`; wildcard-маршрут показывает 404, а `/__ui` доступен только в development.

## Дизайн-система

`src/styles/themes/_tokens.scss` централизует CSS custom properties: палитру поверхностей, текста, границ и состояний, Medeo Sans, размеры и line-height, шкалу отступов, контейнеры, радиусы, тени, переходы, z-index и breakpoints для mobile, tablet, desktop и wide desktop. SCSS разделён на reset, global styles, typography, primitives, site chrome, страницы и виджеты; custom-классы используют BEM. `src/app/theme.ts` подключает те же переменные в MUI ThemeProvider.

## AI-first workflow и Codex

Codex работает с контекстом репозитория, а не с абстрактными заданиями:

- `AGENTS.md` — основные рабочие, кодовые и Git-ограничения;
- `docs/project/` — продукт, требования и roadmap;
- `docs/design/` — design brief и дизайн-система;
- `docs/architecture/` — архитектурные решения;
- `docs/development/` — правила разработки и implementation specification;
- `docs/security/` — безопасность данных и интеграций;
- `docs/testing/` — стратегия тестирования;
- `docs/deployment/` — план развёртывания.

Процесс включает анализ существующих файлов и истории, планирование, минимальные изменения, сохранение архитектурных решений, проверки и контроль результата разработчиком. Проект развивается совместно человеком и ИИ.

## Реализованная функциональность

- **Header** — desktop/mobile-навигация, телефонная ссылка, CTA, клавиатурное меню, Escape и скрытие при прокрутке вниз.
- **Hero** — заголовок, направления сервиса и CTA.
- **Services** — кузовной ремонт и покраска, техническое обслуживание и ремонт, аренда.
- **About** — описание «Космоавто112», город и направления работы.
- **Portfolio** — четыре записи «до/после», lazy loading и fallback-заглушки.
- **Rental / Fleet** — категории Economy, Comfort, Comfort Plus, Business, четыре автомобиля и цены за сутки.
- **Fleet carousel** — CSS 3D, автопереключение каждые 4,5 секунды, ручные кнопки, стрелки клавиатуры, пауза при взаимодействии и `prefers-reduced-motion`.
- **Contacts / Footer** — контактный якорь, телефоны, email, город и навигация. Отдельная форма и backend пока не реализованы.

## Производительность и ресурсы

Vite очищает `dist`, отключает source maps, разделяет CSS, сообщает размер ресурсов и предупреждает о JS-чанках больше 350 KB. Production-плагин на базе Sharp создаёт WebP из JPG/PNG в `dist/images` с качеством 82 и сохраняет alpha-канал; ссылки в HTML, CSS и JS заменяются на WebP. Исходные raster-файлы при этом не удаляются из `dist`, поэтому их полное исключение не заявляется.

Medeo Sans подключается локально через `medeo-font`; изображения секций используют `loading="lazy"`, где это уместно. В development сохраняются исходные пути изображений.

## Тестирование и команды

```bash
npm install
npm run dev
npm run test
npm run lint
npm run typecheck
npm run build
npm run test:watch
```

Отдельного preview script нет; после сборки используется `npx vite preview`. Тесты проверяют оболочку и маршруты, доступные роли и ссылки, Header, секции, fallback изображений, UI-примитивы и Fleet carousel.

## Локальный запуск

```bash
git clone https://github.com/anarkilimitz/glossy.git
cd glossy
npm install
npm run dev
```

Адрес по умолчанию: [http://localhost:5173/](http://localhost:5173/). Для production-проверки выполните `npm run build`, затем `npx vite preview`.

## Статус и дальнейшее развитие

Реализованы landing page, общие UI-примитивы, услуги и информация о компании, портфолио, каталог и карусель автопарка, responsive SCSS, локальная типографика, тесты и WebP-конвертация.

Ожидают решения финальный контент и юридические страницы, контактная форма и backend/provider, адрес и юридические данные, CI/CD, hosting/deployment, SEO-метаданные и полноценная browser-level QA. Эти пункты не выдаются за готовую функциональность.

## Документация

- [Обзор проекта](docs/project/PROJECT_OVERVIEW.md) · [Требования](docs/project/PRODUCT_REQUIREMENTS.md) · [Roadmap](docs/project/ROADMAP.md)
- [Архитектура](docs/architecture/ARCHITECTURE.md) · [Руководство разработки](docs/development/DEVELOPMENT_GUIDELINES.md) · [Implementation specification](docs/development/IMPLEMENTATION_SPEC.md)
- [Design brief](docs/design/DESIGN_BRIEF.md) · [Design system](docs/design/DESIGN_SYSTEM.md)
- [Стратегия тестирования](docs/testing/TESTING_STRATEGY.md) · [Безопасность](docs/security/SECURITY.md) · [Развёртывание](docs/deployment/DEPLOYMENT.md)

Лицензия проекта автоматически не добавлялась. `licenses/MEDEO-OFL.txt` содержит лицензионный текст для распространяемого шрифта Medeo Sans.
