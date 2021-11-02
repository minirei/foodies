module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Foodies CNFT",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Foodies CNFT`,
        short_name: `Foodies`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/foodie-about.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-sharp",
  ],
}
