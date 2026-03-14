import React from "react";
import { motion } from 'framer-motion';
import SectionDivider from "../components/SectionDivider";
import Icon from "../components/Icon";

export default function TermsOfService({ navigate }) {
  return (
    <div className="landing-page policy-page">
      <main className="landing-main">
        {/* ══════════════════ HERO SECTION ══════════════════ */}
        <section className="hero" aria-label="Terms of Service hero">
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
                  <span className="w-2 h-2 rounded-full bg-purple animate-pulse"></span>
                  USER AGREEMENT
                </span>
              </div>

              <h1 className="hero__title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
                Terms of <span className="hero__title-accent">Service</span>
              </h1>

              <div className="hero__subtitle mx-auto">
                These terms govern your access to and use of UniOne's academic resources and AI-powered services.
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
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="user" s={24} c="var(--purple)" />
                  </div>
                  <h2>1. Acceptable Use Policy</h2>
                </div>
                <p>
                  By accessing UniOne, you agree to utilize our study materials and AI tutors solely for legitimate educational purposes. You are strictly prohibited from:
                </p>
                <ul>
                  <li>Using automated scripts or bots to crawl or scrape academic content.</li>
                  <li>Attempting to bypass security barriers or reverse-engineer AI logic.</li>
                  <li>Distributing premium resources to non-verified third parties.</li>
                </ul>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="book" s={24} c="var(--accent)" />
                  </div>
                  <h2>2. Intellectual Property Rights</h2>
                </div>
                <p>
                  All content provided on UniOne—including notes, syllabus structures, code snippets, and UI components—is the property of UniOne or its licensed content creators. You are granted a limited, personal, non-transferable license to use these materials for your personal degree pursuit.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="star" s={24} c="var(--gold)" />
                  </div>
                  <h2>3. Premium Transaction Protocol</h2>
                </div>
                <p>
                  Access to Premium Packs (Lite, Medium, Premium) is facilitated through secure payment gateways. Fees are non-refundable once the digital assets are accessed or downloaded, except where mandated by local consumer protection laws.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="close" s={24} c="var(--accent)" />
                  </div>
                  <h2>4. Termination of Access</h2>
                </div>
                <p>
                  UniOne reserves the technical right to suspend or block institutional email IDs found in violation of these Terms or suspected of facilitating "Contract Cheating," which undermines the integrity of engineering education globally.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="user" s={24} c="var(--purple)" />
                  </div>
                  <h2>5. User Account Responsibilities</h2>
                </div>
                <p>
                  You are solely responsible for all activities conducted through your account. You agree to notify us immediately of any unauthorized use of your credentials. UniOne is not liable for losses caused by unauthorized access resulting from your failure to safeguard your password.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="shield" s={24} c="var(--gold)" />
                  </div>
                  <h2>6. Limitation of Liability</h2>
                </div>
                <p>
                  To the maximum extent permitted by law, UniOne shall not be liable for any indirect, incidental, or consequential damages resulting from your inability to access the platform during scheduled maintenance or network failures. Our AI tools provide academic guidance, but final educational outcomes depend on individual student effort.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="refresh" s={24} c="var(--accent)" />
                  </div>
                  <h2>7. Modifications to Service</h2>
                </div>
                <p>
                  As an AI-first platform, UniOne is in a state of continuous improvement. We may add or remove features, update resource databases, or shift platform architecture to provide a more efficient learning experience. Continued use after such changes constitutes your acceptance of the evolved terms.
                </p>
              </div>

              <div className="legal-footer">
                <p>
                  Last Updated: March 14, 2026. By continuing to use our services, you accept these terms. For legal inquiries, contact <strong>legal@unione.edu</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
