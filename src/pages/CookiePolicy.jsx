import React from "react";
import { motion } from 'framer-motion';
import SectionDivider from "../components/SectionDivider";
import Icon from "../components/Icon";

export default function CookiePolicy({ navigate }) {
  return (
    <div className="landing-page policy-page">
      <main className="landing-main">
        {/* ══════════════════ HERO SECTION ══════════════════ */}
        <section className="hero" aria-label="Cookie Policy hero">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-bg-blob" aria-hidden="true" />

          <div className="hero-container container">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="hero__badge">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  BROWSER SETTINGS
                </span>
              </div>

              <h1 className="hero__title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
                Cookie <span className="hero__title-accent">Policy</span>
              </h1>

              <div className="hero__subtitle mx-auto">
                Discover how UniOne uses digital identifiers to enhance your academic browsing experience.
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="line" />

        {/* ══════════════════ CONTENT SECTION ══════════════════ */}
        <section className="hp-section relative z-10" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          <div className="container max-w-4xl mx-auto">
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="zap" s={24} c="var(--gold)" />
                  </div>
                  <h2>1. Essential Functional Cookies</h2>
                </div>
                <p>
                  These cookies are vital for the fundamental operation of UniOne. They enable secure login sessions, protect against CSRF attacks, and ensure your progress in AI chats is maintained during browser transitions.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="shield" s={24} c="var(--accent)" />
                  </div>
                  <h2>2. Performance & Analytical Data</h2>
                </div>
                <p>
                  We utilize performance cookies to understand which engineering streams (CSE, MECH, CIVIL, etc.) are accessing our resources most frequently. This data is anonymized and used strictly to allocate server bandwidth and optimize resource loading speeds.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="sun" s={24} c="var(--purple)" />
                  </div>
                  <h2>3. User Preference Persistence</h2>
                </div>
                <p>
                  Our "Day/Night" theme persistence is handled via a dedicated preference cookie. This ensures that your eyes are protected by your preferred light setting from the moment you hit the landing page, without having to re-toggle manually.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="explore" s={24} c="var(--accent)" />
                  </div>
                  <h2>4. Granular Control & Management</h2>
                </div>
                <p>
                  You can opt-out of non-essential cookies via your browser's "Privacy and Security" settings. Please note that disabling "Strictly Necessary" cookies will prevent you from accessing the Student Dashboard or purchasing Premium Packs.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="code" s={24} c="var(--purple)" />
                  </div>
                  <h2>5. Third-Party Pixel Tracking</h2>
                </div>
                <p>
                  We may occasionally use third-party pixels (such as those from research partners) to gather high-level data on how engineering students navigate between different module categories. These pixels do not collect sensitive PII (Personally Identifiable Information).
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="zap" s={24} c="var(--gold)" />
                  </div>
                  <h2>6. Local Storage Persistence</h2>
                </div>
                <p>
                  Beyond standard session cookies, UniOne uses Browser Local Storage to cache heavy syllabus PDFs and AI response fragments. This reduces load times by up to 60% upon return visits, providing a more fluid "near-instant" academic experience.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="refresh" s={24} c="var(--accent)" />
                  </div>
                  <h2>7. Policy Evolution</h2>
                </div>
                <p>
                  As we integrate New AI models and features, our use of digital identifiers may change. We update this table periodically. We recommend checking back every semester to stay informed about how we optimize your digital study environment.
                </p>
              </div>

              <div className="legal-footer">
                <p>
                  Last Updated: March 14, 2026. You can control cookie settings through your browser's preference panel. For technical queries, contact <strong>dev@unione.edu</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
