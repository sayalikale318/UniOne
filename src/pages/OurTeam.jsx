import React from "react";
import { TeamMemberCard } from "../components/TeamMemberCard";

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

  return (
    <div className="our-team-page">
      {/* Background Blobs */}
      <div className="team-bg-blob team-bg-blob--1"></div>
      <div className="team-bg-blob team-bg-blob--2"></div>

      {/* Hero Section */}
      <section className="pt-0 pb-20 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-lg font-black uppercase tracking-[0.2em] text-accent font-['DM_Sans']">Our Identity</span>
          </div>
          <h1 className="font-['Syne'] text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-[var(--accent)] via-[var(--purple)] to-[#58a6ff] bg-clip-text text-transparent leading-[1.1] tracking-tight" style={{ textShadow: '0 8px 32px rgba(47, 129, 247, 0.2)' }}>
            The Humans behind <br />UniOne.
          </h1>
          <p className="text-2xl md:text-3xl font-['DM_Sans'] font-medium mb-10 text-[var(--text)] opacity-90 leading-relaxed max-w-2xl mx-auto">
            Pioneering the AI-First Academic Era
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-purple mx-auto rounded-full mb-8"></div>
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
    </div>
  );
}
