import styled, { createGlobalStyle } from 'styled-components';

const LayoutStyles = styled.div`
  main {
    max-width: 1440px;
    margin: auto;
    padding: 0rem 3.5rem;
  }
`;

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
.hindi{
  font-family: hind!important;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
`;

export default LayoutStyles;
