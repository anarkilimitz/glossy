import { siteConfig } from '../../shared/config/site';
import { Container, Link } from '../../shared/ui';

function phoneHref(phone: string) { return `tel:${phone.replace(/[^+\d]/g, '')}`; }

export function Footer() {
  return (
    <footer id="contacts" className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <Link to="/#home" className="site-footer__brand">{siteConfig.companyName}</Link>
            <p className="site-footer__description">Кузовной и механический ремонт автомобилей, а также автопрокат в Екатеринбурге.</p>
          </div>
          <div><h2 className="site-footer__heading">Навигация</h2><nav aria-label="Навигация в подвале" className="site-footer__links">{siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div>
          <div><h2 className="site-footer__heading">Услуги</h2><ul className="site-footer__list">{siteConfig.serviceDirections.map((service) => <li key={service}>{service}</li>)}</ul></div>
          <div><h2 className="site-footer__heading">Контакты</h2><div className="site-footer__contacts">{siteConfig.phones.map((phone) => <a key={phone} href={phoneHref(phone)}>{phone}</a>)}<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.city}</span></div></div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}</span></div>
      </Container>
    </footer>
  );
}
