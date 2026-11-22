import { PageShell } from '../widgets/page-shell/PageShell';
import { Hero } from '../widgets/hero/Hero';
import { Services } from '../widgets/services/Services';
import { About } from '../widgets/about/About';
import { Portfolio } from '../widgets/portfolio/Portfolio';
import { Fleet } from '../widgets/fleet/Fleet';
import { FleetCarousel } from '../widgets/fleet-carousel/FleetCarousel';

export function LandingPage() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Fleet />
      <FleetCarousel />
    </PageShell>
  );
}
