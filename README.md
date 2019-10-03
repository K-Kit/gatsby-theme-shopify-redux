# Gatsby Theme Shopify Redux (wip)

### This project is currently in alpha
things may change, many features unimplemented however basic cart functionality and page gen is up and running.
 

probably a lot of optimizing to do in package.json (esp peer deps)

##### More docs coming soon...

## Why this theme
- simple & predictable state management with redux
- automated product pages
- easy collection page creation with simple yml config
- optional support for product reviews & maybe discourse (wip)
- & more!

ideas:
- sales yml
- promotions
- mailchimp
- google adword sheet export


## Quick Start

requires env variables

`SHOP_NAME=name`

`SHOPIFY_ACCESS_TOKEN=token`

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-shopify-redux and it's dependencies
yarn add gatsby react react-dom gatsby-theme-shopify-redux
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-shopify-redux",
      options: {},
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```