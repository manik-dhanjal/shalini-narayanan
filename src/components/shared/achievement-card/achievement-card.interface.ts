import { Achievement } from '../../pages/achievements-page/achievment-page.interface';

export interface AchievementCardProps extends Achievement {
  className?: string;
}

export interface AchievementStyleProps {
  isImgCard: boolean;
}
