import { motion } from 'framer-motion';
import Icon from './Icon';

export default function EngagementCTA({ navigate }) {
  return (
    <section className="engagement-cta-section" aria-label="Final Call to Action">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-desc">Join 12,000+ engineering students today and experience the future of academic learning. Get started with UniOne for free.</p>
            <div className="cta-actions">
              <button 
                className="cta-btn cta-btn--primary"
                onClick={() => navigate('register')}
              >
                Join Now Free
                <Icon n="arrow" s={16} c="white" />
              </button>
              <button 
                className="cta-btn cta-btn--outline"
                onClick={() => navigate('explore')}
              >
                Explore Resources
              </button>
            </div>
          </div>
          <div className="cta-shapes" aria-hidden="true">
            <div className="cta-circle cta-circle--1" />
            <div className="cta-circle cta-circle--2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
