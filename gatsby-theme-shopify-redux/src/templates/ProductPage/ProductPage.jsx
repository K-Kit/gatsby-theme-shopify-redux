import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {graphql} from 'gatsby'
//import { Test } from './ProductPage.styles';

const ProductPage = ({data, ...props}) => (
  <div>
    Test content
  </div>
);

ProductPage.propTypes = {
  // bla: PropTypes.string,
};

ProductPage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);


export const ProductPageQuery = graphql`
fragment productFragment on ShopifyProduct {
  id
  title
  handle
  createdAt
  tags
  images {
    id
    originalSrc
    localFile {
      childImageSharp {
        fluid(fit: CONTAIN, maxWidth:300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  variants {
    price
    shopifyId
    compareAtPrice
  }
}

  query ProductPageQuery($handle: String!, $limit: Int!) {
    shopifyProduct(handle: { eq: $handle }) {
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
            fluid(fit: CONTAIN) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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