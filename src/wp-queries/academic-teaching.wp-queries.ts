import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { AcademicTeaching } from '../components/pages/academic-teaching-page/academic-teaching.interface';

export interface WpAcademicTeaching {
  title: string;
  content: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
}

export interface AllWpAcademicTeaching {
  allWpAcademicTeaching?: {
    nodes?: WpAcademicTeaching[];
  };
}

export const getAllAcademicTeachingQuery = graphql`
  query {
    allWpAcademicTeaching {
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
      }
    }
  }
`;

export const getAllAcademicTeaching = (): AcademicTeaching[] => {
  const data = useStaticQuery<AllWpAcademicTeaching>(getAllAcademicTeachingQuery);

  if (!data?.allWpAcademicTeaching?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpAcademicTeaching.nodes.map((academicTeaching: WpAcademicTeaching) => {
    return {
      title: academicTeaching.title,
      description: academicTeaching.content,
      img: academicTeaching.featuredImage
        ? (getImage(
            academicTeaching.featuredImage.node.localFile.childImageSharp
          ) as IGatsbyImageData)
        : null,
    };
  });
};
