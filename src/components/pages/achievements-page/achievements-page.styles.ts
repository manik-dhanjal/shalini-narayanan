import styled from 'styled-components';

const AchievementPageStyle = styled.div`
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  .main-achievements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    .img-cards {
      width: 32%;
    }
  }
  .other-achievements {
    display: flex;
    gap: 2rem;
    .divider {
      width: 1px;
      background-color: #cccccc;
    }

    .achievement-card {
      margin-bottom: 1.5rem;

      &:last-of-type {
        margin-bottom: 0;
      }
      .card-title {
        margin-bottom: 0;
      }
    }
  }
`;

export default AchievementPageStyle;
