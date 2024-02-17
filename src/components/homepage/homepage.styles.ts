import styled from 'styled-components';

const HomepageStyles = styled.div`
  // common css
  .sub-title {
    font-family: lora;
    font-size: 1.1rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 0.8rem;
  }
  .primary-title {
    font-family: lora;
    font-size: 2.3rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 2rem;
  }
  .align-center {
    text-align: center;
  }
  .secondary-title {
    font-family: lora;
    font-size: 1.5rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 1.1rem;
  }
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

  // testimonials
  .testimonials {
    margin: 4.5rem 0;
    .testimonial-card {
      margin-bottom: 2rem;
      .name {
        font-size: 1rem;
        text-align: right;
        font-size: 1rem;
      }
      .desc {
        margin-bottom: 1rem;
        color: #5f5f5f;
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }

    .wrapper {
      display: flex;
      margin-bottom: 2rem;
      gap: 2rem;
      .left-wrapper {
        width: 50%;
        .testimonial-card:last-of-type {
          margin-bottom: 0;
        }
      }
      .divider {
        width: 2px;
        background-color: #cccccc;
      }
      .right-wrapper {
        width: 50%;
        .testimonial-card:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default HomepageStyles;
