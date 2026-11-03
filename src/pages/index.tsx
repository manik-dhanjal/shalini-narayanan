import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/shared/seo/seo.components';
import Homepage from '../components/pages/home-page/home-page.component';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default IndexPage;

// schema.org description of Shalini, so search engines can link the site to her profiles
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Shalini Narayanan',
  url: 'https://shalininarayanan.in/',
  image: 'https://shalininarayanan.in/images/thumbnail.jpg',
  jobTitle: 'Media Academic, Author & Trainer',
  description:
    'Veteran Media Expert | Ex-Indian Information Service Officer | Educator & Researcher (30+ Yrs Exp)',
  sameAs: [
    'https://www.linkedin.com/in/shalini-narayanan-2b665014',
    'https://www.facebook.com/AuthorShaNar',
    'https://twitter.com/shanar68',
    'https://www.instagram.com/ittisikahani/',
    'https://www.youtube.com/@ittisikahani',
    'https://www.youtube.com/@analoggeneration',
  ],
};

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Dr. Shalini Narayanan | Media Academic, Author & Trainer"
    pathname={location.pathname}
  >
    <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
  </SEO>
);
