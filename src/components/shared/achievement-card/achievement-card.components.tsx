import React from 'react';
import AchievementCardStyles from './achievement-card.styles';
import { AchievementCardProps } from './achievement-card.interface';
import { StaticImage } from 'gatsby-plugin-image';

const AchievementCard: React.FC<AchievementCardProps> = ({ title, imgSrc, desc, className }) => {
  return (
    <AchievementCardStyles isImgCard={!!imgSrc} className={`achievement-card ${className}`}>
      {imgSrc && (
        <StaticImage
          src="../../../images/ach1.png"
          alt={title}
          placeholder="blurred"
          className="card-img"
          width={500}
        />
      )}
      <div className="card-content">
        <p className="card-title">{title}</p>
        {desc && <p className="card-desc">{desc}</p>}
      </div>
    </AchievementCardStyles>
  );
};

export default AchievementCard;
