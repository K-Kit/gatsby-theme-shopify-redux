Gatsby Theme Shopify Redux (wip)
Why this theme
simple & predictable state management with redux
automated product pages
easy collection page creation with simple yml config
optional support for product reviews & maybe discourse (wip)
& more!
ideas:

sales yml
promotions
mailchimp
The smallest possible Gatsby theme
Quick Start
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-minimal and it's dependencies
yarn add gatsby react react-dom gatsby-theme-minimal
Then add the theme to your gatsby-config.js. We'll use the long form here for education purposes.

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-minimal",
      options: {},
    },
  ],
}
That's it, you can now run your gatsby site using

yarn gatsby develop
Note that this site doesn't do anything, so you're see a missing resources error. Create a simple page in src/pages/index.js to see a page on the root url.

import React from "react"

export default () => <div>My Site!</div>
Doing more with themes
You can use this as a place to start when developing themes. I generally suggest using yarn workspaces like the gatsby-theme-examples repo does, but using yarn link or npm link is a viable alternative if you're not familiar with workspaces.
