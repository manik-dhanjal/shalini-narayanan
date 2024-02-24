import type { PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import AchievementsPage from '../components/pages/achievements-page/achievements-page.components';

const Achievements: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AchievementsPage />
    </Layout>
  );
};

// export const Head = () =>  <title>About Me</title>;

export default Achievements;
