const PLANS = [
  {
    name: 'Free',
    accent: 'peach',
    inr: '—',
    validity: '10 days',
    credits: '10',
  },
  {
    name: 'Essential',
    accent: 'sage',
    inr: '₹499',
    validity: '30 days',
    credits: '50',
  },
  {
    name: 'Elite',
    accent: 'peach',
    inr: '₹799',
    validity: '90 days',
    credits: '100',
  },
  {
    name: 'Diamond',
    accent: 'sage',
    inr: '₹999',
    validity: '300 days',
    credits: '200',
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
            <div className="pricing-international-wrap">
              <table className="pricing-international-table">
                <caption className="pricing-international-caption">
                  All prices in INR, inclusive of GST — India only — nothing added at checkout
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Plan</th>
                    <th scope="col">INR</th>
                    <th scope="col">Validity</th>
                    <th scope="col">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANS.map((plan) => (
                    <tr key={plan.name} className={`pricing-international-row pricing-international-row--${plan.accent}`}>
                      <th scope="row">{plan.name}</th>
                      <td>{plan.inr}</td>
                      <td>{plan.validity}</td>
                      <td>{plan.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
