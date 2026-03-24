import { useState } from 'react';
import { motion } from 'framer-motion';
import WhyChoose from '../components/WhyChoose';
import SectionDivider from '../components/SectionDivider';
import ScrollBanner from '../components/ScrollBanner';
import Icon from '../components/Icon';

export default function LandingPage({ navigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="landing-page">
      <main className="landing-main">

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="hero" aria-label="Hero section">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-bg-blob" aria-hidden="true" />

          <div className="hero-container container">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="hero__badge">
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
                <div className="hero-photo__overlay" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="hero" />
        <ScrollBanner />

        {/* Why UniOne Merged Sections (Features + Advantage) */}
        <WhyChoose navigate={navigate} />

        {/* ══════════════════ HOW IT WORKS ══════════════════ */}
        <section className="how-it-works" aria-label="How it works">
          <div className="container">
            <motion.div
              className="section-header center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-badge">PROCESS</div>
              <h2 className="section-title">Academic Success in <span className="text-accent">3 Steps</span></h2>
              <p className="section-desc">We've simplified the learning curve. Here's how you can transform your semester exams with UniOn.</p>
            </motion.div>

            <div className="steps-grid">
              {[
                { step: '01', title: 'Join the Hub', desc: 'Create your verified student profile and select your engineering stream to get personalized resources.', icon: 'user' },
                { step: '02', title: 'Curate Resources', desc: 'Access chapter-wise notes, lab manuals, and previous year papers curated by subject experts.', icon: 'book' },
                { step: '03', title: 'Prep with AI', desc: 'Use our AI Study Assistant to resolve doubts instantly and practice with generated mock tests.', icon: 'zap' }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="step-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="step-number">{s.step}</div>
                  <div className="step-icon">
                    <Icon n={s.icon} s={24} c="var(--accent)" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FAQ SECTION ══════════════════ */}
        <section className="faq-section" aria-label="Frequently asked questions">
          <div className="container">
            <motion.div
              className="section-header center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-badge">SUPPORT</div>
              <h2 className="section-title">Common <span className="text-accent">Doubts</span></h2>
            </motion.div>

            <motion.div
              className="faq-vertical-list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { q: 'Is UniOne free for all engineering students?', a: 'Yes! All core university notes, syllabus copies, and standard PYQs are 100% free forever. We only charge for premium booster packs and advanced AI features.' },
                { q: 'How often are the study materials updated?', a: 'Materials are updated every semester based on the latest university schemes and feedback from our network of top-performing students and faculty.' },
                { q: 'What is the benefit of the Digital Student ID?', a: 'The Digital Student ID verifies your academic status, unlocking student-only discounts on premium packs and allowing you to contribute verified notes to the community.' },
                { q: 'How does the AI Study Assistant help during exams?', a: 'Our AI is trained specifically on engineering curricula. It can summarize long chapters, solve complex numerical problems, and generate practice quizzes based on your weak areas.' },
                { q: 'Can I download materials for offline use?', a: 'Yes! Both free and premium resources can be downloaded directly within our mobile app for seamless study sessions without an internet connection.' },
                { q: 'Are the lab manuals university-specific?', a: 'We provide both generic standard lab manuals and university-specific ones (like VTU, AKU, SPPU) with verified readings and circuit diagrams.' }
              ].map((f, i) => (
                <div
                  key={i}
                  className={`faq-accordion-item ${activeFaq === i ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h3>{f.q}</h3>
                    <Icon n="arrow" s={16} c="var(--text3)" className="faq-chevron" />
                  </div>
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>


      </main>
    </div>
  );
}
