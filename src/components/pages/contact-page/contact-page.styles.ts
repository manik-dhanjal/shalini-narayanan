import styled from 'styled-components';

const ContactPageStyle = styled.div`
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  .wrapper {
    display: flex;
    gap: 3rem;
    .left,
    .right {
      width: 50%;
    }
    .left {
      .contact-img {
        margin-bottom: 3rem;
      }
      .name-title {
        font-size: 2.3rem;
        color: #0c0c0c;
        font-family: lato;
        font-weight: 400;
        margin-bottom: 1rem;
      }
      .email-link {
        font-size: 1.1rem;
        font-family: lato;
        color: #5f5f5f;
        margin-bottom: 2rem;
        .email-label {
          font-weight: 500;
          margin-right: 0.5rem;
        }
        a {
          text-decoration: none;
          color: #5f5f5f;
        }
      }
      .social-links {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        a {
          color: #292f36;
          transition: 0.3s ease;
          .icon {
            font-size: 1.5rem;
          }
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 720px) {
    .primary-title {
      margin-bottom: 3rem;
    }
    .wrapper {
      flex-direction: column-reverse;
      .left,
      .right {
        width: 100%;
      }
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
        &.contact-img {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export default ContactPageStyle;
