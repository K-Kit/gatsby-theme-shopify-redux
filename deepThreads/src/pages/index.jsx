import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-shopify-redux/src/components/Layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {ProductGrid} from "gatsby-theme-shopify-redux/src/components/ProductGrid";

const Index = ({data, ...props}) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
      <Layout>

          <Helmet title={config.siteTitle} />
          <SEO />
        <ProductGrid products={data.allShopifyProduct.nodes} />

      </Layout>
  );
}
export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allShopifyProduct(
      limit: 20
      sort: { fields: [createdAt], order: DESC },skip:1,
      filter: {
        availableForSale: { eq: true }
        variants: { elemMatch: { availableForSale: { eq: true } } }
      }
    ) {
        nodes {
          ...productFragment
        }
      
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
