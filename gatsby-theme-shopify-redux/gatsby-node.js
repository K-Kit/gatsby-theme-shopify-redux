const fs = require("fs")
// const _ = require('lodash')
const productTemplate = require.resolve('./src/templates/ProductPage/index.js');


exports.createPages = ({ actions, graphql }, options) => {
  // const basepath = options.basePath || '';

  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    return `${slug}`.replace(/\/\/+/g, "/")
  }

  const { createPage } = actions

  return graphql(`
  {
    allShopifyProduct(sort: {fields: updatedAt, order: DESC}, limit: 10) {
      edges {
        node {
          handle
        }
      }
    }
  }
  
     
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: `/product/${node.handle}/`,
        component: productTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
          limit: 4
        },
      })
    })
    
    
    
  })
}


// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data"
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}