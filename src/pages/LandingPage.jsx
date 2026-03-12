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
                Trans<span className="hero__title-accent">Form</span>
              </h1>

              <div className="hero__subtitle">
                your journey with UniOne, your ultimate platform for academic excellence and seamless learning. Experience a completely centralized StudyHub...
              </div>

              <div className="hero__features-horizontal">
                {['Comprehensive Study Notes', 'Premium Content Packs', '24/7 AI Assistant', 'Digital Student ID', 'Real-Time Scholarships'].map((f, i) => (
                  <div key={i} className="hero__feature-item">
                    <span className="hero__feature-icon">✦</span>
                    <span className="hero__feature-text">{f}</span>
                  </div>
                ))}
              </div>

              <div className="hero__cta-row">
                <button
                  className="hero__cta"
                  onClick={() => navigate('register')}
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
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
                  alt="Engineering student studying with modern technology"
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
