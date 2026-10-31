import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  .carousel-figure {
    .gatsby-image-wrapper,
    > img {
      display: block;
      width: 100%;
      border-radius: var(--radius);
      overflow: hidden;
      isolation: isolate;
    }
  }
  .carousel-caption {
    margin-top: 0.8rem;
    color: #5f5f5f;
    font-size: 0.85rem;
    font-style: italic;
    text-align: center;
  }
  .slick-dots {
    position: static;
    margin-top: 0.8rem;
    display: flex !important;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slick-pag-item {
      width: 10px;
      height: 10px;
      background: #5f5f5f;
      border-radius: 100px;
      transition: 0.3s ease;
    }
    .slick-active {
      .slick-pag-item {
        width: 20px;
      }
    }
  }
`;
export default ImageCarouselStyles;
