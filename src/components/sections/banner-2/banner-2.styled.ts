import styled from 'styled-components';
import bg from '../../../images/Group 18.svg';
const BannerStyles2 = styled.div`
  display: flex;
  gap: 2rem;
  height: calc(100vh - 79px);
  align-items: center;
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: 0% -30%;
  .sm {
    display: none;
  }
  .left-side {
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-family: lora;
      font-size: clamp(100px, 10vw, 120px);
      line-height: 1em;
      font-weight: 500;
      margin-bottom: 3rem;
    }
    .sub-title {
      font-family: lora;
      font-size: 1.8rem;
    }
    .description {
      font-family: lato;
      font-size: 1.3rem;
    }
  }
  .right-side {
    width: 40%;
    .banner-img {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 2rem 0;
    padding-top: 4rem;
    background-size: cover;
    background-position: 0% -20%;
    gap: 1rem;
    .left-side {
      h1 {
        font-size: 4.5rem;
        margin-bottom: 2.5rem;
      }
      .sub-title {
        font-size: 1.3rem;
        margin-bottom: 1.3rem;
      }
      .description {
        font-size: 1.1rem;
      }
    }
    .right-side {
      width: 40%;
    }
  }

  @media screen and (max-width: 800px) {
    .left-side {
      h1 {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
      .sub-title {
        font-size: 1.2rem;
      }
      .description {
        font-size: 1rem;
      }
    }
    .right-side {
      .banner-img {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .lg {
      display: none;
    }
    .sm {
      display: block;
    }
    .left-side {
      width: 100%;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: clamp(60px, 14vw, 120px);
        margin-bottom: 4rem;
      }
      .sub-title {
        font-size: clamp(1rem, 4vw, 120px);
        margin-bottom: 1rem;
        text-align: center;
      }
      .description {
        font-size: 0.9rem;
        text-align: center;
        font-size: clamp(0.9rem, 4vw, 120px);
      }
    }
    .banner-img {
      margin: 0rem 2rem;
      margin-bottom: 4rem;
      width: clamp(180px, 60vw, 400px);
    }
  }
`;

export default BannerStyles2;
