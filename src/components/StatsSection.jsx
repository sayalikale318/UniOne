import { motion } from 'framer-motion';
import Icon from './Icon';

const stats = [
  { label: 'Active Students', value: '12,000+', icon: 'users', color: '#2F81F7' },
  { label: 'Study Resources', value: '5,000+', icon: 'book', color: '#A371F7' },
  { label: 'Uni Partnerships', value: '150+', icon: 'grad', color: '#3FB950' },
  { label: 'Avg Score Boost', value: '24%', icon: 'zap', color: '#E3B341' }
];

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Platform Statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="stat-icon-wrap" style={{ '--accent': stat.color }}>
                <Icon n={stat.icon} s={24} c={stat.color} />
              </div>
              <div className="stat-info">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
