import { graphql, useStaticQuery } from 'gatsby';
import { Card, CardType } from '../components/shared/card-slider/card-slider.interface';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';

export interface WpMediaSpotlight {
  title: string;
  content: string;
  mediaSpotlight: {
    link: string;
  };
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
}

export interface AllWpMediaSpotlight {
  allWpMediaSpotlight?: {
    nodes?: WpMediaSpotlight[];
  };
}

export const getAllMediaSpotlightQuery = graphql`
  query {
    allWpMediaSpotlight {
      nodes {
        content
        title
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
        mediaSpotlight {
          link
        }
      }
    }
  }
`;

export const getAllMediaSpotlight = (): Card[] => {
  const data = useStaticQuery<AllWpMediaSpotlight>(getAllMediaSpotlightQuery);

  if (!data?.allWpMediaSpotlight?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data?.allWpMediaSpotlight?.nodes.map((mediaSpotlight: WpMediaSpotlight) => {
    return {
      title: mediaSpotlight.title,
      desc: mediaSpotlight.content,
      img: getImage(
        mediaSpotlight.featuredImage.node.localFile.childImageSharp
      ) as IGatsbyImageData,
      link: mediaSpotlight.mediaSpotlight.link,
      type: CardType.OTHER,
    };
  });
};
