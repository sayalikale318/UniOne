import React from "react";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { ValueCard } from "../components/ValueCard";
import { Lightbulb, Target, Shield, Users } from "lucide-react";

import prasadImg from "../assets/f733216468586a1466b9ee630f5c624e939b5455.png";
import aditiImg from "../assets/52fdbd18955f69b75f619adec6ac286721834731.png";
import tejaswiniImg from "../assets/c4a9bcde420346f09bf0afc5200f5f393228e9c9.png";
import karanImg from "../assets/c95d976dd299e71b8bdafdf2221a0fd271318006.png";

export default function OurTeam() {
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

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technological Innovation",
      description: "Continuously pushing AI boundaries to create smarter, more effective tools like our real-time update engine and intelligent note system.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Measurable Student Success",
      description: "Simplifying learning using data-driven insights from PYQs, quizzes, and personalized study patterns.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency & Data Integrity",
      description: "Operating with complete transparency and data integrity, ensuring trust at every level.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Educators, engineers, and visionaries working together to build a future where real-time, personalized learning becomes the global standard.",
    },
  ];

  return (
    <div className="our-team-page" style={{ fontFamily: '"Trebuchet MS", "Segoe UI", system-ui, sans-serif' }}>
      {/* Background Blobs */}
      <div className="team-bg-blob team-bg-blob--1"></div>
      <div className="team-bg-blob team-bg-blob--2"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Identity</span>
          </div>
          <h1 className="font-['Poppins'] text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[var(--accent)] via-[var(--purple)] to-[#58a6ff] bg-clip-text text-transparent leading-none" style={{ textShadow: '0 8px 24px rgba(47, 129, 247, 0.25)' }}>
            The Humans behind <br/>UniOne.
          </h1>
          <p className="text-2xl md:text-3xl font-['Poppins'] font-semibold mb-6 text-[var(--text)] opacity-90">
            Pioneering the AI-First Academic Era
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple mx-auto rounded-full mb-8"></div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={`${member.firstName}-${member.lastName}`} 
                {...member} 
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 relative z-10 bg-surface/20 backdrop-blur-sm border-t border-white/5 mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] text-4xl md:text-6xl font-extrabold mb-6 text-[var(--text)] tracking-tight">
              Driven by Purpose.
            </h2>
            <p className="text-xl text-[var(--text2)] max-w-3xl mx-auto leading-relaxed font-medium">
              We're not just building a product; we're establishing a new standard for how students interact with knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-lg md:text-xl text-[var(--text2)] max-w-3xl mx-auto leading-relaxed italic">
                "We are educators, engineers, and visionaries working together to build a future where
                real-time, personalized learning becomes the global standard."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
