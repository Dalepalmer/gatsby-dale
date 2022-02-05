module.exports = {
    siteMetadata: {
        siteUrl: `https://dalepalmer.dev`,
    },
    plugins: [
        {
        resolve: `@react95/gatsby-theme`,
        options: {
            // basePath defaults to `/`
            basePath: `/site`,
        }
        }
    ]
}