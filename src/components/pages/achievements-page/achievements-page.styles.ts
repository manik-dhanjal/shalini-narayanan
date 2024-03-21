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
      min-width: 1px;
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
  @media screen and (max-width: 760px) {
    .main-achievements {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 3rem;
      align-items: center;
      gap: 2rem;
      .img-cards {
        width: 70%;
      }
    }
    .other-achievements {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    .main-achievements .img-cards {
      width: 100%;
    }
    .other-achievements {
      flex-direction: column;
      .divider {
        display: none;
      }
    }
  }
`;

export default AchievementPageStyle;
