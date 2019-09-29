/** @jsx jsx */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
//import { Test } from './ProductPage.styles';
import Img from 'gatsby-image'
import {Styled,Container, jsx } from "theme-ui";

import ReactHtmlParser from 'react-html-parser'
import {Box, Button, Flex,} from 'rebass'
import {Tiles} from '@rebass/layout'
import {VariantSelect} from "../../components/VariantSelect";
import * as actions from '../../redux/actions'
// import {} from 'react-redux'
// todo set image effecg
const ProductPage = ({data, ...props}) => {
    const product = data.shopifyProduct
    const html = ReactHtmlParser(product.descriptionHtml)
    console.log(props)
    // maybe move this part to redux but not sure what advantage there would be.
    let defaultOptionValues = {}
    product.options.map(selector => {
        defaultOptionValues[selector.name] = selector.values[0]
    })
    const [optionSelectState, setOptionSelectState] = useState({
        selectedOptions: { ...defaultOptionValues },
        selectedVariantQuantity: 1,
        selectedVariant: product.variants[0],
    })

    const handleOptionChange = event => {
        const target = event.target
        let selectedOptions = optionSelectState.selectedOptions
        selectedOptions[target.name] = target.value

        // refactor for async change saga
        // nested reducer interface->product->variantselect,images,etc
        const selectedVariant = props.client.product.helpers.variantForOptions(
            product,
            selectedOptions
        )
        setOptionSelectState({
            ...state,
            selectedVariant: selectedVariant,
        })
    }
  let variantSelectors = product.options.map(option => {
    return (
        <Box >
          {/*<label htmlFor={option.name}>{option.name}</label>*/}
          <VariantSelect
              handleChange={handleOptionChange}
              key={option.id.toString()}
              option={option}
              id={option.id.toString()}
          />
        </Box>
    )
  })
  return (
  <Layout>
    <Box mx={'auto'} >
      <Tiles columns={[1,1,2]}>
        <Box>
          <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
        </Box>
        <Box  >
          <Box sx={{"img": {width: '100%'}}} >
            

        <Styled.h1 >{product.title}</Styled.h1>
            <div
                sx={{
                  variant: 'styles',
                }}>
              <Styled.root>{html}</Styled.root>
            </div>
          </Box>

        </Box>
      </Tiles>
      <Flex justifyContent={'flex-end'}>
        <Tiles columns={[1]} sx={{width: ['100%', 'auto'], maxWidth: '600', }}>
          {variantSelectors}
          <Button variant={'primary'}> Add to Cart </Button>
        </Tiles>
      </Flex>

    </Box>
  </Layout>
)};
 
ProductPage.propTypes = {
  // bla: PropTypes.string,
};

ProductPage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // current variant, featured image, et
    client: state.shop.client

});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
    setCurrentProduct: (product) => dispatch(actions.setCurrentProduct(product)),
    toggleImageBrowser: () => dispatch(actions.toggleImageBrowser()),
    addVariantToCart: ({variantId, quantity}) => dispatch(actions.addVariantToCart({variantId, quantity})),
    setFeaturedImage: (img) => dispatch(actions.setFeaturedImage(img))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);

 
