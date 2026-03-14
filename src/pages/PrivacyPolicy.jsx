import React from "react";
import { motion } from 'framer-motion';
import SectionDivider from "../components/SectionDivider";
import Icon from "../components/Icon";

export default function PrivacyPolicy({ navigate }) {
  return (
    <div className="landing-page policy-page">
      <main className="landing-main">
        {/* ══════════════════ HERO SECTION ══════════════════ */}
        <section className="hero" aria-label="Privacy Policy hero">
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
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  LEGAL & COMPLIANCE
                </span>
              </div>

              <h1 className="hero__title" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
                Privacy <span className="hero__title-accent">Policy</span>
              </h1>

              <div className="hero__subtitle mx-auto">
                UniOne is committed to protecting the privacy of our engineering student community. This policy details how we handle your digital academic footprint.
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
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="shield" s={24} c="var(--accent)" />
                  </div>
                  <h2>1. Information We Collect</h2>
                </div>
                <p>
                  At UniOne, we collect information to provide better services to our users. This includes "Direct Information" provided during registration and "Automated Information" collected during your interaction with our AI tools.
                </p>
                <ul>
                  <li><strong>Account Metadata:</strong> Name, institutional email, university affiliation, and current engineering stream.</li>
                  <li><strong>Academic Data:</strong> Subject queries, resource downloads, and study preferences used to recalibrate our AI models.</li>
                  <li><strong>Technical Logs:</strong> IP address, device specifications, and interaction timestamps for security auditing.</li>
                </ul>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="bot" s={24} c="var(--purple)" />
                  </div>
                  <h2>2. AI Processing Transparency</h2>
                </div>
                <p>
                  Our proprietary AI Tutor 24/7 utilizes Large Language Models to process your queries. We emphasize that your private queries are used to improve responsiveness but are never sold to external data brokers or used for targeted advertising outside the platform.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="zap" s={24} c="var(--gold)" />
                  </div>
                  <h2>3. Data Governance & Security</h2>
                </div>
                <p>
                  We implement industry-standard encryption protocol (AES-256) for data at rest and TLS 1.3 for data in transit. Access to your personal academic records is strictly limited to authorized UniOne personnel under non-disclosure agreements.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="check" s={24} c="var(--accent)" />
                  </div>
                  <h2>4. Your Rights & Portability</h2>
                </div>
                <p>
                  In accordance with global data protection standards (including GDPR and CCPA fundamentals), you possess the right to:
                </p>
                <ul>
                  <li>Request a digital copy of all data points UniOne has collected about your account.</li>
                  <li>Rectify any institutional or personal inaccuracies in your profile.</li>
                  <li>Request permanent "Right to be Forgotten" via account deletion.</li>
                </ul>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                    <Icon n="clock" s={24} c="var(--purple)" />
                  </div>
                  <h2>5. Data Retention Policy</h2>
                </div>
                <p>
                  We retain your academic profile and interaction data only for as long as your account is active or as needed to provide you with tailored engineering resources. Upon account termination, we anonymize your study data within 60 days to contribute to our global academic research models without identifying you personally.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                    <Icon n="explore" s={24} c="var(--gold)" />
                  </div>
                  <h2>6. International Compliance</h2>
                </div>
                <p>
                  UniOne operates on globally distributed servers. By using our platform, you acknowledge that your data may be transferred to and processed in jurisdictions other than your own. We ensure these transfers are protected by standard contractual clauses and rigorous third-party auditing.
                </p>
              </div>

              <div className="policy-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Icon n="refresh" s={24} c="var(--accent)" />
                  </div>
                  <h2>7. Policy Revisions</h2>
                </div>
                <p>
                  The digital landscape and educational regulations are constantly evolving. We reserve the right to update this policy to reflect platform enhancements or legal shifts. Major changes will be communicated via your registered institutional email or a dashboard notification.
                </p>
              </div>

              <div className="legal-footer">
                <p>
                  Last Updated: March 14, 2026. For privacy inquiries or legal requests, please contact our Data Protection Officer at <strong>privacy@unione.edu</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
