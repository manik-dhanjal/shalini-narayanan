import React from 'react';
import AchievementCardStyles from './achievement-card.styles';
import { AchievementCardProps } from './achievement-card.interface';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AchievementType } from './achievement.enum';

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  img,
  type,
  description,
  className,
}) => {
  return (
    <AchievementCardStyles
      isImgCard={type === AchievementType.PRIMARY}
      className={`achievement-card ${className}`}
    >
      {img && <GatsbyImage alt={title} image={img} />}
      <div className="card-content">
        <p className="card-title">{title}</p>
        {type === AchievementType.PRIMARY && description && (
          <p className="card-desc" dangerouslySetInnerHTML={{ __html: description }}></p>
        )}
      </div>
    </AchievementCardStyles>
  );
};

export default AchievementCard;
