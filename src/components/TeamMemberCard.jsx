import React from 'react';
import Icon from './Icon';

export function TeamMemberCard({ image, firstName, lastName, title, quote, isReversed, accent }) {
  const cardStyle = {
    '--card-accent': accent,
    '--card-accent-soft': `${accent}15`
  };

  return (
    <div 
      className={`team-card team-card--horizontal glass-card ${isReversed ? 'team-card--reversed' : ''}`}
      style={cardStyle}
    >
      <div className="team-card__image-container">
        <img src={image} alt={`${firstName} ${lastName}`} className="team-card__image" />
        <div className="team-card__glow"></div>
      </div>
      <div className="team-card__content">
        <div className="team-card__header">
          <h3 className="team-card__name">{firstName} {lastName}</h3>
          <p className="team-card__title">{title}</p>
        </div>
        <div className="team-card__divider"></div>
        <div className="team-card__quote-wrap">
          <Icon n="zap" s={16} c="var(--card-accent)" style={{ opacity: 0.8, marginTop: '4px' }} />
          <p className="team-card__quote">"{quote}"</p>
        </div>
      </div>
      <div className="team-card__accent-bar"></div>
    </div>
  );
}
