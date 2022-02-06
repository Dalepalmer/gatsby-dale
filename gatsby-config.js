module.exports = {
    pathPrefix: "/gatsby-dale",
    siteMetadata: {
        siteUrl: `https://dalepalmer.dev`,
        icon: './src/images/favicon.ico'
    },
    plugins: [
        {
        resolve: `@react95/gatsby-theme`,
        options: {
            // basePath defaults to `/`
            basePath: `/site`,
        }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
              output: `/my-cool-sitemap.xml`,
            },
          },
    ]
}