import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout/layout.component';
import CreativeWritingPage from '../../components/pages/creative-writing-page/creative-writing-page.components';

const CreativeWriting: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CreativeWritingPage />
    </Layout>
  );
};

export const Head = () => <title>Creative Writing & Publications</title>;

export default CreativeWriting;
