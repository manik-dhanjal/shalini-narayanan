import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout/layout.component';
import Homepage from '../components/homepage/homepage.component';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default IndexPage;

