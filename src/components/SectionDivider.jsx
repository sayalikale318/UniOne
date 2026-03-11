

/**
 * SectionDivider — decorative SVG wave between sections.
 * variant: 'hero' | 'default'
 */
export default function SectionDivider({ variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <div className="section-divider section-divider--hero" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="section-divider__svg"
        >
          <defs>
            <linearGradient id="divGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
              <stop offset="50%" stopColor="var(--purple)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          {/* solid fill wave */}
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--surface)"
          />
          {/* coloured line wave */}
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
            fill="none"
            stroke="url(#divGrad1)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="section-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="section-divider__svg"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill="var(--surface2)"
        />
      </svg>
    </div>
  );
}
