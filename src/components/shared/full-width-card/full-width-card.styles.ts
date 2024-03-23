import styled from 'styled-components';

const FullWidthCardStyles = styled.div`
  display: flex;
  gap: 3rem;
  .card-img {
    width: 45%;
  }
  .card-content {
    width: 55%;
    .card-title {
      font-size: 1.5rem;
      font-family: lora;
      font-weight: 400;
      margin-bottom: 1rem;
      color: #0c0c0c;
    }
    .card-categories {
      margin-bottom: 0.8rem;
    }
    .card-category {
      background-color: #0c0c0c;
      display: inline-block;
      color: #fff;
      border-radius: 50px;
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .card-desc {
      color: #5f5f5f;
      font-size: 1rem;
      font-family: lato;
      margin-bottom: 1.2rem;
    }
  }

  @media screen and (max-width: 1024px) {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    flex-direction: column;
    gap: 1.5rem;
    .card-img {
      width: 100%;
    }
    .card-content {
      width: 100%;
      .card-title {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 720px) {
    padding: 0.8rem;
    gap: 1.5rem;
  }
`;

export default FullWidthCardStyles;
