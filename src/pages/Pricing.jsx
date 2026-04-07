const PLANS = [
  {
    name: 'Free',
    tone: 'free',
    usd: '—',
    validity: '10 days',
    credits: '10',
    paymentUrl: '#',
  },
  {
    name: 'Essential',
    tone: 'essential',
    usd: '$5.99',
    validity: '30 days',
    credits: '50',
    paymentUrl: '#',
  },
  {
    name: 'Elite',
    tone: 'elite',
    usd: '$10.99',
    validity: '90 days',
    credits: '100',
    paymentUrl: '#',
  },
  {
    name: 'Diamond',
    tone: 'diamond',
    usd: '$14.99',
    validity: '300 days',
    credits: '200',
    paymentUrl: '#',
  },
];

export default function Pricing() {
  return (
    <div className="legal-content pricing-page">
      <div className="container">
        <div className="legal-wrapper">
          <h1 className="legal-title">Global pricing</h1>
          <div className="legal-intro">
            <p>
              Shot Lee plans are billed in <strong>USD only</strong>. The amounts below are the full price you pay —
              <strong>nothing is added at checkout</strong>.
            </p>
          </div>

          <section className="legal-section pricing-page-section">
            <h2 className="legal-section-title">Plans & credits</h2>
            <p className="legal-paragraph">
              Each paid tier includes a <strong>validity window</strong> (time to use your credits) and a{' '}
              <strong>credit allowance</strong> for enhancements. One credit is one enhancement run.
            </p>
            <p className="pricing-international-caption">
              All prices in USD — nothing added at checkout
            </p>
            <div className="pricing-card-grid">
              {PLANS.map((plan) => (
                <article key={plan.name} className={`pricing-card pricing-card--${plan.tone}`}>
                  <h3 className="pricing-card-title">{plan.name}</h3>
                  <p className="pricing-card-price">{plan.usd}</p>
                  <dl className="pricing-card-meta">
                    <div className="pricing-card-meta-row">
                      <dt>Validity</dt>
                      <dd>{plan.validity}</dd>
                    </div>
                    <div className="pricing-card-meta-row">
                      <dt>Credits</dt>
                      <dd>{plan.credits}</dd>
                    </div>
                  </dl>
                  <a href={plan.paymentUrl} className="pricing-card-cta" aria-label={`Pay now for ${plan.name} plan`}>
                    Pay now
                  </a>
                </article>
              ))}
            </div>
            <p className="legal-paragraph pricing-international-footnote">
              Free tier: no charge; credits must be used within the validity period. Renew or upgrade before credits
              expire if you need more time. The amount you pay matches the listed price — nothing further is added at
              checkout.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
