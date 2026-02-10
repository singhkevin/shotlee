import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/enhancement-codes', label: 'Pic Options' },
  { to: '/help', label: 'Help' },
  { to: '/terms', label: 'Terms & Privacy' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <div
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="legal-logo" onClick={closeMenu}>
            <img src="/assets/14.png" alt="Shot Lee" className="logo-small" />
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`header-nav ${menuOpen ? 'active' : ''}`} id="main-nav">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} onClick={closeMenu}>
                {label}
              </Link>
            ))}
            <div className="mobile-social-links">
              <SocialLinks />
            </div>
          </nav>
          <SocialLinks className="desktop-social" />
        </div>
      </header>
    </>
  );
}
