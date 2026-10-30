import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/shared/seo/seo.components';
import AboutPage from '../components/pages/about-page/about-page.components';

const About: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="About Me | Dr. Shalini Narayanan" pathname={location.pathname} />
);

export default About;
