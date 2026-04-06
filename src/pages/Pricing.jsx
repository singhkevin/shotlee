const PLANS = [
  {
    name: 'Free',
    accent: 'peach',
    usd: '—',
    validity: '10 days',
    credits: '10',
  },
  {
    name: 'Essential',
    accent: 'sage',
    usd: '$5.99',
    validity: '30 days',
    credits: '50',
  },
  {
    name: 'Elite',
    accent: 'peach',
    usd: '$10.99',
    validity: '90 days',
    credits: '100',
  },
  {
    name: 'Diamond',
    accent: 'sage',
    usd: '$14.99',
    validity: '300 days',
    credits: '200',
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
            <div className="pricing-international-wrap">
              <table className="pricing-international-table">
                <caption className="pricing-international-caption">
                  All prices in USD — nothing added at checkout
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Plan</th>
                    <th scope="col">USD</th>
                    <th scope="col">Validity</th>
                    <th scope="col">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANS.map((plan) => (
                    <tr key={plan.name} className={`pricing-international-row pricing-international-row--${plan.accent}`}>
                      <th scope="row">{plan.name}</th>
                      <td>{plan.usd}</td>
                      <td>{plan.validity}</td>
                      <td>{plan.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
