import { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout/layout.component';
import { SEO } from '../../components/shared/seo/seo.components';
import CreativeWritingPage from '../../components/pages/creative-writing-page/creative-writing-page.components';

const CreativeWriting: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CreativeWritingPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Creative Writing & Publications | Dr. Shalini Narayanan"
    pathname={location.pathname}
  />
);

export default CreativeWriting;
