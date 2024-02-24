import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  color: #fff;
  .wrapper {
    padding: 1rem 3.5rem;
    max-width: 1440px;
    margin: auto;
    .upper-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 3rem 0;
      .left-wrapper {
        .name {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 10rem;
        }
        .email {
          color: #fff;
          text-decoration: none;
          font-size: 1.5rem;
        }
      }
      .right-wrapper {
        display: flex;
        align-items: end;
        .social-links {
          list-style: none;
          display: flex;

          li {
            margin-left: 3rem;
            position: relative;
          }
          a {
            color: #fff;
            font-size: 1.2rem;
            text-decoration: none;
          }
        }
      }
    }
    .lower-wrapper {
      display: flex;
      justify-content: space-between;
      color: #8b8b8b;
      .manik-link {
        margin-left: 5px;
        color: #8b8b8b;
        text-decoration: none;
      }
    }
  }
  .footer-bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .underline-link {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    &::after {
      content: '';
      width: 0%;
      height: 1px;
      background: #fff;
      position: absolute;
      bottom: -0.05rem;
      left: 0;
      transition: 0.3s ease;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

export default FooterStyles;
