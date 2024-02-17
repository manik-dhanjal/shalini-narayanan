import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Shalini Narayanan`,
    siteUrl: `https://shalininarayanan.in`,
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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
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
  ],
};

export default config;
