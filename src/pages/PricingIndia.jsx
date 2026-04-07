const PLANS = [
  {
    name: 'Free',
    tone: 'free',
    inr: '—',
    validity: '10 days',
    credits: '10',
    paymentUrl: '#',
  },
  {
    name: 'Essential',
    tone: 'essential',
    inr: '₹499',
    validity: '30 days',
    credits: '50',
    paymentUrl: '#',
  },
  {
    name: 'Elite',
    tone: 'elite',
    inr: '₹799',
    validity: '90 days',
    credits: '100',
    paymentUrl: '#',
  },
  {
    name: 'Diamond',
    tone: 'diamond',
    inr: '₹999',
    validity: '300 days',
    credits: '200',
    paymentUrl: '#',
  },
];

export default function PricingIndia() {
  return (
    <div className="legal-content pricing-page">
      <div className="container">
        <div className="legal-wrapper">
          <h1 className="legal-title">India pricing</h1>
          <div className="legal-intro">
            <p>
              These plans are available <strong>only in India</strong> and are billed in <strong>INR only</strong>. They do
              not apply outside India. Listed amounts are <strong>inclusive of GST</strong>.{' '}
              <strong>Nothing is added at checkout</strong> — the price shown is the price you pay.
            </p>
          </div>

          <section className="legal-section pricing-page-section">
            <h2 className="legal-section-title">Plans & credits</h2>
            <p className="legal-paragraph">
              Each paid tier includes a <strong>validity window</strong> (time to use your credits) and a{' '}
              <strong>credit allowance</strong> for enhancements. One credit is one enhancement run.
            </p>
            <p className="pricing-international-caption">
              All prices in INR, inclusive of GST — India only — nothing added at checkout
            </p>
            <div className="pricing-card-grid">
              {PLANS.map((plan) => (
                <article key={plan.name} className={`pricing-card pricing-card--${plan.tone}`}>
                  <h3 className="pricing-card-title">{plan.name}</h3>
                  <p className="pricing-card-price">{plan.inr}</p>
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
              Free tier: no charge; credits must be used within the validity period. Renew or upgrade before credits expire
              if you need more time. Plan prices include GST; nothing further is added at checkout — the amount charged
              matches the listed price. If you are not located in India, these prices and terms do not apply—use the
              standard global pricing path for your region.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
