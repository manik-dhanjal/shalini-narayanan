import styled, { createGlobalStyle } from 'styled-components';

const LayoutStyles = styled.div`
  main {
    max-width: 1440px;
    margin: auto;
    padding: 0rem 2rem;
    background-color: red;
    height: 200vh;
  }
`;

export const GlobalStyles = createGlobalStyle`
body{
  font-size:16px;
  margin:0;
  font-family: lato;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
`;

export default LayoutStyles;
