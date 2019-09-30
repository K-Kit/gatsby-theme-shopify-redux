
# Gatsby Theme Shopify Redux (wip)

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
