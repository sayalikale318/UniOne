import { motion } from 'framer-motion';
import WhyChoose from '../components/WhyChoose';
import SectionDivider from '../components/SectionDivider';
import ScrollBanner from '../components/ScrollBanner';
import Icon from '../components/Icon';

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
                <Icon n="spark" s={12} c="currentColor" />
                <span>BUILT FOR ENGINEERING STUDENTS</span>
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line" style={{ fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--text)' }}>TransForm Your</span>
                <span className="hero__title-line" style={{ fontSize: 'clamp(24px, 5.5vw, 58px)', opacity: 0.8, marginTop: '8px' }}>
                  Academic <span className="hero__title-accent" style={{
                    background: 'var(--grad-main)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 30px rgba(47, 129, 247, 0.4))'
                  }}>Journey</span>
                </span>
              </h1>



              <div className="hero__subtitle">
                The ultimate platform for academic excellence and seamless learning. Experience a completely centralized StudyHub designed specifically for engineering students.
              </div>


              <div className="hero__features-horizontal">
                {[
                  { text: 'Study Notes', icon: 'book' },
                  { text: 'Premium Packs', icon: 'star' },
                  { text: 'AI Assistant', icon: 'bot' },
                  { text: 'Scholarships', icon: 'award' }
                ].map((f, i) => (
                  <div key={i} className="hero__feature-item">
                    <span className="hero__feature-icon">
                      <Icon n={f.icon} s={16} c="var(--accent2)" />
                    </span>
                    <span className="hero__feature-text">{f.text}</span>
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
                  <Icon n="arrow" s={16} c="white" />
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
                {['12,000+ Students', '5,000+ Resources', 'AI-Powered'].map((p, i) => (
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
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=3840&q=100"
                  alt="Engineering students collaborating with UniOne platform"
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

        {/* Why UniOne Merged Sections (Features + Advantage) */}
        <WhyChoose navigate={navigate} />

      </main>
    </div>
  );
}
