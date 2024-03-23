import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { CreativeWritingProps } from '../components/pages/creative-writing-page/creative-writing.interface';
import { WpCategory } from './categories.wp-queries';

export interface WpCreativeWriting {
  title: string;
  content: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: ImageDataLike;
      };
    };
  };
  creativeWriting: {
    isDownloadable: boolean;
    link?: string;
    downloadableFile?: {
      mediaItemUrl: string;
    };
  };
  categories: {
    nodes: WpCategory[];
  };
}

export interface AllWpCreativeWriting {
  allWpCreativeWriting?: {
    nodes?: WpCreativeWriting[];
  };
}

export const getAllCreativeWritingQuery = graphql`
  query {
    allWpCreativeWriting {
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
        creativeWriting {
          link
          isDownloadable
          downloadableFile {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`;

export const getAllCreativeWriting = (): CreativeWritingProps[] => {
  const data = useStaticQuery<AllWpCreativeWriting>(getAllCreativeWritingQuery);

  if (!data?.allWpCreativeWriting?.nodes) return [];
  // update img and desc and made them required in wordpress
  return data.allWpCreativeWriting.nodes.map((creativeWriting: WpCreativeWriting) => {
    let link;
    if (creativeWriting.creativeWriting.isDownloadable) {
      link = creativeWriting.creativeWriting.downloadableFile?.mediaItemUrl;
    } else {
      link = creativeWriting.creativeWriting.link;
    }
    return {
      title: creativeWriting.title,
      description: creativeWriting.content,
      img: creativeWriting.featuredImage
        ? (getImage(
            creativeWriting.featuredImage.node?.localFile?.childImageSharp
          ) as IGatsbyImageData)
        : null,
      isDownloable: !!creativeWriting.creativeWriting.isDownloadable,
      link: link as string,
      categories:
        creativeWriting.categories?.nodes?.map((category) => ({
          id: category.id,
          name: category.name,
        })) || [],
    };
  });
};
