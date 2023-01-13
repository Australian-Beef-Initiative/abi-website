import type { GatsbyConfig } from "gatsby";

require('dotenv').config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Australian Beef Initiative`,
    siteUrl: `https://www.australianbeefinitiative.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/abi-website",
  plugins: [`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-source-google-spreadsheets',
    options: {
      spreadsheetId: process.env.SPREADSHEET_ID,
      spreadsheetName: 'gatsby',
      filterNode: () => true,
      mapNode: (node: any) => node,
      apiKey: process.env.API_KEY,
    }
  },
]
};

export default config;
