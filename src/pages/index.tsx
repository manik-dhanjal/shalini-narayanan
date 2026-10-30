import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/shared/seo/seo.components';
import Homepage from '../components/pages/home-page/home-page.component';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title="Dr. Shalini Narayanan - Media Academic & Author" pathname={location.pathname} />
);
