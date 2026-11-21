import { PageShell } from '../widgets/page-shell/PageShell';
import { siteConfig } from '../shared/config/site';

export function LandingPage() {
  return (
    <PageShell>
      <section className="landing-page" aria-labelledby="landing-title">
        <p className="landing-page__eyebrow">Техническая основа проекта</p>
        <h1 id="landing-title">{siteConfig.name}</h1>
        <p className="landing-page__description">
          Здесь появится сайт автосервиса {siteConfig.companyName}. Контент и визуальные секции
          будут добавляться по утверждённой документации.
        </p>
      </section>
    </PageShell>
  );
}
