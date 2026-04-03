import { useEffect } from 'react';

export default function Waitlist() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    } else if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/r/0QvVjB?transparentBackground=1&formEventsForwarding=1"
      width="100%"
      style={{ display: 'block', border: 0, minHeight: '100vh' }}
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Shot Lee - Waitlist Form"
    />
  );
}
