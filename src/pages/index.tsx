import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout/layout.component';
import Homepage from '../components/pages/home-page/home-page.component';
import { SEO } from '../components/shared/seo/seo.components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <Homepage />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Dr. Shalini Narayanan - Media Academic & Author</title>;
