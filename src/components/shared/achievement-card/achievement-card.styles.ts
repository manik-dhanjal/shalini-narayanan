import styled from 'styled-components';
import { AchievementStyleProps } from './achievement-card.interface';

const AchievementCardStyles = styled.div<AchievementStyleProps>`
  border: 1px solid #cac4d0;
  border-radius: 0.5rem;
  overflow: hidden;
  .card-content {
    padding: 0.8rem 1rem;
    .card-title {
      font-family: lato;
      font-size: 0.9rem;
      font-weight: 400;
      color: #1d1b20;
      margin-bottom: 0.9rem;
    }
    .card-desc {
      font-family: lato;
      font-size: 0.8rem;
      font-weight: 400;
      color: #49454f;
    }
    .card-link {
      display: inline-block;
      margin-top: 0.6rem;
      font-size: 0.8rem;
      color: #0c0c0c;
      text-decoration: underline;
    }
  }
`;

export default AchievementCardStyles;
