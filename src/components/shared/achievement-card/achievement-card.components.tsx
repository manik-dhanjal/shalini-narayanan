import React from 'react';
import AchievementCardStyles from './achievement-card.styles';
import { AchievementCardProps } from './achievement-card.interface';
import { AchievementType } from './achievement.enum';
import ContentImage from '../content-image/content-image.component';

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  img,
  type,
  description,
  link,
  className,
}) => {
  return (
    <AchievementCardStyles className={`achievement-card ${className}`}>
      {img && <ContentImage src={img} alt={title} />}
      <div className="card-content">
        <p className="card-title">{title}</p>
        {type === AchievementType.PRIMARY && description && (
          <div className="card-desc" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {type === AchievementType.PRIMARY && link && (
          <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
            View post
          </a>
        )}
      </div>
    </AchievementCardStyles>
  );
};

export default AchievementCard;
