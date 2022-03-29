module.exports = {
  siteMetadata: {
    title: `Tabletop Tools`,
    description: `Tools for Pathfinder 1e tabletop gaming; character builder, spells, feats, skills and more.`,
    author: `@jacobbroadaway`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2f2519`,
        theme_color: `#2f2519`,
        display: `minimal-ui`,
        icon: `src/images/logo-tabletop-tools.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `material icons`,
    //        // `source sans pro\:300,400,400i,700`
    //     ],
    //     display: 'swap'
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
