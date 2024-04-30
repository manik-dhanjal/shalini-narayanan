import type { GatsbyConfig } from 'gatsby';
const siteTitle = 'Dr. Shalini Narayanan';
const siteDescription =
  'Media Expert with 3 decadesexperience: Ex-Indian Information Service, Prof., Researcher';
const siteAuthor = '@shanar68';
const siteUrl = 'https://shalininarayanan.in';
const siteImage = `http://cms.shalininarayanan.in/wp-content/uploads/2024/04/shalinis-about-page-img1.png`;
const siteKeywords = [
  'Shalini Narayanan',
  'Dr. Shalini Narayanan',
  'Media Academic',
  'Author',
  'Itti Si Kahani',
  'The Whatsapp India Story',
  'Training Services',
  'Academic Services',
  'Creative Writing',
  'Sunetra Sen Narayan',
  'Shalini',
  'Dr. Shalini',
  'Shalini Naryanan',
  'Dr. Narayanan',
  'Narayanan',
  'looking for myself',
  'pennsylvania state university',
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
    siteUrl: siteUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
            },
          },
          'gatsby-remark-responsive-iframe', //Optional: Must be loaded after gatsby-remark-embed-video
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/small-logo.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        mode: 'async',
        web: [
          {
            name: `lora`,
            file: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap`,
          },
          {
            name: 'lato',
            file: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
          },
          {
            name: 'hind',
            file: 'https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-6B1QLX0VR7', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: 'http://cms.shalininarayanan.in/graphql',
        // Specify the URL of the WordPress source
        baseUrl: `cms.shalininarayanan.in`,
        //TODO: change protocol to HTTPS
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        useACF: true,
        // Specify which URL structures to fetch
        includedRoutes: ['**/posts', '**/tags', '**/categories'],
      },
    },
  ],
};

export default config;
