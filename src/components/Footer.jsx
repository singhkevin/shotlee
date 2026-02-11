import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/enhancement-codes', label: 'Pic Options' },
  { to: '/help', label: 'Help' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/refund', label: 'Refund Policy' },
  { to: '/licensing', label: 'Licensing' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          {FOOTER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href="mailto:hello@shotlee.com">hello@shotlee.com</a>
        </div>
        <SocialLinks className="footer-social" />
        <p className="footer-tagline">Shot Lee — Never accept mediocrity again.</p>
        <p className="footer-byline">
          <a href="https://selligion.com/" target="_blank" rel="noopener noreferrer">Shot Lee by Selligion</a>
        </p>
      </div>
    </footer>
  );
}
