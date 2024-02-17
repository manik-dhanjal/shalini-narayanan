import React, { ReactElement } from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';
import LayoutStyles, { GlobalStyles } from './layout.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  );
};

export default Layout;
