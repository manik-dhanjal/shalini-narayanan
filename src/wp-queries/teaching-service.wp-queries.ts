import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { TrainingService } from '../components/pages/training-service-page/training-service.interface';

export interface WpTrainingService {
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

export interface AllWpTrainingService {
  allWpTrainingService?: {
    nodes?: WpTrainingService[];
  };
}

export const getAllTrainingServicesQuery = graphql`
  query {
    allWpTrainingService {
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

export const getAllTrainingServices = (): TrainingService[] => {
  const data = useStaticQuery<AllWpTrainingService>(getAllTrainingServicesQuery);

  if (!data?.allWpTrainingService?.nodes) return [];

  // update img and desc and made them required in wordpress
  return data.allWpTrainingService.nodes.map((trainingService: WpTrainingService) => {
    return {
      title: trainingService.title,
      description: trainingService.content,
      img: trainingService.featuredImage
        ? (getImage(
            trainingService.featuredImage.node.localFile.childImageSharp
          ) as IGatsbyImageData)
        : null,
    };
  });
};
