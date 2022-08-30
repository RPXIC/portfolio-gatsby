require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    siteUrl: 'https://www.rpxic.com',
    title: 'Ruben Ponce',
    titleTemplate: '%s · Portfolio',
    description: 'RPXIC Portfolio',
    image: '/images/avatar.jpg'
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.API_KEY
      }
    },
    'gatsby-plugin-dts-css-modules',
    'gatsby-plugin-image',
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: process.env.TRACKING_ID,
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}
