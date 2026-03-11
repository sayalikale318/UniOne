import { motion } from 'framer-motion';
import WhyChoose from '../components/WhyChoose';
import SectionDivider from '../components/SectionDivider';
import ScrollBanner from '../components/ScrollBanner';

export default function LandingPage({ navigate }) {
  return (
    <div className="landing-page">
      <main className="landing-main">

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="hero" aria-label="Hero section">
          {/* Blue grid pattern + blobs from reference */}
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-bg-blob" aria-hidden="true" />

          <div className="hero-container container">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div
                className="hero__badge"
              >
                <span>BUILT FOR ENGINEERING STUDENTS</span>
              </div>

              <h1 className="hero__title">
                Uni<span className="hero__title-accent">One</span>
              </h1>

              <div className="hero__subtitle">
                Welcome to UniOne, your ultimate platform for academic excellence and seamless learning. Experience a completely centralized hub tailored for engineering students:
                <ul className="hero__feature-list">
                  <li>✦ Comprehensive Study Notes</li>
                  <li>✦ Premium Content Packs</li>
                  <li>✦ 24/7 AI Assistant</li>
                  <li>✦ Digital Student ID</li>
                  <li>✦ Real-Time Scholarships</li>
                </ul>
              </div>

              <div className="hero__cta-row">
                <button
                  className="hero__cta"
                  onClick={() => navigate('login')}
                  aria-label="Get started with UniOne"
                >
                  Get Started Free
                </button>
                <button
                  className="hero__cta-ghost"
                  onClick={() => navigate('explore')}
                  aria-label="Explore free resources"
                >
                  Explore Resources
                </button>
              </div>

              <div className="hero__pills">
                {['12,000+ Students', '5,000+ Resources', '8+ Streams', 'AI-Powered'].map((p, i) => (
                  <span key={i} className="hero__pill">{p}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            >
              <div className="hero-photo-glow" aria-hidden="true" />
              <motion.div
                className="hero-photo-wrap"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="https://images.pexels.com/photos/4943621/pexels-photo-4943621.jpeg"
                  alt="Engineering student studying with books and laptop"
                  className="hero-photo"
                  loading="eager"
                />
                {/* Radial gradient mask to blend edges into background */}
                <div className="hero-photo__overlay" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Wave divider */}
        <SectionDivider variant="hero" />

        {/* Horizontal scroll feature banner */}
        <ScrollBanner />

        {/* Why Choose section */}
        <WhyChoose />

      </main>
    </div>
  );
}
