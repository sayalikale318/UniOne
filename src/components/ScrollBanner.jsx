import { useRef, useState, useCallback, useEffect } from 'react';
import Icon from './Icon';

/* ── Card data with images & video ─────────────────────────── */
const CARDS = [
  {
    id: 1,
    icon: 'notes', label: 'Engineering Notes', sub: 'All Streams',
    grad: 'linear-gradient(135deg,#1a3a6e,#2F81F7)', accent: '#2F81F7',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/notes.png',
    popupTitle: 'Engineering Notes & Resources',
    popupDesc: 'Access free chapter-wise notes, formula sheets, and reference materials for all 8+ engineering streams — updated every semester.',
  },
  {
    id: 2,
    icon: 'bot', label: 'AI Study Assistant', sub: 'Ask Anything',
    grad: 'linear-gradient(135deg,#3a1a6e,#A371F7)', accent: '#A371F7',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/ai.png',
    popupTitle: 'AI-Powered Study Assistant',
    popupDesc: 'Ask subject doubts, get concept explanations, exam strategies, and personalized study plans powered by advanced AI.',
  },
  {
    id: 3,
    icon: 'user', label: 'Digital Student ID', sub: 'Verified Identity',
    grad: 'linear-gradient(135deg,#1a4a1e,#3FB950)', accent: '#3FB950',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/studentid.png',
    popupTitle: 'Digital Student Identity Card',
    popupDesc: 'Generate your official verified digital student ID. Required for premium purchases and recognized across the platform.',
  },
  {
    id: 4,
    icon: 'exam', label: 'Smart Exam Prep', sub: 'Mock Tests + Tips',
    grad: 'linear-gradient(135deg,#5a3a00,#E3B341)', accent: '#E3B341',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/exam.png',
    popupTitle: 'Smart Exam Preparation',
    popupDesc: 'Curated mock tests, previous year papers, and AI-generated practice questions tailored to your stream and semester.',
  },
  {
    id: 5,
    icon: 'medal', label: 'Scholarships', sub: 'Never Miss One',
    grad: 'linear-gradient(135deg,#5a1a1a,#F85149)', accent: '#F85149',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/scholarship.png',
    popupTitle: 'Scholarship Tracker',
    popupDesc: 'All open government and private scholarships tracked in one place — with deadlines, eligibility criteria, and direct apply links.',
  },
  {
    id: 6,
    icon: 'spark', label: 'Premium Library', sub: 'Explore More',
    grad: 'linear-gradient(135deg,#3a1a6e,#A371F7)', accent: '#A371F7',
    type: 'image', media: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    popupTitle: 'Premium Content Packs',
    popupDesc: 'Lite, Medium & Premium packs with deep-dive notes, lab manuals, question bank, and mock tests starting at just ₹199.',
  },
  {
    id: 7,
    icon: 'file', label: 'Formula Sheets', sub: 'Quick Reference',
    grad: 'linear-gradient(135deg,#1a3a6e,#2F81F7)', accent: '#2F81F7',
    type: 'image', media: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    popupTitle: 'Engineering Formula Sheets',
    popupDesc: 'Comprehensive formula sheets for every subject — from Thermodynamics to Data Structures, ready to download and print.',
  },
  {
    id: 8,
    icon: 'lab2', label: 'Lab Manuals', sub: 'Practicals Covered',
    grad: 'linear-gradient(135deg,#1a4a1e,#3FB950)', accent: '#3FB950',
    type: 'image', media: import.meta.env.BASE_URL + 'banners/lab.png',
    popupTitle: 'Lab Manuals & Practicals',
    popupDesc: 'Step-by-step lab manuals with observations, circuits, and readings for all practical subjects across semesters.',
  },
  {
    id: 9,
    icon: 'file', label: 'Past Papers', sub: 'Last 5 Years',
    grad: 'linear-gradient(135deg,#5a3a00,#E3B341)', accent: '#E3B341',
    type: 'image', media: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
    popupTitle: 'Previous Year Question Papers',
    popupDesc: 'University and board question papers from the last 5 years with solutions — the fastest way to prepare for exams.',
  },
  {
    id: 10,
    icon: 'spark', label: 'All Streams', sub: '8+ Branches',
    grad: 'linear-gradient(135deg,#1a3a6e,#2F81F7)', accent: '#2F81F7',
    type: 'image', media: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    popupTitle: '8+ Engineering Streams',
    popupDesc: 'Computer, IT, Mechanical, Civil, Electrical, Electronics, AI & DS, Chemical — every stream covered with dedicated resources.',
  },
];

