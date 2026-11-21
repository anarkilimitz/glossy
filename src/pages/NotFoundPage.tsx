import { Link } from 'react-router-dom';
import { PageShell } from '../widgets/page-shell/PageShell';

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="landing-page" aria-labelledby="not-found-title">
        <p className="landing-page__eyebrow">404</p>
        <h1 id="not-found-title">Страница не найдена</h1>
        <Link className="landing-page__link" to="/">Вернуться на главную</Link>
      </section>
    </PageShell>
  );
}
