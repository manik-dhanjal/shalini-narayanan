import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { AboutSectionTypes } from '../components/pages/about-page/about.enum';
import { About } from '../components/pages/about-page/about.interface';

export interface WpAbout {
  title: string;
  content: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  } | null;
  about: {
    sectionType: AboutSectionTypes;
    resumeLink: {
      mediaItemUrl: string;
    } | null;
  };
}

export interface AllWpAbout {
  allWpAbout?: {
    nodes?: WpAbout[];
  };
}

export const getAllAboutQuery = graphql`
  query {
    allWpAbout {
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
        about {
          sectionType
          resumeLink {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const getAllAbout = (): About[] => {
  const data = useStaticQuery<AllWpAbout>(getAllAboutQuery);

  if (!data?.allWpAbout?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpAbout.nodes.map((about: WpAbout) => {
    return {
      title: about.title,
      description: about.content,
      img: about.featuredImage
        ? (getImage(about.featuredImage.node?.localFile?.childImageSharp) as IGatsbyImageData)
        : null,
      sectionType: about.about.sectionType,
      resumeLink: about.about.resumeLink?.mediaItemUrl || null,
    };
  });
};

export const getDataForAboutPage = (): About[] => {
  return getAllAbout().filter((about) => about.sectionType !== AboutSectionTypes.HOME_SUMMARY);
};

export const getDataForHomePageAboutSummary = (): About | null => {
  const about = getAllAbout().find((about) => about.sectionType === AboutSectionTypes.HOME_SUMMARY);
  return about || null;
};
