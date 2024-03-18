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
        .social-link-icons {
          display: none;
        }
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

  @media screen and (max-width: 1024px) {
    .wrapper {
      .upper-wrapper {
        .left-wrapper {
          .name {
            font-size: 2.5rem;
            font-weight: 400;
            margin-bottom: 10rem;
          }
          .email {
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
          }
        }
        .right-wrapper {
          .social-links {
            li {
              margin-left: 2rem;
            }
            a {
              font-size: 0.9rem;
            }
          }
        }
      }
      .lower-wrapper {
        .copyright,
        .develop-by,
        a {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .wrapper .upper-wrapper .right-wrapper {
      .social-links {
        display: none;
      }
      .social-link-icons {
        display: block;
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
        color: #fff;
        a {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .wrapper {
      padding: 1rem 1rem;
      padding-bottom: 2rem;
      .upper-wrapper {
        padding: 1.5rem 0;
        flex-direction: column;
        .left-wrapper {
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          .name {
            margin-bottom: 4rem;
            text-align: center;
          }
        }
        .right-wrapper {
          display: flex;
          justify-content: center;
        }
      }
      .lower-wrapper {
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        align-items: center;
      }
    }
  }
`;

export default FooterStyles;
