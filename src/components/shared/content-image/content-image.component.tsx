import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ContentImageProps } from './content-image.interface';

const CONTENT_IMAGES_PATH = '/images/content/';

interface ContentImagesQuery {
  allFile: {
    nodes: {
      relativePath: string;
      childImageSharp: { gatsbyImageData: IGatsbyImageData } | null;
    }[];
  };
}

// renders a content image as a lazy-loaded GatsbyImage with a blurred placeholder
const ContentImage: React.FC<ContentImageProps> = ({ src, alt, className }) => {
  const { allFile } = useStaticQuery<ContentImagesQuery>(graphql`
    query ContentImages {
      allFile(filter: { sourceInstanceName: { eq: "contentImages" } }) {
        nodes {
          relativePath
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
  `);
  const relativePath = src.startsWith(CONTENT_IMAGES_PATH)
    ? src.slice(CONTENT_IMAGES_PATH.length)
    : null;
  const image = allFile.nodes.find((node) => node.relativePath === relativePath)?.childImageSharp
    ?.gatsbyImageData;

  // fall back to a plain image for anything sharp did not process
  if (!image) return <img src={src} alt={alt} className={className} loading="lazy" />;
  return <GatsbyImage image={image} alt={alt} className={className} />;
};
export default ContentImage;
