import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../../components/layout/layout.component';
import { SEO } from '../../components/shared/seo/seo.components';
import TrainingServicesPage from '../../components/pages/training-service-page/training-service-page.components';

const TrainingServices: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TrainingServicesPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="Training Services | Dr. Shalini Narayanan" pathname={location.pathname} />
);

export default TrainingServices;
