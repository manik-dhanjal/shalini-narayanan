import React, { ReactElement } from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';
import LayoutStyles, { GlobalStyles } from './layout.styles';

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
