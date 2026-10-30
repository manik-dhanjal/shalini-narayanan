import React from 'react';
import AchievementCardStyles from './achievement-card.styles';
import { AchievementCardProps } from './achievement-card.interface';
import { AchievementType } from './achievement.enum';

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  img,
  type,
  description,
  className,
}) => {
  return (
    <AchievementCardStyles className={`achievement-card ${className}`}>
      {img && <img src={img} alt={title} loading="lazy" />}
      <div className="card-content">
        <p className="card-title">{title}</p>
        {type === AchievementType.PRIMARY && description && (
          <div className="card-desc" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </AchievementCardStyles>
  );
};

export default AchievementCard;
