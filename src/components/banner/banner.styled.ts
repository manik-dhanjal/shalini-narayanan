import styled from 'styled-components';

const BannerStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: calc(100vh - 79px);
  .background-text {
    font-family: lora;
    z-index: 1;
    text-align: center;
    margin-top: 7vh;
    h1 {
      text-shadow: 0 0.5em #00000010;
      font-size: 10vw;
      letter-spacing: 0.15em;
      line-height: 1.5em;
      font-weight: 500;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .banner-img {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18vw;
    z-index: 2;
  }
  .social-links {
    list-style: none;
    position: absolute;
    left: 0;
    bottom: 2rem;
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
    position: absolute;
    right: 0;
    bottom: 2rem;
    font-size: 1.5rem;
    z-index: 2;
  }
`;

export default BannerStyles;
