import { siteConfig } from '../../shared/config/site';
import { Button } from '../../shared/ui';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">{siteConfig.companyName} · {siteConfig.city}</p>
        <h1 id="hero-title" className="hero__title">
          Ремонт и аренда автомобилей в Екатеринбурге
        </h1>
        <p className="hero__description">
          Кузовной ремонт и покраска, техническое обслуживание и ремонт автомобилей, а также
          аренда автомобилей для такси — в одном автосервисе.
        </p>
        <div className="hero__actions" aria-label="Основные действия">
          <Button as="a" href="#services" variant="secondary" size="large">
            Смотреть услуги
          </Button>
          <Button as="a" href="#portfolio" variant="outline" size="large">
            Наши работы
          </Button>
        </div>
        <p className="hero__note">Три направления для владельцев автомобилей и водителей такси</p>
      </div>

      <div className="hero__visual" aria-label="Направления Космоавто112" role="img">
        <div className="hero__visual-frame">
          <span className="hero__visual-number" aria-hidden="true">112</span>
          <span className="hero__visual-caption">AUTOMOTIVE SERVICE</span>
          <div className="hero__visual-line hero__visual-line--top" aria-hidden="true" />
          <div className="hero__visual-line hero__visual-line--bottom" aria-hidden="true" />
          <div className="hero__visual-list">
            {siteConfig.serviceDirections.map((direction, index) => (
              <span key={direction} className="hero__visual-item">
                <span className="hero__visual-index">0{index + 1}</span>
                {direction}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
