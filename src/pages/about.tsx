import type { PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import AboutPage from '../components/pages/about-page/about-page.components';

const About: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
};

// export const Head = () =>  <title>About Me</title>;

export default About;
