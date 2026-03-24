import { motion } from 'framer-motion';
import Icon from './Icon';

const testimonials = [
  {
    name: 'Siddharth R.',
    college: 'IIT Kanpur',
    stream: 'Computer Science',
    text: "UniOne is the only platform that truly understands the engineering workflow. Their AI assistant and PYQ solutions are a game changer before exams.",
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Ananya S.',
    college: 'BITS Pilani',
    stream: 'Electrical Engineering',
    text: "The scholarships tracker is just amazing. I applied to 3 fellowships I never knew existed. Finally, a platform that actually helps us grow.",
    img: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Kabir D.',
    college: 'VIT Vellore',
    stream: 'Mechanical Engineering',
    text: "Finally, a centralized Hub for all resources. Their formula sheets and lab manuals saved me during my finals. Highly recommended!",
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-label="Student Testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon n="users" s={12} c="currentColor" />
            <span>Success Stories</span>
          </div>
          <h2 className="section-title">Trusted by Students Nationwide</h2>
          <p className="section-desc">See how UniOne is helping thousands of engineering students transform their education and career paths.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <p className="testimonial-college">{t.college} • {t.stream}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <Icon n="quote" s={16} c="var(--accent)" />
                <p>"{t.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
