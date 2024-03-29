import styled from 'styled-components';

const CardSliderStyles = styled.div`
  max-width: 100%;
  padding-bottom: 1rem;
  overflow-x: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  .slides-wrapper {
    display: flex;
    gap: 2rem;
  }
  .card {
    a {
      text-decoration: none;
    }
    min-width: 30rem;
    .card-img {
      width: 100%;
      margin-bottom: 1.1rem;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      .youtube-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        width: 4rem;
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
    .download-icon {
      position: absolute;
      top: 0;
      left: 0%;
      background-color: #5f5f5f20;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .icon {
        font-size: 4rem;
        color: white;
      }
    }
    .card-title {
      color: #0c0c0c;
      font-size: 1.2rem;
      margin-bottom: 0.9rem;
      font-weight: 400;

      // clips text after 2 lines by appending ... at the end
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-desc {
      color: #5f5f5f;
      font-size: 1rem;

      // clips text after 3 lines by appending ... at the end
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 600px) {
    .slides-wrapper {
      display: flex;
      gap: 1rem;
    }
    .card {
      min-width: 20rem;
      .download-icon {
        .icon {
          font-size: 3rem;
        }
      }
      .card-title {
        font-size: 1.1rem;
      }
      .card-desc {
        font-size: 0.9rem;
      }
    }
  }
`;

export default CardSliderStyles;
