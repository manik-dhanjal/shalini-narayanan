import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  author?: string;
  keywords?: string[];
  image?: string;
  children?: React.ReactNode;
};

// Renders head tags; use it from a page's `Head` export (Gatsby Head API)
const SEO: React.FC<SEOProps> = (props) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          url
          keywords
          image
        }
      }
    }
  `);

  const { title, description, url, author, keywords = [], image } = site.siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = `${url}${props.pathname || ''}`;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, ...(props.keywords || [])].join(',');

  return (
    <>
      <html lang="en" />
      <title>{siteTitle}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={siteDescription} />
      <meta name="image" content={siteImage} />
      <meta name="keywords" content={siteKeywords} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="profile" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteAuthor} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      {props.children}
    </>
  );
};

export { SEO };
