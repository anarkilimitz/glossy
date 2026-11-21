import { useState } from 'react';
import { portfolioItems, type PortfolioItem } from '../../shared/config/portfolio';
import { Section, Typography } from '../../shared/ui';

type PortfolioImageProps = {
  item: PortfolioItem;
  stage: 'before' | 'after';
  src: string;
};

function PortfolioImage({ item, stage, src }: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);
  const label = stage === 'before' ? 'До' : 'После';

  return (
    <figure className="portfolio-card__figure">
      <figcaption className="portfolio-card__label">{label}</figcaption>
      {hasError ? (
        <div className="portfolio-card__placeholder" role="img" aria-label={`${label} ремонта: фотография пока не добавлена`}>
          <span>Фотография пока не добавлена</span>
        </div>
      ) : (
        <img
          className="portfolio-card__image"
          src={src}
          alt={`${label} ремонта: ${item.title}`}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </figure>
  );
}

export function Portfolio() {
  return (
    <Section id="portfolio" className="portfolio" aria-labelledby="portfolio-title" spacing="large" background="default">
      <div className="portfolio__intro">
        <Typography as="p" variant="body-small" className="portfolio__eyebrow">Результаты ремонта</Typography>
        <Typography as="h2" variant="h2" id="portfolio-title" className="portfolio__title">Наши работы</Typography>
        <Typography as="p" variant="body-large" className="portfolio__description">
          Примеры кузовного ремонта и покраски автомобилей. Фотографии каждой работы будут добавляться по мере подготовки материалов.
        </Typography>
      </div>

      <div className="portfolio__grid">
        {portfolioItems.map((item) => (
          <article key={item.id} className="portfolio-card">
            <div className="portfolio-card__content">
              <Typography as="h3" variant="h4" className="portfolio-card__title">{item.title}</Typography>
              <Typography as="p" variant="body" className="portfolio-card__description">{item.description}</Typography>
            </div>
            <div className="portfolio-card__comparison" aria-label={`Сравнение работы: ${item.title}`}>
              <PortfolioImage item={item} stage="before" src={item.beforeImage} />
              <PortfolioImage item={item} stage="after" src={item.afterImage} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
