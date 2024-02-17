import styled from 'styled-components';

const AboutCardStyles = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  .about-card-icon {
    width: 3.5rem;
    height: 3.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .card-content {
    width: calc(100% - 4.5rem);
    font-size: 1rem;
    font-family: lato;
    h4 {
      font-size: 1.1rem;
      font-weight: 400;
      color: #000;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      color: #5f5f5f;
    }
  }
`;

export default AboutCardStyles;
