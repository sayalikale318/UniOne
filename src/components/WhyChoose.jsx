import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

const REASONS = [
  {
    icon: 'book',
    title: 'Free Study Resources',
    desc: 'Access notes, syllabus PDFs, and university announcements for all engineering streams at zero cost.',
    color: '#2F81F7',
  },
  {
    icon: 'zap',
    title: 'AI Study Assistant',
    desc: 'Get instant answers to subject queries, exam strategies, and concept explanations — powered by AI.',
    color: '#A371F7',
  },
  {
    icon: 'star',
    title: 'Premium Content Packs',
    desc: 'Curated Lite, Medium & Premium packs with deep-dive notes, lab manuals, and mock tests.',
    color: '#E3B341',
  },
  {
    icon: 'award',
    title: 'Digital Student ID',
    desc: 'Generate a verified digital student ID that unlocks premium purchases and platform benefits.',
    color: '#3FB950',
  },
  {
    icon: 'shield',
    title: 'Scholarship Tracker',
    desc: 'All open government and private scholarships tracked in one place — with deadlines and apply links.',
    color: '#F85149',
  },
  {
    icon: 'users',
    title: 'All 8+ Streams',
    desc: 'Computer, Mechanical, Civil, Electrical, IT, Electronics, AI & Data Science and more — covered.',
    color: '#58A6FF',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
};

export default function WhyChoose({ navigate }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="why-merged-container">
      {/* 1. WHY UNIONE? GRID SECTION */}
      <section className="why-choose" id="why-choose" aria-label="Why choose UniOne" ref={ref}>
        <div className="container">
          <motion.div
            className="why-choose__header"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="why-choose__badge">
              <Icon n="spark" s={13} c="#2F81F7" />
              WHY UNIONE?
            </div>
            <h2 className="why-choose__title">
              Streamlining&nbsp;
              <span className="grad-text">Academic Success</span>
            </h2>
            <p className="why-choose__sub">
              Everything you need to study smarter, stay updated, and land scholarships — all in one platform.
            </p>
          </motion.div>

          <motion.div
            className="why-choose__grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={i}
                className="why-card"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                style={{ '--card-accent': r.color }}
              >
                <div
                  className="why-card__icon"
                  style={{ background: `${r.color}1A`, color: r.color }}
                >
                  <Icon n={r.icon} s={24} c={r.color} />
                </div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__desc">{r.desc}</p>
                <div className="why-card__bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. THE STUDYHUB ADVANTAGE DEEP DIVE SECTION */}
      <section className="value-prop" aria-label="Value proposition">
        <div className="container">
          <motion.div
            className="vp-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vp-badge">
              <Icon n="spark" s={14} c="currentColor" />
              <span>Deep Ecosystem Insight</span>
            </div>
            <h2 className="vp-title">
              The StudyHub <span>Advantage</span>
            </h2>
            <p className="vp-desc">
              Beyond standard resources, UniOne provides the strategic infrastructure needed for career acceleration. From expert-verified solutions to real-time university alerts, we ensure you're always ahead of the curve.
            </p>
          </motion.div>

          <div className="vp-container">
            <motion.div
              className="vp-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="vp-list">
                {[
                  { title: 'Verified Expert Solutions', icon: 'check' },
                  { title: 'Real-time Exam Alerts', icon: 'zap' },
                  { title: 'AI-Curated Learning Paths', icon: 'bot' },
                  { title: 'Student Community Hubs', icon: 'users' },
                  { title: 'Career & Placement Prep', icon: 'award' },
                  { title: 'Cross-Device Cloud Sync', icon: 'star' }
                ].map((item, i) => (
                  <div key={i} className="vp-item">
                    <div className="vp-item-point">
                      <Icon n="check" s={12} c="currentColor" />
                    </div>
                    <span className="vp-item-text">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="vp-actions">
                <button
                  className="vp-btn vp-btn--primary"
                  onClick={() => navigate('team')}
                >
                  Human Behind
                </button>
                <button
                  className="vp-btn vp-btn--outline"
                  onClick={() => navigate('about')}
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              className="vp-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="vp-circle-bg" />
              <div className="vp-card-stack">
                <div className="vp-main-card">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div style={{ padding: '12px', background: 'rgba(47, 129, 247, 0.1)', borderRadius: '12px' }}>
                        <Icon n="grad" s={28} c="var(--accent)" />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Academic Excellence</h4>
                        <p style={{ fontSize: '13px', color: 'var(--text2)' }}>Curated for top-tier performance</p>
                      </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--border2)', opacity: 0.5 }} />

                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span style={{ fontSize: '14px', color: 'var(--text2)' }}>Resources Accessed</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>1.2M+</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'var(--surface3)', borderRadius: '10px' }}>
                        <div style={{ width: '85%', height: '100%', background: 'var(--grad-main)', borderRadius: '10px' }} />
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span style={{ fontSize: '14px', color: 'var(--text2)' }}>User Satisfaction</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>98%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'var(--surface3)', borderRadius: '10px' }}>
                        <div style={{ width: '98%', height: '100%', background: 'var(--grad-main)', borderRadius: '10px' }} />
                      </div>
                    </div>

                    <div style={{ marginTop: '10px', padding: '12px', background: 'rgba(163, 113, 247, 0.05)', borderRadius: '12px', border: '1px solid rgba(163, 113, 247, 0.1)' }}>
                      <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.8 }}>
                        "UniOne changed how I approach my semester exams. Everything is just one click away."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
