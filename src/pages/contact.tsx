import type { PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import ContactPage from '../components/pages/contact-page/contact-page.components';

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
};

export const Head = () => <title>Contact</title>;

export default Contact;
