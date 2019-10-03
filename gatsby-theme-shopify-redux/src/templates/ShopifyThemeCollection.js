/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
// plugin that creates slider
// reactstrap components
import {graphql} from 'gatsby'
import Layout from "../components/Layout";
import {ProductGrid} from "../components/ProductGrid";
// core components

function ShopifyThemeCollectionPage({ data }) {
    return (
        <Layout>
            <ProductGrid products={data.allShopifyProduct.nodes} />
        </Layout>
    )
}

export default ShopifyThemeCollectionPage
// todo add product tpye support
export const pageQuery = graphql`
    query CustomCollectionPageQuery($tags: [String!]!) {
        allShopifyProduct(filter: { tags: { in: $tags } }) {
            nodes {
                ...productFragment
            }
        }
    }
`
