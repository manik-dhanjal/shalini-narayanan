import React from 'react';
import AboutCardStyles from './about-card.styles';

interface AboutCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ imgSrc, title, description }) => {
  return (
    <AboutCardStyles className="about-card">
      <div className="about-card-icon">
        <img src={imgSrc} alt={title} className="about-card-icon-img" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </AboutCardStyles>
  );
};

export default AboutCard;
