import styled from 'styled-components';

const HomePageStyles = styled.div`
  // about section
  .about {
    margin: 4.5rem 0;
    .about-wrapper {
      display: flex;
      gap: 5rem;
      font-size: 1rem;
      .about-desc {
        color: #5f5f5f;
        font-size: 1rem;
        margin-bottom: 1.2rem;
      }
    }
    .about-right-wrapper {
      min-width: 26rem;
      .about-card {
        margin: 2rem 0;
        &:first-of-type {
          margin-top: 0;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
  // itti si Kahani section
  .itti-si-kahani {
    display: flex;
    gap: 3rem;
    margin: 4.5rem 0;

    .content {
      .intro-video.mobile {
        display: none;
      }
      .description {
        margin-bottom: 1.2rem;
        color: #5f5f5f;
        font-size: 1rem;
      }
    }
  }
  //health factor section
  .health-factor {
    display: flex;
    margin: 4.5rem 0;
    gap: 4rem;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
    /* for content section of health factor */
    .wrapper-left {
      width: 60%;
      .desc {
        color: #5f5f5f;
        font-size: 1rem;
        font-weight: 400;
      }
    }
    // for slider section of health factor
    .wrapper-right {
      width: 40%;
      .health-factor-slide {
        position: relative;
        .slick-dots {
          display: flex;
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
  }
  // latest book/release section
  .latest-release {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 4.5rem 0;
    .book-img {
      z-index: 1;
      width: 300px;
      position: absolute;
      left: 8%;
      top: 0;
    }
    .content {
      margin-top: 110px;
      z-index: 2;
      max-width: 700px;
      border: 1px solid #000;
      background-color: #fff;
      padding: 1.5rem;
      margin-left: 80px;
      .head {
        font-size: 1.5rem;
        color: #0c0c0c;
        font-weight: 400;
        font-family: lora;
        margin-bottom: 1.5rem;
      }
      .desc {
        color: #5f5f5f;
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
  // digital showcase
  .digital-showcase {
    margin: 4.5rem 0;
  }
  @media screen and (max-width: 1200px) {
    .latest-release {
      .book-img {
      }
      .content {
        margin-top: 160px;
        margin-left: 190px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .about-wrapper {
      flex-direction: column;
      gap: 3rem !important;
      .about-right-wrapper {
        width: 100%;
        min-width: 100%;
      }
    }
    .itti-si-kahani {
      .intro-video.desktop {
        display: none;
      }
      .intro-video.mobile {
        display: block !important;
        width: 100%;
        margin-bottom: 1rem;
        iframe {
          width: 100%;
        }
      }
    }
    .health-factor {
      flex-direction: column-reverse;
      gap: 0;
      h3 {
        margin-bottom: 1.5rem;
      }
      .wrapper-left,
      .wrapper-right {
        width: 100%;
      }
      .wrapper-right {
        margin-bottom: 2rem;
      }
      .mobile {
        display: block;
      }
      .desktop {
        display: none;
      }
      .health-factor-slide {
        padding: 0 0.5rem;
      }
    }
    .latest-release {
      .book-img {
        width: 240px;
        left: -3%;
      }
      .content {
        margin-top: 230px;
        margin-left: 60px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .about-wrapper {
      .about-right-wrapper {
        display: none;
      }
    }
    .latest-release {
      .book-img {
        width: 200px;
        left: -3%;
      }
      .content {
        margin-top: 200px;
        margin-left: 40px;
      }
    }
  }
`;

export default HomePageStyles;
