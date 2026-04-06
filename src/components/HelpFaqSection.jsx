import { Link } from 'react-router-dom';

const FAQ_GROUPS = [
  {
    title: 'Getting started',
    items: [
      {
        q: 'How do I create an account?',
        a: (
          <>
            Join the <Link to="/wait" className="legal-link">waiting list</Link>. When Shot Lee opens, you&apos;ll register with your email and receive 5 free enhancement credits.
          </>
        ),
      },
      {
        q: 'What file formats do you support?',
        a: 'JPEG, PNG, HEIC, and RAW. Maximum file size is 50MB per image.',
      },
      {
        q: 'How long does processing take?',
        a: 'Most images finish in 10–30 seconds; typically under a minute depending on size and load.',
      },
    ],
  },
  {
    title: 'Credits & pricing',
    items: [
      {
        q: 'How does the credit system work?',
        a: 'Each enhancement uses one credit. New users get 5 free credits; additional packs are available (see pricing on this page).',
      },
      {
        q: 'Do credits expire?',
        a: 'No. Use them whenever you need them.',
      },
      {
        q: 'Can I get a refund for unused credits?',
        a: (
          <>
            Yes — see our <Link to="/refund" className="legal-link">Refund and Cancellation Policy</Link> for the 30-day rule and credit thresholds.
          </>
        ),
      },
    ],
  },
  {
    title: 'Enhancements',
    items: [
      {
        q: 'How many versions do I get?',
        a: 'By default, four enhanced versions with different aesthetics. With an Enhancement Code, versions are tuned to that style.',
      },
      {
        q: 'Can I request specific looks?',
        a: (
          <>
            Yes. Use Enhancement Codes — browse <a href="#pic-options" className="legal-link">Pic Options</a> on this page for examples.
          </>
        ),
      },
    ],
  },
  {
    title: 'Privacy & account',
    items: [
      {
        q: 'Are my images stored?',
        a: (
          <>
            No long-term storage for your originals. Details in our <Link to="/privacy" className="legal-link">Privacy Policy</Link>.
          </>
        ),
      },
      {
        q: 'Can I delete my account?',
        a: (
          <>
            Email <a href="mailto:hello@shotlee.com" className="legal-link">hello@shotlee.com</a> to request deletion. Unused credits may be forfeited.
          </>
        ),
      },
    ],
  },
];

export default function HelpFaqSection() {
  return (
    <div className="landing-faq-inner">
      <h2 className="section-headline">Help & FAQ</h2>
      <p className="body-large">
        Quick answers about Shot Lee. For legal details, use the policy links in the footer.
      </p>
      {FAQ_GROUPS.map((group) => (
        <div key={group.title} className="landing-faq-group">
          <h3 className="legal-section-title">{group.title}</h3>
          {group.items.map(({ q, a }) => (
            <div key={q} className="landing-faq-item">
              <h4 className="legal-subsection-title">{q}</h4>
              <p className="legal-paragraph">{a}</p>
            </div>
          ))}
        </div>
      ))}
      <p className="legal-paragraph">
        <strong>Still stuck?</strong> Email{' '}
        <a href="mailto:hello@shotlee.com" className="legal-link">hello@shotlee.com</a>
        {' '}— we usually reply within 24–48 hours.
      </p>
    </div>
  );
}
