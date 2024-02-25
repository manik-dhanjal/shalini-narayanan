import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/layout/layout.component';
import TrainingServicesPage from '../../components/pages/training-service-page/training-service-page.components';

const TrainingServices: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TrainingServicesPage />
    </Layout>
  );
};

export const Head = () => <title>Training Services</title>;

export default TrainingServices;
