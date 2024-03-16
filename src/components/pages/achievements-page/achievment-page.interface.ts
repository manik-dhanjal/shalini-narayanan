import { IGatsbyImageData } from 'gatsby-plugin-image';
import { AchievementType } from '../../shared/achievement-card/achievement.enum';

export interface Achievement {
  title: string;
  type: AchievementType;
  description: string | null;
  img: IGatsbyImageData | null;
}
