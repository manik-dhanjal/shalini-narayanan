import styled, { createGlobalStyle } from 'styled-components';

// GLOBAL styles
export const GlobalStyles = createGlobalStyle`
@import 'node_modules/slick-carousel/slick/slick.css';
@import "node_modules/slick-carousel/slick-theme.css";
html{
  font-size: 18px;
}
body{
  font-size:18px;
  margin:0;
  font-family: lato;
}
@media screen and (max-width: 1200px){
  body{
    font-size: 16px;
  }
  html{
    font-size: 16px;
  }
}
.hindi{
  font-family: hind!important;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
`;

// LAYOUT styles
const LayoutStyles = styled.div`
  // common css
  .sub-title {
    font-family: lora;
    font-size: 1.1rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 0.8rem;
  }
  .primary-title {
    font-family: lora;
    font-size: 2.3rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 2rem;
  }
  .align-center {
    text-align: center;
  }
  .underline {
    position: relative;
    margin-bottom: 2.5rem;
    &:after {
      content: '';
      width: 5rem;
      height: 1px;
      background-color: #0c0c0c;
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .secondary-title {
    font-family: lora;
    font-size: 1.5rem;
    font-weight: 400;
    color: #0c0c0c;
    margin-bottom: 1.1rem;
  }
  .paragraph {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-family: lato;
    font-weight: 400;
    color: #5f5f5f;
  }

  main {
    max-width: 1440px;
    margin: auto;
    padding: 0rem 3.5rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      /*  transform: rotate3d(3, 2, 1, 5deg); */
      /*  transform: rotateX(360deg);  */
      /*  transform: rotateY(360deg); */
      /*  transform: rotateZ(0deg); */
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 780px) {
    main {
      padding: 0rem 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    main {
      padding: 0rem 1rem;
    }
    .sub-title {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    .primary-title {
      font-size: 2.4rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default LayoutStyles;
