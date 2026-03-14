import React from "react";
import {
  FiFileText,
  FiStar,
  FiCpu,
  FiAward,
  FiBookOpen,
  FiUsers,
  FiBriefcase,
  FiLifeBuoy,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiGithub
} from "react-icons/fi";

function Footer({ navigate, className = "" }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (id) => {
    if (navigate) {
      navigate(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={`unione-footer ${className}`}>
      <div className="footer-inner">


        {/* BRAND SECTION */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">U</span>
            <h2>UniOne</h2>
          </div>

          <p className="brand-text">
            The AI-first academic hub designed to help engineering students
            transform their learning journey with premium resources and
            intelligent tools.
          </p>

          <div className="status-badge">
            PLATFORM STATUS: OPERATIONAL
          </div>
        </div>


        {/* RESOURCES */}
        <div className="footer-section">
          <h4>RESOURCES</h4>

          <ul className="footer-list">
            <li>
              <button onClick={() => handleNav('notes')} className="list-item">
                <FiFileText className="footer-icon" />
                Free Notes
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('premium_info')} className="list-item">
                <FiStar className="footer-icon" />
                Premium Packs
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('explore')} className="list-item">
                <FiCpu className="footer-icon" />
                AI Tutor 24/7
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('home')} className="list-item">
                <FiAward className="footer-icon" />
                Scholarship Hub
              </button>
            </li>
          </ul>
        </div>


        {/* COMPANY */}
        <div className="footer-section">
          <h4>COMPANY</h4>

          <ul className="footer-list">
            <li>
              <button onClick={() => handleNav('about')} className="list-item">
                <FiBookOpen className="footer-icon" />
                Our Story
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('team')} className="list-item">
                <FiUsers className="footer-icon" />
                MY Creator
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="list-item">
                <FiBriefcase className="footer-icon" />
                Partner Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="list-item">
                <FiLifeBuoy className="footer-icon" />
                Support
              </button>
            </li>
          </ul>
        </div>


        {/* CONNECT */}
        <div className="footer-section">
          <h4>CONNECT</h4>

          <ul className="footer-list">
            <li>
              <a href="#" className="list-item">
                <FiLinkedin className="footer-icon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="list-item">
                <FiInstagram className="footer-icon" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="list-item">
                <FiTwitter className="footer-icon" />
                Twitter (X)
              </a>
            </li>
            <li>
              <a href="#" className="list-item">
                <FiGithub className="footer-icon" />
                GitHub
              </a>
            </li>
          </ul>
        </div>


        {/* NEWSLETTER */}
        <div className="footer-section newsletter">
          <h4>STAY UPDATED</h4>
          <p>Get the latest study tips and platform updates.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Your email..." />
            <button aria-label="Subscribe">→</button>
          </div>
        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-left">
          © {currentYear} UniOne Platform. Developed for Academic Excellence.
        </div>

        <div className="footer-right">
          <span onClick={() => handleNav('privacy')}>Privacy Policy</span>
          <span onClick={() => handleNav('terms')}>Terms of Service</span>
          <span onClick={() => handleNav('cookies')}>Cookie Policy</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
