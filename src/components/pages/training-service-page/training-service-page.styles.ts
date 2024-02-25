import styled from 'styled-components';

const TrainingServicesPageStyles = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 4.5rem;
  .primary-title {
    margin-bottom: 4.5rem;
  }
  .content {
    .reverse {
      flex-direction: row-reverse;
    }
    .service-card {
      display: flex;
      gap: 3rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 4.5rem;
      .card-img {
        width: 50%;
      }
      .card-content {
        width: 50%;
      }
    }
  }
  .youtube-video {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      max-width: 822px;
      height: 462px;
      width: 100%;
      margin-bottom: 4.5rem;
    }
  }
  .media-spotlight {
    .primary-title {
      margin-bottom: 2rem !important;
    }
  }
`;

export default TrainingServicesPageStyles;
