import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import OurTeam from './pages/OurTeam';

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
  team: (nav) => <OurTeam navigate={nav} />,
  contact: (nav) => <ComingSoon title="Contact Us" navigate={nav} />,
  notes: (nav) => <ComingSoon title="Study Notes" navigate={nav} />,
  premium_info: (nav) => <ComingSoon title="Notes Premium" navigate={nav} />,
  login: (nav) => <ComingSoon title="Login" navigate={nav} />,
  register: (nav) => <ComingSoon title="Register" navigate={nav} />,
};

const NO_FOOTER_PAGES = new Set(['login', 'register']);

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (to) => {
    console.log("Navigating to:", to);
    setPage(to);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    try {
      const factory = PAGES[page] || PAGES.home;
      if (!factory) return <div style={{padding: '100px', color: 'red'}}>Page Factory Missing</div>;
      return factory(navigate);
    } catch (err) {
      console.error("Render error:", err);
      return <div style={{padding: '100px', color: 'red'}}>Error loading page: {err.message}</div>;
    }
  };

  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navbar page={page} setPage={navigate} />
        <div className="page-wrapper">
          {renderPage()}
        </div>
        {!NO_FOOTER_PAGES.has(page) && <Footer />}
      </div>
    </ThemeProvider>
  );
}
