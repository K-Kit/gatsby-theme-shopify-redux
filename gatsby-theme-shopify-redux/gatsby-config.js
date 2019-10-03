require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })


module.exports = ({ contentPath = 'shopifyCustomization', basePath = '/' }) => ({
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: contentPath
            }
        },
        'gatsby-plugin-root-import',
        {
            resolve: 'gatsby-transformer-yaml',
            options: {
                typeName: 'ShopifyThemeCollectionGroup'
            }
        },
        'gatsby-plugin-theme-ui',
        'gatsby-theme-style-guide',
        
        'gatsby-plugin-react-helmet',
        
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/data`,
              name: 'data',
            },
        },
        {
            resolve: `gatsby-source-shopify`,
            options: {
              // The domain name of your Shopify shop. This is required.
              // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
              // 'gatsby-source-shopify-test-shop.myshopify.com'.
              shopName: process.env.SHOP_NAME,
      
              // An API access token to your Shopify shop. This is required.
              // You can generate an access token in the "Manage private apps" section
              // of your shop's Apps settings. In the Storefront API section, be sure
              // to select "Allow this app to access your storefront data using the
              // Storefront API".
              // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
              accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      
              // Set verbose to true to display a verbose output on `npm run develop`
              // or `npm run build`. This prints which nodes are being fetched and how
              // much time was required to fetch and process the data.
              paginationSize: 100,
              // Defaults to true.
              verbose: true,
            //   includeCollections: ["shop"],
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
            useMozJpeg: true,
            stripMetadata: true,
            maxWidth: 400,
            },
        },
        'gatsby-transformer-sharp',
        

    ]
})
