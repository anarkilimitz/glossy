import { siteConfig } from '../../shared/config/site';
import { Section, Typography } from '../../shared/ui';

const aboutDirections = [
  'Кузовной ремонт и покраска автомобилей',
  'Техническое обслуживание и ремонт',
  'Аренда автомобилей для работы в такси',
] as const;

export function About() {
  return (
    <Section id="about" className="about" aria-labelledby="about-title" spacing="large" background="default">
      <div className="about__layout">
        <div className="about__content">
          <Typography as="p" variant="body-small" className="about__eyebrow">О компании</Typography>
          <Typography as="h2" variant="h2" id="about-title" className="about__title">
            О компании Космоавто112
          </Typography>
          <Typography as="p" variant="body-large" className="about__lead">
            Космоавто112 — компания в Екатеринбурге, которая объединяет услуги для владельцев автомобилей и водителей такси.
          </Typography>
          <Typography as="p" variant="body" className="about__description">
            Компания работает в трёх направлениях: кузовной ремонт и покраска автомобилей, техническое обслуживание и ремонт, а также аренда автомобилей для работы в такси.
          </Typography>

          <dl className="about__facts">
            <div className="about__fact">
              <dt>Компания</dt>
              <dd>{siteConfig.companyName}</dd>
            </div>
            <div className="about__fact">
              <dt>Город</dt>
              <dd>{siteConfig.city}</dd>
            </div>
          </dl>
        </div>

        <div className="about__visual" role="img" aria-label="Три направления работы Космоавто112 в Екатеринбурге">
          <div className="about__visual-frame" aria-hidden="true">
            <span className="about__visual-mark">112</span>
            <span className="about__visual-caption">COSMOAVTO112 / EKATERINBURG</span>
            <span className="about__visual-line about__visual-line--top" />
            <span className="about__visual-line about__visual-line--bottom" />
            <div className="about__directions">
              {aboutDirections.map((direction, index) => (
                <div key={direction} className="about__direction">
                  <span className="about__direction-index">0{index + 1}</span>
                  <span>{direction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
