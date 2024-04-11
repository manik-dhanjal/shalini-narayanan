import React from 'react';
import AchievementPageStyle from './achievements-page.styles';
import AchievementCard from '../../shared/achievement-card/achievement-card.components';
import { getAllAchievements } from '../../../wp-queries/achivement.wp-queries';
import { AchievementType } from '../../shared/achievement-card/achievement.enum';

const AchievementsPage: React.FC = () => {
  const allAchievements = getAllAchievements();
  const secondaryAchievements = allAchievements.filter(
    ({ type }) => type === AchievementType.SECONDARY
  );
  const primaryAchievements = allAchievements.filter(
    ({ type }) => type === AchievementType.PRIMARY
  );
  return (
    <AchievementPageStyle>
      <h2 className="primary-title underline align-center">Achievements</h2>
      <div className={`main-achievements ${primaryAchievements.length % 2 === 0 ? 'even' : 'odd'}`}>
        {primaryAchievements.map((achievement) => (
          <AchievementCard className="img-cards" {...achievement} />
        ))}
      </div>
      <div className="other-achievements">
        <div className="left-side list">
          {secondaryAchievements
            .slice(0, Math.floor(secondaryAchievements.length / 2) + 1)
            .map((achievement, index) => (
              <AchievementCard {...achievement} key={achievement.title + index} />
            ))}
        </div>
        <div className="divider"></div>
        <div className="right-side list">
          {secondaryAchievements
            .filter(({ type }) => type === AchievementType.SECONDARY)
            .slice(Math.floor(secondaryAchievements.length / 2) + 1, secondaryAchievements.length)
            .map((achievement, index) => (
              <AchievementCard {...achievement} key={achievement.title + index} />
            ))}
        </div>
      </div>
    </AchievementPageStyle>
  );
};
export default AchievementsPage;
