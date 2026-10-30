import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/shared/seo/seo.components';
import AchievementsPage from '../components/pages/achievements-page/achievements-page.components';

const Achievements: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AchievementsPage />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="Achievements | Dr. Shalini Narayanan" pathname={location.pathname} />
);

export default Achievements;
