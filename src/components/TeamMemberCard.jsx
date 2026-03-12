import React from 'react';

export function TeamMemberCard({ image, firstName, lastName, title, quote }) {
  return (
    <div className="team-card glass-card">
      <div className="team-card__image-container">
        <img src={image} alt={`${firstName} ${lastName}`} className="team-card__image" />
        <div className="team-card__glow"></div>
      </div>
      <div className="team-card__content">
        <h3 className="team-card__name">{firstName} {lastName}</h3>
        <p className="team-card__title">{title}</p>
        <div className="team-card__divider"></div>
        <p className="team-card__quote italic">"{quote}"</p>
      </div>
      <div className="team-card__accent"></div>
    </div>
  );
}
