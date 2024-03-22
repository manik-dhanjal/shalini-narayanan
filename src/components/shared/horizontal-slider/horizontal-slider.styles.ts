import styled from 'styled-components';

const HorizontalSliderStyles = styled.div`
  .full-width-card {
    margin-bottom: 3rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    .slider-wrapper {
      display: flex;
      gap: 1rem;
      .left,
      .right {
        width: 50%;
      }
      .full-width-card {
        width: 100%;
        margin-bottom: 2rem !important;
      }
    }
  }
  @media screen and (max-width: 720px) {
    .slider-wrapper {
      flex-direction: column;
      .right,
      .left {
        width: 100%;
      }
    }
  }
`;

export default HorizontalSliderStyles;
