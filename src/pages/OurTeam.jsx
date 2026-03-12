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
    },
    {
      image: aditiImg,
      firstName: "Aditi",
      lastName: "Galange",
      title: "CTO & AI Lead",
      quote: "I focus on developing resilient and ethical AI models that truly understand and adapt to student needs.",
    },
    {
      image: tejaswiniImg,
      firstName: "Tejaswini",
      lastName: "Kumbhar",
      title: "Head of Product",
      quote: "Every feature we build must simplify the academic journey and provide genuine value to the modern student.",
    },
    {
      image: karanImg,
      firstName: "Karan",
      lastName: "Khandait",
      title: "Lead Developer",
      quote: "I ensure our platform is robust, scalable, and delivers a seamless, lightning-fast experience for all our users.",
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
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--accent)] via-[var(--purple)] to-[#58a6ff] bg-clip-text text-transparent" style={{ textShadow: '0 6px 14px rgba(47, 129, 247, 0.35)' }}>
            Our Team
          </h1>
          <p className="text-2xl md:text-3xl font-['Poppins'] font-semibold mb-4 text-[var(--text)]">
            Building the Future of Learning
          </p>
          <p className="text-lg text-[var(--text2)]">
            Meet the Minds Behind UniOne's AI Revolution.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-6">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={`${member.firstName}-${member.lastName}`} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6" style={{ background: 'rgba(13, 17, 23, 0.3)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
              More Than a Team, We're a Community
            </h2>
            <p className="text-lg text-[var(--text2)] max-w-3xl mx-auto leading-relaxed">
              At UniOne, our foundation is built on a shared drive for innovation and student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>

          <p className="text-center text-lg text-[var(--text2)] max-w-3xl mx-auto leading-relaxed">
            We are educators, engineers, and visionaries working together to build a future where
            real-time, personalized learning becomes the global standard.
          </p>
        </div>
      </section>
    </div>
  );
}
