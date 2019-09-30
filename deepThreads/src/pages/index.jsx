import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-shopify-redux/src/components/Layout";
import {ProductGrid} from "gatsby-theme-shopify-redux/src/components/ProductGrid";
// eslint-disable-next-line no-unused-vars
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Index = ({data, ...props}) => {
    // eslint-disable-next-line no-unused-vars
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout {...props}>

      <Helmet title={config.siteTitle} />
      <SEO />
      <ProductGrid products={data.allShopifyProduct.nodes} />

    </Layout>
  );
}
export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
fragment productFragmentSmall on ShopifyProduct {
  id
  title
  handle
  productType
  descriptionHtml
  description
  shopifyId
  options {
      id
      name
      values
  }
  variants {
      id
      title
      price
      availableForSale
      shopifyId
      compareAtPrice
      selectedOptions {
          name
          value
      }
  }
  images {
      originalSrc
      id
      localFile {
          childImageSharp {
              fluid(fit: CONTAIN, maxWidth: 220) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
  }
}
  query IndexQuery {
    allShopifyProduct(
      limit: 15,
      sort: { fields: [createdAt], order: DESC },skip:1,
      filter: {
        availableForSale: { eq: true }
        variants: { elemMatch: { availableForSale: { eq: true } } }
      }
    ) {
        nodes {
          ...productFragmentSmall}
      
    }
  
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
