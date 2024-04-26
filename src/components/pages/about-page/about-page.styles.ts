import styled from 'styled-components';

const AboutPageStyles = styled.div`
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  .primary-title {
    &.desktop {
      display: block;
    }
    &.tablet {
      display: none;
    }
  }
  .tertiary-head {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: lato;
    margin-bottom: 1.5rem;
  }
  .service {
    margin-bottom: 2.5rem;
  }
  .summary {
    margin-bottom: 2rem;
    .cv-btn {
      margin-bottom: 1.5rem;
    }
    .shalinis-img {
      float: left;
      max-width: 41%;
      margin-right: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }
  .co-training {
    .sunetra-sen-img {
      float: right;
      max-width: 28%;
      margin-left: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .summary {
      .shalinis-img {
        max-width: 50%;
      }
    }
    .co-training .sunetra-sen-img {
      margin-left: 1.5rem;
      width: 50%;
      max-width: 50%;
    }
  }
  @media screen and (max-width: 760px) {
    .primary-title {
      &.desktop {
        display: none;
      }
      &.tablet {
        display: block;
        width: 100%;
        text-align: center;
        br {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .summary {
      .shalinis-img {
        max-width: 100%;
        float: none;
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
    .co-training .sunetra-sen-img {
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      float: none;
      margin-bottom: 2rem;
    }
  }
`;

export default AboutPageStyles;
