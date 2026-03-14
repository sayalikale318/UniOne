import React from "react";
import { motion } from 'framer-motion';
import SectionDivider from "../components/SectionDivider";
import Icon from "../components/Icon";

const stats = [
  { label: "Active Students", value: "12K+", icon: "user" },
  { label: "Resources", value: "5,000+", icon: "book" },
  { label: "University Streams", value: "8+", icon: "award" },
  { label: "AI Queries Weekly", value: "50K+", icon: "zap" }
];

const values = [
  {
    title: "Student Centricity",
    desc: "Every feature we build starts with the question: 'How does this help a student excel?'",
    icon: "user",
    color: "var(--accent)"
  },
  {
    title: "AI Innovation",
    desc: "We push the boundaries of LLMs to provide academic assistance that is accurate and ethical.",
    icon: "zap",
    color: "var(--purple)"
  },
  {
    title: "Centralized Access",
    desc: "No more hunting for PDFs. We provide a single, organized hub for everything academic.",
    icon: "bookmark",
    color: "var(--gold)"
  }
];

const aiTools = [
  {
    title: "Smart Notes",
    desc: "AI-generated summaries and structured outlines from your lecture materials, making complex engineering concepts easy to digest.",
    icon: "bot",
    color: "var(--accent)"
  },
  {
    title: "PYQ Helper",
    desc: "Instant AI solutions and step-by-step explanations for Previous Year Questions, tailored specifically to your university's exam pattern.",
    icon: "spark",
    color: "var(--purple)"
  },
  {
    title: "Fast & Reliable",
    desc: "Blazing fast responses powered by our optimized AI infrastructure, ensuring you get accurate answers when you need them most.",
    icon: "zap",
    color: "var(--gold)"
  }
];


export default function AboutUs({ navigate }) {
  return (
    <div className="landing-page about-us-page">
      <main className="landing-main">
        {/* ══════════════════ HERO SECTION ══════════════════ */}
        <section className="hero" aria-label="About us hero">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-bg-blob" aria-hidden="true" />

          <div className="hero-container container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="hero__badge">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  THE UNIONE STORY
                </span>
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line" style={{ fontSize: 'clamp(28px, 6vw, 64px)', color: 'var(--text)' }}>Revolutionizing</span>
                <span className="hero__title-line" style={{ fontSize: 'clamp(24px, 5.5vw, 58px)', opacity: 0.8, marginTop: '8px' }}>
                  the Academic <span className="hero__title-accent" style={{ 
                    background: 'var(--grad-main)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(47, 129, 247, 0.4))'
                  }}>Landscape</span>
                </span>
              </h1>




              <div className="hero__subtitle mx-auto mb-10" style={{ maxWidth: '800px' }}>
                Born out of the frustration of fragmented resources and outdated study methods, UniOne is the AI-first hub designed specifically for the modern engineering student.
              </div>


              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full max-w-4xl px-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="glass-card"
                    style={{ padding: '24px 16px', textAlign: 'center' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                  >
                    <div className="flex justify-center mb-3">
                      <Icon n={stat.icon} s={24} c="var(--accent2)" />
                    </div>
                    <div className="text-3xl font-black font-['Syne'] text-text mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-text3 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        <SectionDivider variant="line" />

        {/* ══════════════════ OUR STORY SECTION ══════════════════ */}
        <section className="py-24 px-6 relative z-10 overflow-hidden">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >

                <h2 className="hero__title text-center md:text-left mb-6" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
                  A Vision for the <span className="hero__title-accent">Future</span>
                </h2>

                <div className="space-y-6 text-text2 text-lg leading-relaxed text-center md:text-left">
                  <p>
                    UniOne was born to solve a simple problem: students spend too much time searching for materials and not enough time learning.
                  </p>
                  <p>
                    We provide a centralized hub that combines high-quality notes with powerful AI tools, helping you master your engineering curriculum with ease and confidence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >

                <div className="glass-card mx-auto" style={{
                  padding: '0',
                  overflow: 'hidden',
                  aspectRatio: '1.25/1',
                  border: '2px solid var(--border)',
                  maxWidth: '480px'
                }}>
                  <img
                    src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
                    alt="Team Collaborating"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-40"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple opacity-20 blur-3xl rounded-full"></div>
              </motion.div>

            </div>
          </div>
        </section>

        <SectionDivider variant="line" />

        {/* ══════════════════ AI POWERED TOOLS ══════════════════ */}
        <section className="py-24 px-6 relative z-10 bg-surface/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="hero__badge mb-4 mx-auto">
                  <span>CUTTING-EDGE TECHNOLOGY</span>
                </div>
                <h2 className="hero__title mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
                  AI-Powered <span className="hero__title-accent">Tools</span>
                </h2>
                <p className="text-text2 text-lg max-w-2xl mx-auto">
                  Experience the future of learning with our intelligent suite of engineering-focused AI assistants.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="glass-card group relative overflow-hidden"
                  style={{ padding: '40px 32px', textAlign: 'center' }}
                  whileHover={{ y: -10, borderColor: tool.color }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Glowing background hint */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: `radial-gradient(circle, ${tool.color} 0%, transparent 70%)` }}></div>
                  
                  <div className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center bg-surface2 border border-border group-hover:border-transparent transition-all relative z-10" 
                    style={{ 
                      boxShadow: `0 0 30px ${tool.color}10`,
                      background: `linear-gradient(135deg, var(--surface2) 0%, ${tool.color}05 100%)`
                    }}>
                    <Icon n={tool.icon} s={40} c={tool.color} />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 font-['Syne'] text-text">{tool.title}</h3>
                  <p className="text-text2 leading-relaxed">
                    {tool.desc}
                  </p>

                  <div className="mt-8 pt-8 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-sm font-bold text-accent uppercase tracking-widest">
                    <span>Learn More</span>
                    <Icon n="arrow" s={14} c="var(--accent)" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="line" />


        {/* ══════════════════ CORE VALUES ══════════════════ */}
        <section className="py-24 px-6 relative z-10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >

                <div className="glass-card" style={{ padding: '0', overflow: 'hidden', aspectRatio: '16/9', border: '2px solid var(--border)' }}>
                  <img
                    src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
                    alt="Core Values Illustration"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >

                <h2 className="hero__title text-center md:text-left mb-6" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>
                  Our Core <span className="hero__title-accent">Values</span>
                </h2>

                <div className="space-y-6 text-text2 text-lg leading-relaxed text-center md:text-left">
                  <p>
                    At UniOne, our values guide every feature we build. We are committed to making engineering education clear, accessible, and smart.
                  </p>
                  <p>
                    We focus on providing the best resources and ethical AI tools to help every student succeed in their academic journey.
                  </p>
                </div>

              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (

                <motion.div
                  key={i}
                  className="glass-card group"
                  style={{ padding: '48px 32px', textAlign: 'center' }}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center bg-surface2 border border-border group-hover:border-accent transition-colors" style={{ boxShadow: `0 0 20px ${v.color}15` }}>
                    <Icon n={v.icon} s={32} c={v.color} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Syne'] text-text">{v.title}</h3>
                  <p className="text-text2 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
