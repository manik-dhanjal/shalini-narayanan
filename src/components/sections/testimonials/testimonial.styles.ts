import styled from 'styled-components';

export const TestimonialStyles = styled.div`
  // testimonials
  .testimonials {
    margin: 4.5rem 0;

    .wrapper {
      display: flex;
      margin-bottom: 2rem;
      gap: 2rem;
      .left-wrapper {
        width: 50%;
        .testimonial-card:last-of-type {
          margin-bottom: 0;
        }
      }
      .divider {
        width: 1px;
        min-width: 1px;
        background-color: #cccccc;
      }
      .right-wrapper {
        width: 50%;
        .testimonial-card:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    .testimonial-for-desktop {
      display: block;
    }
    .testimonials-for-mobile {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .testimonials {
      .testimonial-for-desktop {
        display: none;
      }
      .testimonials-for-mobile {
        display: block;
        .testimonial-card {
          margin-bottom: 1rem;
        }
        .slick-dots {
          display: flex;
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
      }
    }
  }
`;
