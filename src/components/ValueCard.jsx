import React from 'react';

export function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card glass-card">
      <div className="value-card__icon-wrap">
        {icon}
      </div>
      <div className="value-card__content">
        <h3 className="value-card__title">{title}</h3>
        <p className="value-card__desc">{description}</p>
      </div>
    </div>
  );
}
