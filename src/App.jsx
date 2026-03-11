import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

/* ── Placeholder pages for non-home routes ── */
function ComingSoon({ title, navigate }) {
  return (
    <main className="coming-soon">
      <div className="coming-soon__card">
        <h1>{title}</h1>
        <p>This section is coming soon. Please check back later.</p>
        <button className="cs-btn" onClick={() => navigate('home')}>← Back to Home</button>
      </div>
    </main>
  );
}

const PAGES = {
  home: (nav) => <LandingPage navigate={nav} />,
  explore: (nav) => <ComingSoon title="Explore Free Resources" navigate={nav} />,
  store: (nav) => <ComingSoon title="UniOne Store" navigate={nav} />,
  premium_info: (nav) => <ComingSoon title="Notes Premium" navigate={nav} />,
  login: (nav) => <ComingSoon title="Login" navigate={nav} />,
  register: (nav) => <ComingSoon title="Register" navigate={nav} />,
};

const NO_FOOTER_PAGES = new Set(['login', 'register']);

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (to) => {
    setPage(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const factory = PAGES[page] || PAGES.home;
    return factory(navigate);
  };

  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navbar page={page} setPage={navigate} />
        {renderPage()}
        {!NO_FOOTER_PAGES.has(page) && <Footer />}
      </div>
    </ThemeProvider>
  );
}
