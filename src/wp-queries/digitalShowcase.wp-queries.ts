import { graphql, useStaticQuery } from 'gatsby';
import { Card, CardType } from '../components/shared/card-slider/card-slider.interface';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';

export interface DigitalShowcaseRaw {
  title: string;
  excerpt: string;
  digitalShowcases: {
    linkOfMedia: string;
    chardType: CardType;
  };
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
}

export interface AllDigitalShowcasesRaw {
  allWpDigitalShowcase?: {
    nodes?: DigitalShowcaseRaw[];
  };
}

export const getAllDigitalShowcasesQuery = graphql`
  query {
    allWpDigitalShowcase {
      nodes {
        title
        excerpt
        digitalShowcases {
          linkOfMedia
          chardType
        }
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
      }
    }
  }
`;

export const getAllDigitalShowcases = (): Card[] => {
  const data = useStaticQuery<AllDigitalShowcasesRaw>(getAllDigitalShowcasesQuery);

  if (!data?.allWpDigitalShowcase?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data?.allWpDigitalShowcase?.nodes.map((digitalShowcase: DigitalShowcaseRaw) => {
    return {
      title: digitalShowcase.title,
      desc: digitalShowcase.excerpt,
      img: getImage(
        digitalShowcase.featuredImage.node.localFile.childImageSharp
      ) as IGatsbyImageData,
      link: digitalShowcase.digitalShowcases.linkOfMedia,
      type: digitalShowcase.digitalShowcases.chardType,
    };
  });
};
