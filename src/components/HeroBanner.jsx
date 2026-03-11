import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';

const BANNERS = [
  {
    id: 1,
    badge: 'NEW ACADEMIC YEAR 2025–26',
    badgeIcon: 'spark',
    title: 'Your Complete',
    titleAccent: 'Academic Platform',
    subtitle: 'Free notes, premium content packs, AI study assistant, digital student ID, and scholarship updates — everything in one platform for engineering students.',
    cta: { label: 'Get Started Free', action: 'register', icon: 'login' },
    ctaSecondary: { label: 'Explore Resources', action: 'explore' },
    gradient: 'linear-gradient(135deg, rgba(47,129,247,0.15), rgba(163,113,247,0.15))',
    accentColor: '#2F81F7',
    blob1Color: 'rgba(47,129,247,0.18)',
    blob2Color: 'rgba(163,113,247,0.15)',
    stats: [
      { value: '12,000+', label: 'Students Enrolled' },
      { value: '5,000+', label: 'Study Materials' },
      { value: '8+', label: 'Streams Covered' },
      { value: '3,200+', label: 'Premium Members' },
    ],
  },
  {
    id: 2,
    badge: 'PREMIUM CONTENT PACKS',
    badgeIcon: 'star',
    title: 'Unlock Premium',
    titleAccent: 'Engineering Notes',
    subtitle: 'Lite, Medium and Premium plans with curated notes, lab manuals, question papers, and mock tests designed by expert educators.',
    cta: { label: 'View Plans', action: 'store', icon: 'store' },
    ctaSecondary: { label: 'Know More', action: 'premium_info' },
    gradient: 'linear-gradient(135deg, rgba(227,179,65,0.13), rgba(163,113,247,0.13))',
    accentColor: '#E3B341',
    blob1Color: 'rgba(227,179,65,0.2)',
    blob2Color: 'rgba(163,113,247,0.15)',
    highlights: [
      { icon: 'file', label: 'Chapter Notes', color: '#2F81F7' },
      { icon: 'zap', label: 'Question Papers', color: '#E3B341' },
      { icon: 'bot', label: 'AI Assistant', color: '#A371F7' },
      { icon: 'award', label: 'Mock Tests', color: '#3FB950' },
    ],
  },
  {
    id: 3,
    badge: 'SCHOLARSHIP TRACKER',
    badgeIcon: 'award',
    title: 'Never Miss a',
    titleAccent: 'Scholarship Opportunity',
    subtitle: 'Track all open scholarships in one place — Central Sector, State Merit, INSPIRE, Pragati, and more. Deadlines, eligibility, and direct apply links.',
    cta: { label: 'Explore Scholarships', action: 'explore', icon: 'award' },
    ctaSecondary: { label: 'Register Now', action: 'register' },
    gradient: 'linear-gradient(135deg, rgba(63,185,80,0.13), rgba(47,129,247,0.13))',
    accentColor: '#3FB950',
    blob1Color: 'rgba(63,185,80,0.2)',
    blob2Color: 'rgba(47,129,247,0.12)',
    highlights: [
      { icon: 'shield', label: 'Verified Info', color: '#3FB950' },
      { icon: 'bell', label: 'Deadline Alerts', color: '#E3B341' },
      { icon: 'check', label: 'Direct Apply Links', color: '#2F81F7' },
      { icon: 'users', label: 'All Streams', color: '#A371F7' },
    ],
  },
  {
    id: 4,
    badge: 'DIGITAL STUDENT ID',
    badgeIcon: 'user',
    title: 'Your Verified',
    titleAccent: 'Digital Student Identity',
    subtitle: 'Generate your official digital student ID card from your profile. Required for premium purchases and recognized by college platforms.',
    cta: { label: 'Create Your ID', action: 'register', icon: 'user' },
    ctaSecondary: { label: 'Learn More', action: 'explore' },
    gradient: 'linear-gradient(135deg, rgba(248,81,73,0.1), rgba(163,113,247,0.13))',
    accentColor: '#A371F7',
    blob1Color: 'rgba(163,113,247,0.2)',
    blob2Color: 'rgba(248,81,73,0.1)',
    highlights: [
      { icon: 'shield', label: 'Verified', color: '#3FB950' },
      { icon: 'user', label: 'Profile-based', color: '#2F81F7' },
      { icon: 'lock', label: 'Secure', color: '#A371F7' },
      { icon: 'star', label: 'Premium Access', color: '#E3B341' },
    ],
  },
];

