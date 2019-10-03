const fs = require("fs")
// const _ = require('lodash')
const productTemplate = require.resolve('./src/templates/ProductPage/index.js');
const collectionTemplate = require.resolve('./src/templates/ShopifyThemeCollection.js')

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};


exports.sourceNodes = ({ actions,createNodeId }) => {
  actions.createTypes(`
    type ShopifyThemeCollectionGroup implements Node @dontInfer {
      id: ID!
      name: String!
      label: String
      items: [ShopifyThemeCollection!]!
      url: String
      slug: String
    }
    type ShopifyThemeCollection implements Node @dontInfer {
      name: String!
      label: String
      tags: [String!]!
      productTypes: [String]
    }
  `);
};



exports.createPages = ({ actions, graphql }, options) => {
  const basePath = options.basePath || '/';
  const productPath = options.productPath || '/products/';
  const collectionsPath = options.productPath || '/collections/';

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
  };
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/catalogue.js')
  });



  const { createPage } = actions

  return graphql(`
  {
    allShopifyProduct(sort: {fields: [updatedAt], order: DESC}, skip: 1, limit: 15) {
      edges {
        node {
          handle
        }
      }
    }
    allShopifyThemeCollectionGroup {
      nodes {
        id
        name
        label
        items {
          tags
          name
          label
        }
      }
    }
  }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: slugify(productPath + node.handle),
        component: productTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
          limit: 4
        },
      })
    })
    result.data.allShopifyThemeCollectionGroup.nodes.forEach((node) => {
      node.items.map(collection => {
        createPage({
          path: slugify(collectionsPath + collection.name),
          component: collectionTemplate,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            tags: collection.tags,
          },
        })
      })
    })
  })
}
