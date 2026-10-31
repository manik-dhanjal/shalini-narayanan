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
        min-width: 0;
      }
      .card-content {
        width: 50%;
        .card-desc p + p {
          margin-top: 1rem;
        }
      }
    }
    .card-figure {
      img {
        display: block;
        width: 100%;
      }
    }
    .card-caption {
      margin-top: 0.8rem;
      color: #5f5f5f;
      font-size: 0.85rem;
      font-style: italic;
      text-align: center;
    }
    .card-slider {
      .slick-dots {
        position: static;
        margin-top: 0.8rem;
        display: flex !important;
        justify-content: center;
        align-items: center;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .slick-pag-item {
          width: 10px;
          height: 10px;
          background: #5f5f5f;
          border-radius: 100px;
          transition: 0.3s ease;
        }
        .slick-active {
          .slick-pag-item {
            width: 20px;
          }
        }
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
