/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import config from "deepThreads/data/SiteConfig";
import SEO from "deepThreads/src/components/SEO/SEO";
import {ProductGrid} from "../components/ProductGrid";
import {graphql} from "gatsby";

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
    query CatalogueQuery {
        allShopifyProduct(
            limit: 15,
            sort: { fields: [updatedAt], order: DESC },skip:1,
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
