import styled from 'styled-components';
import bg from '../../../../static/images/Group 18.svg';
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
      white-space: break-line;
      span {
        white-space: nowrap;
      }
    }
  }
  .right-side {
    width: 40%;
    .banner-img {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 1050px) {
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
    // no bottom padding: the gap below comes from the next section's margin, like elsewhere
    padding: 1.5rem 0 0;
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
      text-align: center;
      .sub-title {
        font-size: clamp(1rem, 3.6vw, 1.2rem);
        line-height: 1.4;
        margin-bottom: 0.75rem;
      }
      h1 {
        font-size: clamp(2.5rem, 11vw, 3.75rem);
        line-height: 1.05;
        margin-bottom: 1.5rem;
      }
      .description {
        // scales with the screen so each credential fits on one line on phones
        font-size: clamp(0.8rem, 4vw, 1.05rem);
        line-height: 1.6;
        color: #5f5f5f;
        // keeps a wrapped credential from leaving one word on its own line
        text-wrap: balance;
      }
    }
    // full column width, so the photo's black frame lines up with the page edges
    .banner-img {
      width: 100%;
      margin: 0 0 1.5rem;
    }
  }
`;

export default BannerStyles2;
