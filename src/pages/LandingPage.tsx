import { PageShell } from '../widgets/page-shell/PageShell';
import { Hero } from '../widgets/hero/Hero';
import { Services } from '../widgets/services/Services';
import { About } from '../widgets/about/About';

export function LandingPage() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <About />
    </PageShell>
  );
}
