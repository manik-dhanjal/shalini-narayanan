import styled from 'styled-components';

const BannerStyles = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  flex-direction: column;
  .background-text {
    font-family: lora;
    z-index: 1;
    text-align: center;
    margin-top: 7vh;
    position: relative;
    h1 {
      text-shadow: 0 0.5em #00000010;
      font-size: clamp(100px, 10vw, 180px);
      letter-spacing: 0.15em;
      line-height: 1.5em;
      font-weight: 500;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .social-links {
    list-style: none;
    font-size: 1.5rem;
    z-index: 2;
    li {
      margin: 0.4rem 0;
      padding: 0.2rem 0;
      &:last-of-type {
        margin: 0;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: left;
        color: #000;
        text-decoration: none;
        font-weight: 400;
        cursor: pointer;
      }
      .arrow-icon {
        margin-left: 0.5rem;
        width: 1.5rem;
        transform: rotateZ(-45deg);
        transition: 0.3s ease;
      }

      &:hover {
        .arrow-icon {
          transform: rotateZ(0deg);
        }
      }
    }
  }
  .title-sum {
    font-size: 1.5rem;
    z-index: 2;
  }
  @media screen and (min-width: 780px) {
    height: calc(100vh - 79px);
    max-height: clamp(600px, 55vw, 900px);
    .banner-img {
      position: absolute;
      top: 56%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: clamp(150px, 18vw, 350px);
      z-index: 2;
    }
    .social-links {
      position: absolute;
      left: 0;
      bottom: 2rem;
    }
    .title-sum {
      position: absolute;
      right: 0;
      bottom: 2rem;
    }
  }
  @media screen and (max-width: 780px) {
    .background-text {
      margin-top: 3rem;
      h1 {
        font-size: 12.5vw;
        line-height: 1.2em;
      }
      p {
        font-size: 5vw;
        margin-bottom: 1vw;
      }
    }
    .banner-img {
      position: relative;
      transform: none;
      left: 0;
      width: 30%;
      min-width: 200px;
      margin-top: -2em;
    }
    .title-sum {
      font-size: 1rem;
      z-index: 2;
      text-align: center;
      margin-top: 3rem;
    }
    .social-links {
      display: none;
    }
  }
`;

export default BannerStyles;
