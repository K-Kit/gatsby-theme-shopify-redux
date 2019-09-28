import ProductPage from './ProductPage';
import {graphql} from "gatsby";

export default ProductPage;

export const query = graphql`
    fragment productFragment on ShopifyProduct {
        id
        title
        handle
        productType
        descriptionHtml
        description
        compareAtPrice
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
                    fluid(fit: CONTAIN) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }

    query ProductPageQuery($handle: String!, $limit: Int!) {
        shopifyProduct(handle: { eq: $handle }) {
            ...productFragment
        }
        allShopifyProduct(
            limit: $limit
            sort: { fields: [createdAt], order: DESC }
            filter: {
                availableForSale: { eq: true }
                variants: { elemMatch: { availableForSale: { eq: true } } }
            }
        ) {
            edges {
                node {
                    ...productFragment
                }
            }
        }
    }
`