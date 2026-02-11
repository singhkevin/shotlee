import { useState } from 'react';

const ENHANCEMENT_CATEGORIES = [
  {
    id: 'headshots',
    label: 'Official Headshots',
    items: [
      'Professional corporate headshot with neutral background #10001',
      'LinkedIn-style portrait with office backdrop #10002',
      'Executive portrait in business attire #10003',
      'Law firm partner professional photo #10004',
    ],
  },
  {
    id: 'social',
    label: 'Social Media & Branding',
    items: [
      'Instagram-worthy aesthetic portrait #20001',
      'TikTok profile picture with trendy filters #20002',
      'YouTube thumbnail-style dramatic pose #20003',
      'Twitter/X professional casual headshot #20004',
    ],
  },
  {
    id: 'editorial',
    label: 'Editorial Headshots',
    items: [
      'Magazine feature portrait with dramatic lighting #30001',
      'Author bio photo for book jacket #30002',
      'Journalist byline professional photo #30003',
      'Artist/creator portfolio headshot #30004',
    ],
  },
  {
    id: 'fashion',
    label: 'Fashion Shoots',
    items: [
      'High-fashion runway model pose #40001',
      'Street style photography aesthetic #40002',
      'Vogue-inspired editorial shoot #40003',
      'Designer lookbook feature #40004',
    ],
  },
  {
    id: 'cinema',
    label: 'Cinema Posters',
    items: [
      'Action movie hero poster #50001',
      'Romantic comedy lead character #50002',
      'Horror film protagonist #50003',
      'Superhero blockbuster poster #50004',
    ],
  },
  {
    id: 'red-carpet',
    label: 'Red Carpet Events',
    items: [
      'Oscar awards ceremony arrival #60001',
      'Met Gala fashion moment #60002',
      'Cannes Film Festival premiere #60003',
      'Grammy Awards red carpet #60004',
    ],
  },
  {
    id: 'audience',
    label: 'Addressing an Audience',
    items: [
      'TED Talk speaker on stage #70001',
      'Presidential podium address #70002',
      'Corporate keynote presentation #70003',
      'University graduation speech #70004',
    ],
  },
  {
    id: 'holiday',
    label: 'Holiday, Action & Adventure',
    items: [
      'Beach vacation paradise setting #80001',
      'Mountain climbing expedition #80002',
      'Safari wildlife adventure #80003',
      'Skydiving action shot #80004',
      'Scuba diving underwater scene #80005',
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment & Media',
    items: [
      'Sitcom family living room scene #90001',
      'Talk show guest appearance #90002',
      'Reality TV competition moment #90003',
      'Netflix series dramatic scene #90004',
    ],
  },
  {
    id: 'magazine',
    label: 'Magazine Covers',
    items: [
      'Time Magazine Person of the Year #11001',
      'Forbes billionaire feature cover #11002',
      'Sports Illustrated athlete cover #11003',
      'Vanity Fair celebrity feature #11004',
    ],
  },
  {
    id: 'celebrities',
    label: 'Celebrities & Historical',
    items: [
      'Coffee with your favorite actor #12001',
      'Shaking hands with the President #12002',
      'Selfie with music icon #12003',
      'Meeting historical leader like Gandhi #12004',
      'Dinner with Einstein #12005',
    ],
  },
];

function parseItem(text) {
  const match = text.match(/^(.+?)\s+(#\d+)$/);
  if (match) return { description: match[1].trim(), code: match[2] };
  return { description: text, code: '' };
}

export default function EnhancementCodes() {
  const [activeTab, setActiveTab] = useState(ENHANCEMENT_CATEGORIES[0].id);
  const activeCategory = ENHANCEMENT_CATEGORIES.find((c) => c.id === activeTab);
  if (!activeCategory) return null;

  return (
    <div className="legal-content enhancement-codes-page">
      <div className="container">
        <div className="legal-wrapper">
          <h1 className="legal-title">Pic Options</h1>
          <section className="legal-section enhancement-codes-section enhancement-codes-section-first">
            <h2 className="legal-section-title">Enhancement Codes List</h2>
            <label htmlFor="enhancement-codes-select" className="enhancement-codes-dropdown-label">
              <select
                id="enhancement-codes-select"
                className="enhancement-codes-dropdown"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                aria-label="Choose enhancement code category"
              >
                {ENHANCEMENT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="enhancement-codes-tabs" role="tablist">
              {ENHANCEMENT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  className={`enhancement-codes-tab ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div
              id={`panel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.id}`}
              className="enhancement-codes-panel"
            >
              <h3 className="legal-subsection-title">{activeCategory.label}</h3>
              <ul className="legal-list">
                {activeCategory.items.map((itemText, i) => {
                  const { description, code } = parseItem(itemText);
                  return (
                    <li key={i}>
                      {description} {code && <strong>{code}</strong>}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="legal-paragraph enhancement-codes-footer">...and many more. Over 1,000 Enhancement Codes are available in the Shot Lee app. When you're ready to enhance an image, browse the full list and enter the code that matches your desired style.</p>
          </section>
          <div className="legal-intro">
            <p>Shot Lee's Enhancement Codes unlock specific aesthetic styles and professional looks. Each code applies a curated set of enhancements designed to achieve a particular visual effect. With over 1,000 codes available, you can transform your images to match your exact vision.</p>
          </div>
          <section className="legal-section">
            <h2 className="legal-section-title">How Enhancement Codes Work</h2>
            <p className="legal-paragraph">When you submit an image to Shot Lee, you can optionally specify an Enhancement Code. Our AI system will apply that code's unique combination of color grading, contrast adjustments, lighting effects, and compositional refinements to create a specific aesthetic.</p>
            <p className="legal-paragraph">If no code is specified, Shot Lee automatically generates four distinct professional interpretations, each optimized for different use cases and styles.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
