import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Licensing from './pages/Licensing';
import Privacy from './pages/Privacy';
import EnhancementCodes from './pages/EnhancementCodes';

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
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="licensing" element={<Licensing />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="enhancement-codes" element={<EnhancementCodes />} />
        </Route>
      </Routes>
    </>
  );
}
