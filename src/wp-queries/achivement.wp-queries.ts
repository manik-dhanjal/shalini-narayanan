import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { AchievementType } from '../components/shared/achievement-card/achievement.enum';
import { Achievement } from '../components/pages/achievements-page/achievment-page.interface';

export interface WpAchievement {
  title: string;
  content?: string;
  achievement: {
    achicementType: AchievementType;
    priority: number;
  };
  featuredImage?: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
}

export interface AllWpAchievements {
  allWpAchievement?: {
    nodes?: WpAchievement[];
  };
}

export const getAllAchievementsQuery = graphql`
  query {
    allWpAchievement {
      nodes {
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  breakpoints: [750, 1080, 1366, 1920]
                  quality: 60
                )
              }
            }
          }
        }
        achievement {
          achicementType
          priority
        }
      }
    }
  }
`;

export const getAllAchievements = (): Achievement[] => {
  const data = useStaticQuery<AllWpAchievements>(getAllAchievementsQuery);

  if (!data?.allWpAchievement?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpAchievement.nodes
    .sort((a: WpAchievement, b: WpAchievement) => b.achievement.priority - a.achievement.priority)
    .map((achievment: WpAchievement) => {
      return {
        title: achievment.title,
        description: achievment.content || null,
        img: achievment.featuredImage
          ? (getImage(achievment.featuredImage.node.localFile.childImageSharp) as IGatsbyImageData)
          : null,
        type: achievment.achievement.achicementType,
      };
    });
};
