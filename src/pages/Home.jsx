import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ComparisonSlider from '../components/ComparisonSlider';

const COMPARISON_IMAGES = [
  { before: '/assets/Artboard 1.jpg', after: '/assets/Artboard 1B.jpg' },
  { before: '/assets/Artboard 2.jpg', after: '/assets/Artboard 2B.jpg' },
  { before: '/assets/Artboard 3.jpg', after: '/assets/Artboard 3B.jpg' },
  { before: '/assets/Artboard 4.jpg', after: '/assets/Artboard 4B.jpg' },
  { before: '/assets/Artboard 5.jpg', after: '/assets/Artboard 5B.jpg' },
  { before: '/assets/Artboard 6.jpg', after: '/assets/Artboard 6B.jpg' },
];

function scrollToSection(e, id) {
  if (e) e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-background">
          <iframe
            className="hero-video hero-video-desktop"
            src="https://player.vimeo.com/video/1163717872?autoplay=1&loop=1&muted=1&background=1"
            title="Hero background (desktop)"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <iframe
            className="hero-video hero-video-tablet"
            src="https://player.vimeo.com/video/1163723727?autoplay=1&loop=1&muted=1&background=1"
            title="Hero background (tablet)"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <iframe
            className="hero-video hero-video-mobile"
            src="https://player.vimeo.com/video/1163721098?autoplay=1&loop=1&muted=1&background=1"
            title="Hero background (mobile)"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <div className="hero-background-fallback" aria-hidden="true" />
          <div className="hero-background-overlay" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <h1 className="hero-headline">
            Meet The Greatest Photographer In Human History - You!
          </h1>
          <div className="hero-cta-group">
            <Link to="/#pricing" className="cta-primary" onClick={(e) => scrollToSection(e, 'pricing')}>
              TRY NOW – 5 FREE SHOTS
            </Link>
            <a href="#proposition" className="cta-secondary banner-btn" onClick={(e) => { e.preventDefault(); scrollToSection(e, 'proposition'); }}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section id="proposition" className="proposition fade-in" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="container">
          <h2 className="section-headline">
            Henceforth all the phone pics that you take will be professional grade.
          </h2>
          <div className="proposition-content">
            <p className="body-large">
              Every shot that you capture becomes extraordinary, to be saved forever. Casual selfies will become professional headshots. Vacation pics will have another reason to be saved securely. Family moments will transform into happy family moments. See yourself in your dream environment.
            </p>
            <p className="body-large">
              Send any photograph. Within moments, receive four professionally enhanced versions – each analyzed across 300 parameters and refined by algorithms trained on humanity's most iconic images.
            </p>
            <p className="emphasis-line">Just perfection, instantly.</p>
          </div>
        </div>
      </section>

      <section className="use-cases fade-in" id="use-cases" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="container">
          <h2 className="section-headline">The moments that matter</h2>
          <p className="body-large" style={{ textAlign: 'center' }}>
            Scroll the line with arrows to the right
          </p>
          <div className="comparison-grid">
            {COMPARISON_IMAGES.map((pair, i) => (
              <ComparisonSlider key={i} beforeImg={pair.before} afterImg={pair.after} />
            ))}
          </div>
        </div>
      </section>

      <section className="unforgettable fade-in" ref={(el) => (sectionRefs.current[2] = el)}>
        <div className="container">
          <h2 className="section-headline">What makes images unforgettable</h2>
          <div className="unforgettable-content">
            <p className="body-large">The human eye knows greatness when it sees it. So does Shot Lee.</p>
            <p className="body-large">
              Our system understands what separated the masters from amateurs, what made legendary portraits iconic, why certain images stop you mid-scroll. Contrast that elevates. Color harmony that resonates. Composition that guides the eye exactly where it should go.
            </p>
            <p className="body-large">
              Every image is analyzed against the aesthetic principles that define photographic mastery.
            </p>
            <div className="result-quote">
              <p className="quote-large">The result? Images that make people ask: "Who's your photographer?"</p>
              <p className="quote-attribution">You are.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features fade-in" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <h2 className="section-headline">Excellence, Delivered</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Instant Analysis</h3>
              <p className="feature-description">
                300+ parameters evaluated in milliseconds. Lighting. Composition. Color harmony. Emotional resonance.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Four Perfect Interpretations</h3>
              <p className="feature-description">
                Four distinct visions. Each professionally crafted. Each remarkable.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Precision Control</h3>
              <p className="feature-description">
                Over 1,000 enhancement codes available. Studio lighting. Golden hour warmth. Dramatic monochrome. Exactly what you envision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing fade-in" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <div className="pricing-wrapper">
            <div className="pricing-header">
              <h2 className="section-headline">Introductory one time offer</h2>
            </div>
            <div className="pricing-content">
              <div className="pricing-main">
                <div className="pricing-amount-wrapper">
                  <span className="pricing-number">100</span>
                  <span className="pricing-label">new images</span>
                </div>
                <div className="pricing-divider" />
                <div className="pricing-price-wrapper">
                  <div className="pricing-price-main">
                    <span className="pricing-currency">$</span>
                    <span className="pricing-price">29</span>
                  </div>
                  <p className="pricing-per-image">29 cents per image</p>
                </div>
              </div>
              <p className="pricing-subtext">An introduction to what professional excellence should cost.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy fade-in" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="privacy-wrapper">
            <h2 className="section-headline">Your Privacy, Absolute</h2>
            <div className="privacy-content">
              <div className="privacy-grid">
                <div className="privacy-item">
                  <div className="privacy-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="privacy-text">We don't store your images</p>
                </div>
                <div className="privacy-item">
                  <div className="privacy-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="privacy-text">We don't sell your data</p>
                </div>
                <div className="privacy-item">
                  <div className="privacy-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="privacy-text">We don't share with third parties</p>
                </div>
              </div>
              <div className="privacy-closing">
                <p>Your memories remain exclusively yours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta fade-in" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="container">
          <h2 className="section-headline">Start now.</h2>
          <p className="cta-subtext">
            Ten free enhancements.
            <br />
            Experience photographic excellence.
          </p>
          <Link to="/#pricing" className="cta-primary cta-large" onClick={(e) => scrollToSection(e, 'pricing')}>
            BEGIN
          </Link>
        </div>
      </section>
    </>
  );
}
