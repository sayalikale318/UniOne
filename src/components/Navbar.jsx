import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Icon from './Icon';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'team', label: 'About' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'explore', label: 'Explore Free' },
  { id: 'store', label: 'UniOne Store' },
  { id: 'notes', label: 'Notes', type: 'chip' },
];

export default function Navbar({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleNav = (id) => {
    setPage(id);
    setMobileOpen(false);
  };

  return (
    <div className="navbar-wrap">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {/* Brand */}
        <button
          className="navbar__brand"
          onClick={() => handleNav('home')}
          aria-label="UniOne Home"
        >
          <img src={import.meta.env.BASE_URL + 'logo-removebg-preview.png'} alt="UniOne logo" className="navbar__logo-img" />
          <span className="navbar__wordmark">UniOne</span>
        </button>

        {/* Links */}
        <div className="navbar__links" role="list">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              className={`${link.type === 'chip' ? 'navbar__chip' : 'navbar__link'} ${page === link.id ? (link.type === 'chip' ? 'navbar__chip--active' : 'navbar__link--active') : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          {/* Theme toggle */}
          <button
            className="navbar__theme-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon n={theme === 'dark' ? 'moon' : 'sun'} s={14} c="currentColor" />
            <span>{theme === 'dark' ? 'Night' : 'Day'}</span>
          </button>

          <button className="navbar__btn navbar__btn--ghost" onClick={() => handleNav('login')}>Login</button>
          <button className="navbar__btn navbar__btn--primary" onClick={() => handleNav('register')}>Register</button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle mobile menu"
          >
            <Icon n={mobileOpen ? 'close' : 'menu'} s={20} c="currentColor" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="navbar__mobile" role="dialog">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className="navbar__mobile-link"
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            ))}
            <div className="navbar__mobile-actions">
              <button className="navbar__mobile-btn navbar__mobile-btn--secondary" onClick={() => handleNav('login')}>Login</button>
              <button className="navbar__mobile-btn navbar__mobile-btn--primary" onClick={() => handleNav('register')}>Register Free</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
