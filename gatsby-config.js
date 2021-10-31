module.exports = {
  siteMetadata: {
    title: `Ksss Blog`,
    titleTemplate: `Ksss Blog - `,
    description: `My Blog`,
    author: `@do1con <kss7547@gmail.com>`,
    siteUrl: `https://do1con.github.io`,
    image: `/static/favicon.png`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 1200,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ksss Blog`,
        short_name: `Ksss Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#48bb78`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
