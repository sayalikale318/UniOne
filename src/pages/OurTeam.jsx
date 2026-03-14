import React from "react";
import { motion } from 'framer-motion';
import { TeamMemberCard } from "../components/TeamMemberCard";
import SectionDivider from "../components/SectionDivider";

import prasadImg from "../assets/f733216468586a1466b9ee630f5c624e939b5455.png";
import aditiImg from "../assets/52fdbd18955f69b75f619adec6ac286721834731.png";
import tejaswiniImg from "../assets/c4a9bcde420346f09bf0afc5200f5f393228e9c9.png";
import karanImg from "../assets/c95d976dd299e71b8bdafdf2221a0fd271318006.png";

export default function OurTeam({ navigate }) {
  const teamMembers = [
    {
      image: prasadImg,
      firstName: "Prasad",
      lastName: "Pilke",
      title: "Founder & CEO",
      quote: "My goal is to give every student a personalized learning experience only AI can deliver.",
      accent: "hsl(217, 91%, 60%)" // Blue
    },
    {
      image: aditiImg,
      firstName: "Aditi",
      lastName: "Galange",
      title: "CTO & AI Lead",
      quote: "I focus on developing resilient and ethical AI models that truly understand and adapt to student needs.",
      accent: "hsl(262, 83%, 67%)" // Purple
    },
    {
      image: tejaswiniImg,
      firstName: "Tejaswini",
      lastName: "Kumbhar",
      title: "Head of Product",
      quote: "Every feature we build must simplify the academic journey and provide genuine value to the modern student.",
      accent: "hsl(24, 95%, 58%)" // Orange/Gold
    },
    {
      image: karanImg,
      firstName: "Karan",
      lastName: "Khandait",
      title: "Lead Developer",
      quote: "I ensure our platform is robust, scalable, and delivers a seamless, lightning-fast experience for all our users.",
      accent: "hsl(142, 71%, 45%)" // Green
    },
  ];

  return (
    <div className="landing-page our-team-page">
      <main className="landing-main">
        {/* ══════════════════ TEAM HERO ══════════════════ */}
        <section className="hero" aria-label="Our team hero section">
          {/* Landing Page style grid and blobs */}
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-bg-blob" aria-hidden="true" />

          <div className="hero-container container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{ alignItems: 'center', textAlign: 'center' }}
            >
              <div className="hero__badge">
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  OUR IDENTITY
                </span>
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line" style={{ fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--text)' }}>The Humans</span>
                <span className="hero__title-line" style={{ fontSize: 'clamp(24px, 5.5vw, 58px)', opacity: 0.8, marginTop: '8px' }}>
                  <span className="hero__title-accent" style={{
                    background: 'var(--grad-main)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(47, 129, 247, 0.4))'
                  }}>Behind UniOne</span>
                </span>
              </h1>



              <div className="hero__subtitle" style={{ maxWidth: '750px', margin: '0 auto 32px' }}>
                Pioneering the AI-First Academic Era. Meet the visionary team dedicated to transforming how university students learn and grow.
              </div>

              <div className="hero__cta-row" style={{ justifyContent: 'center' }}>
                <button
                  className="hero__cta"
                  onClick={() => navigate('contact')}
                >
                  Join Our Journey
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Same Wave divider as Landing Page */}
        <SectionDivider variant="hero" />

        {/* Team Section with spacing matching Landing Page flow */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col gap-12 md:gap-24">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`${member.firstName}-${member.lastName}`}
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <TeamMemberCard
                    {...member}
                    isReversed={index % 2 !== 0}
                  />
                </motion.div>

              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
