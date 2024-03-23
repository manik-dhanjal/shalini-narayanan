import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { AcademicPaper } from '../components/pages/academic-teaching-page/academic-teaching.interface';

export interface WpAcademicPapers {
  title: string;
  content: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
  academicPapers: {
    isDownloable: boolean;
    link?: {
      url: string;
    };
    academicPaperPdf?: {
      mediaItemUrl: string;
    };
  };
}

export interface AllWpAcademicPapers {
  allWpAcademicPaper?: {
    nodes?: WpAcademicPapers[];
  };
}

export const getAllAcademicPapersQuery = graphql`
  query {
    allWpAcademicPaper {
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
        academicPapers {
          isDownloable
          academicPaperPdf {
            mediaItemUrl
          }
          link {
            url
          }
        }
      }
    }
  }
`;

export const getAllAcademicPapers = (): AcademicPaper[] => {
  const data = useStaticQuery<AllWpAcademicPapers>(getAllAcademicPapersQuery);

  if (!data?.allWpAcademicPaper?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpAcademicPaper.nodes.map((academicPaper: WpAcademicPapers) => {
    let link;
    console.log(academicPaper);
    if (academicPaper.academicPapers.isDownloable) {
      link = academicPaper.academicPapers.academicPaperPdf?.mediaItemUrl;
    } else {
      link = academicPaper.academicPapers.link?.url;
    }
    return {
      title: academicPaper.title,
      description: academicPaper.content,
      img: academicPaper.featuredImage
        ? (getImage(
            academicPaper.featuredImage.node?.localFile?.childImageSharp
          ) as IGatsbyImageData)
        : null,
      isDownloable: academicPaper.academicPapers.isDownloable,
      link: link as string,
    };
  });
};