const SLIDE_DURATION = 5500;

export default function HeroBanner({ setPage }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % BANNERS.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + BANNERS.length) % BANNERS.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, paused]);

  const banner = BANNERS[current];

  return (
    <section
      className="hero hero--slider"
      role="banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero banner slider"
    >
      {/* Background blobs */}
      <div
        className="hero__blob hero__blob--1"
        style={{ background: `radial-gradient(circle, ${banner.blob1Color}, transparent)` }}
      />
      <div
        className="hero__blob hero__blob--2"
        style={{ background: `radial-gradient(circle, ${banner.blob2Color}, transparent)` }}
      />

      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Slide content */}
      <div
        key={current}
        className="hero__content hero__content--animated"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Badge */}
        <div
          className="hero__badge"
          style={{
            background: `${banner.accentColor}1A`,
            borderColor: `${banner.accentColor}40`,
            color: banner.accentColor,
          }}
        >
          <Icon n={banner.badgeIcon} s={13} c={banner.accentColor} />
          {banner.badge}
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          {banner.title}{' '}
          <span
            className="hero__title-accent"
            style={{
              background: `linear-gradient(135deg, ${banner.accentColor}, #A371F7)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {banner.titleAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle">{banner.subtitle}</p>

        {/* CTAs */}
        <div className="hero__ctas">
          <button
            id={`hero-cta-${banner.id}`}
            className="hero__cta hero__cta--primary"
            style={{ background: `linear-gradient(135deg, ${banner.accentColor}, #A371F7)` }}
            onClick={() => setPage(banner.cta.action)}
          >
            {banner.cta.label}
            <Icon n={banner.cta.icon || 'arrow'} s={16} c="white" />
          </button>
          <button
            id={`hero-cta-secondary-${banner.id}`}
            className="hero__cta hero__cta--secondary"
            onClick={() => setPage(banner.ctaSecondary.action)}
          >
            {banner.ctaSecondary.label}
          </button>
        </div>

        {/* Stats or highlights */}
        {banner.stats ? (
          <div className="hero__stats">
            {banner.stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <div className="hero__stat-value" style={{ color: banner.accentColor }}>
                  {s.value}
                </div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="hero__highlights">
            {banner.highlights.map((h, i) => (
              <div key={i} className="hero__highlight">
                <div
                  className="hero__highlight-icon"
                  style={{ background: `${h.color}18`, color: h.color }}
                >
                  <Icon n={h.icon} s={16} c={h.color} />
                </div>
                <span className="hero__highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Slide counter + navigation */}
      <div className="hero__controls" aria-label="Banner navigation">
        {/* Prev */}
        <button
          id="hero-prev"
          className="hero__arrow hero__arrow--left"
          onClick={prev}
          aria-label="Previous slide"
        >
          <Icon n="chevronL" s={18} c="currentColor" />
        </button>

        {/* Dots + progress */}
        <div className="hero__dots" role="tablist" aria-label="Slide indicators">
          {BANNERS.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              style={i === current ? { background: banner.accentColor } : {}}
            >
              {i === current && !paused && (
                <span
                  className="hero__dot-progress"
                  style={{ background: banner.accentColor, animationDuration: `${SLIDE_DURATION}ms` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          id="hero-next"
          className="hero__arrow hero__arrow--right"
          onClick={next}
          aria-label="Next slide"
        >
          <Icon n="chevronR" s={18} c="currentColor" />
        </button>
      </div>

      {/* Slide counter label */}
      <div className="hero__counter" aria-hidden="true">
        <span className="hero__counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep">/</span>
        <span className="hero__counter-total">{String(BANNERS.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
