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
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
};

export default function WhyChoose() {
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
    <section className="why-choose" id="why-choose" aria-label="Why choose UniOne" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="why-choose__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="why-choose__badge">
            <Icon n="spark" s={13} c="#2F81F7" />
            Why UniOne?
          </div>
          <h2 className="why-choose__title">
            Built for Engineering&nbsp;
            <span className="grad-text">Students Like You</span>
          </h2>
          <p className="why-choose__sub">
            Everything you need to study smarter, stay updated, and land scholarships — all in one platform.
          </p>
        </motion.div>

        {/* Cards grid */}
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
  );
}
