import React from 'react';
import Layout from '../../components/layout/layout.component';
import { SEO } from '../../components/shared/seo/seo.components';
import { HeadFC, PageProps } from 'gatsby';
import AcademicTeachingPage from '../../components/pages/academic-teaching-page/academic-teaching-page.components';

const AcademicTeaching: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AcademicTeachingPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="Academic Teaching | Dr. Shalini Narayanan" pathname={location.pathname} />
);

export default AcademicTeaching;