/* Double the array for seamless infinite loop */
const ALL_CARDS = [...CARDS, ...CARDS.map(c => ({ ...c, id: c.id + 100 }))];

export default function ScrollBanner() {
  const trackRef          = useRef(null);
  const animFrameRef      = useRef(null);
  const scrollPosRef      = useRef(0);   // tracks marquee scroll position
  const speedRef          = useRef(0.6); // px per frame

  const [paused, setPaused]       = useState(false);
  const [activeId, setActive]     = useState(null);
  const [modal, setModal]         = useState(null); // card data when popup open

  /* ── Continuous scroll animation ──────────────────────────── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = null;

    const step = (ts) => {
      if (!paused) {
        if (lastTime !== null) {
          const delta = ts - lastTime;
          scrollPosRef.current += speedRef.current * (delta / 16.67);
          // Loop: when we've scrolled half (one full copy), reset
          const half = track.scrollWidth / 2;
          if (scrollPosRef.current >= half) scrollPosRef.current -= half;
          track.scrollLeft = scrollPosRef.current;
        }
        lastTime = ts;
      } else {
        lastTime = null;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [paused]);

  /* ── Open modal: pause + record current scroll pos ─────────── */
  const openModal = useCallback((card, el) => {
    // save scroll position so we can resume from there
    scrollPosRef.current = trackRef.current?.scrollLeft ?? scrollPosRef.current;
    setPaused(true);
    setActive(card.id);
    setModal(card);
    document.body.style.overflow = 'hidden';
  }, []);

  /* ── Close modal: resume from where we left off ────────────── */
  const closeModal = useCallback(() => {
    setModal(null);
    setActive(null);
    document.body.style.overflow = '';
    // small delay so closing animation plays, then resume
    setTimeout(() => setPaused(false), 120);
  }, []);

  /* Close on backdrop click or Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && modal) closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal, closeModal]);

  return (
    <>
      {/* ── Scroll Banner ───────────────────────────────────── */}
      <section
        className="scroll-banner"
        aria-label="Feature highlights"
        onMouseEnter={() => !modal && setPaused(true)}
        onMouseLeave={() => !modal && setPaused(false)}
      >
        <div className="sb-label-row">
          <span className="sb-eyebrow">
            <Icon n="spark" s={14} c="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Everything you need
          </span>
          <span className="sb-hint">
            {modal ? 'Popup open' : paused ? 'Hover to pause' : 'Click any card to preview'}
          </span>
        </div>

        {/* fade masks */}
        <div className="sb-fade sb-fade--left"  aria-hidden="true" />
        <div className="sb-fade sb-fade--right" aria-hidden="true" />

        {/* scrollable track — driven by rAF, not CSS animation */}
        <div ref={trackRef} className="sb-track" aria-label="Feature cards">
          <div className="sb-inner">
            {ALL_CARDS.map((card, idx) => (
              <button
                key={`${card.id}-${idx}`}
                className={`sb-card ${activeId === card.id ? 'sb-card--active' : ''}`}
                style={{ '--card-grad': card.grad, '--card-accent': card.accent }}
                onClick={() => openModal(card)}
                aria-label={`View ${card.label}`}
              >
                {card.type === 'image' && (
                  <div className="sb-card__img-wrap">
                    <img src={card.media} alt={card.label} className="sb-card__img" loading="lazy" />
                    <div className="sb-card__img-overlay" />
                  </div>
                )}

                <div className="sb-card__icon">
                  <Icon n={card.icon} s={24} c="white" />
                </div>
                <div className="sb-card__label">{card.label}</div>
                <div className="sb-card__sub">{card.sub}</div>
                <div className="sb-card__glow" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal Popup ─────────────────────────────────────── */}
      {modal && (
        <div
          className="sb-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={modal.popupTitle}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="sb-modal">
            {/* Close button */}
            <button
              id="sb-modal-close"
              className="sb-modal__close"
              onClick={closeModal}
              aria-label="Close preview"
            >
              ✕
            </button>

            <div className="sb-modal__media">
              {modal.type === 'image' && (
                <img
                  src={modal.media}
                  alt={modal.popupTitle}
                  className="sb-modal__img"
                />
              )}

              {/* accent gradient bar at top of media */}
              <div
                className="sb-modal__media-bar"
                style={{ background: modal.grad }}
              />
            </div>

            {/* Content */}
            <div className="sb-modal__body" style={{ '--modal-accent': modal.accent }}>
              <div className="sb-modal__icon">
                <Icon n={modal.icon} s={36} c="var(--modal-accent)" />
              </div>
              <h2 className="sb-modal__title">{modal.popupTitle}</h2>
              <p className="sb-modal__desc">{modal.popupDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
