import React from 'react';
import Layout from '../../components/layout/layout.component';
import { PageProps } from 'gatsby';
import AcademicTeachingPage from '../../components/pages/academic-teaching-page/academic-teaching-page.components';
const AcademicTeaching: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AcademicTeachingPage />
    </Layout>
  );
};

export const Head = () => <title>Academic Teaching</title>;

export default AcademicTeaching;
