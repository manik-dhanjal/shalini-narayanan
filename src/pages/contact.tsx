import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/shared/seo/seo.components';
import ContactPage from '../components/pages/contact-page/contact-page.components';

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="Contact | Dr. Shalini Narayanan" pathname={location.pathname} />
);

export default Contact;
