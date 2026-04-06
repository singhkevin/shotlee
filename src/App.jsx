import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Licensing from './pages/Licensing';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import PricingIndia from './pages/PricingIndia';
import NotFound from './pages/NotFound';
import Waitlist from './pages/Waitlist';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Navigate to={{ pathname: '/', hash: 'about' }} replace />} />
          <Route path="contact" element={<Navigate to={{ pathname: '/', hash: 'contact' }} replace />} />
          <Route path="help" element={<Navigate to={{ pathname: '/', hash: 'help' }} replace />} />
          <Route path="enhancement-codes" element={<Navigate to={{ pathname: '/', hash: 'pic-options' }} replace />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="licensing" element={<Licensing />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="pricing/in" element={<PricingIndia />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="wait" element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
