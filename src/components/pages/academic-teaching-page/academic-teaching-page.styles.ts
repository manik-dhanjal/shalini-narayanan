import styled from 'styled-components';

const AcademicTeachingPageStyles = styled.div`
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
  @media screen and (max-width: 720px) {
    .content .service-card {
      flex-direction: column !important;
      gap: 1.5rem;
      .card-img {
        width: 100%;
      }
      .card-content {
        width: 100%;
        h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
      }
    }
    .youtube-video iframe {
      height: 350px;
    }
    .primary-title {
      margin-bottom: 3.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .youtube-video iframe {
      height: 300px;
    }
  }
`;

export default AcademicTeachingPageStyles;
