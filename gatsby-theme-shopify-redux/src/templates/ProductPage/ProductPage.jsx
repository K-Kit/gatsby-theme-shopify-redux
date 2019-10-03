/** @jsx jsx */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
import Img from 'gatsby-image'
import {Styled,Container, jsx } from "theme-ui";

import ReactHtmlParser from 'react-html-parser'
import {Box, Button, Flex,} from 'rebass'
import {Tiles} from '@rebass/layout'
import {VariantSelect} from "../../components/VariantSelect";
import * as actions from '../../store/actions'
// import {set} from '../../redux/actions'

import {
    StyledImage,
    change,
    ProductImageLink,
    ZoomHelper,
    ProductImagesDesktop,
    ProductImagesMobile
} from './ProductPage.styles'


const ProductPage = ({data, ...props}) => {
    console.log(props)
    const product = data.shopifyProduct
    const html = ReactHtmlParser(product.descriptionHtml)
    const isBrowser = typeof window !== 'undefined'

    // maybe move this part to redux but not sure what advantage there would be.
    let defaultOptionValues = {}
    product.options.map(selector => {
        defaultOptionValues[selector.name] = selector.values[0]
    })
    const [optionSelectState, setOptionSelectState] = useState({
        selectedOptions: { ...defaultOptionValues },
        quantity: 1,
    })

    useEffect(() => {
        // todo (maybe) cleanup func to reduce store size and delete selected products & stuff
        if (isBrowser && props.currentProduct !== product){
            props.setCurrentProduct(product)
            props.setSelectedVariant({
                product: product,
                options: defaultOptionValues,
            })
        }
    },[props.currentProduct])
    // todo refactor and move this logic to redux
    const handleOptionChange = event => {
        const target = event.target
        const selectedOptions = {...optionSelectState.selectedOptions, [target.name]: target.value}
        //  dispatch variant change
        props.setSelectedVariant({
            product: product,
            options: selectedOptions
        })
        setOptionSelectState({
            ...optionSelectState,
            selectedOptions
        })
    }

  let variantSelectors = product.options.map((option, i) => {
    return (
        <Box key={i} >
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
  <Layout {...props}>
    <Box mx={'auto'} >
      <Tiles columns={[1,1,2]}>
        <Box>
            {props.isDesktopViewport ?
                <ProductImagesDesktop images={product.images} imageFeatured={props.featuredImage}
                                      imageOnClick={props.setFeaturedImage}/>
                :
                <ProductImagesMobile images={product.images} imageFeatured={props.featuredImage}
                                     imageOnClick={props.setFeaturedImage}/>
            }
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
          <Button variant={'primary'} onClick={() => props.addVariantToCart({
              variantId: props.selectedVariant.shopifyId, quantity: optionSelectState.quantity
          })}> Add to Cart </Button>
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
    currentProduct: state.productPage.currentProduct,
    featuredImage: state.productPage.featuredImage,
    isDesktopViewport: state.productPage.isDesktop,
    selectedVariant: state.productPage.selectedVariant,

});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),

    toggleImageBrowser: () => dispatch(actions.toggleImageBrowser()),
    addVariantToCart: ({variantId, quantity}) => dispatch(actions.addToCartSaga({variantId, quantity})),
    setFeaturedImage: (img) => dispatch(actions.setFeatured(img)),
    setSelectedVariant: ({product, options}) => dispatch(actions.setSelectedVariantSaga({product, options})),
    setCurrentProduct: (product) => dispatch(actions.setProduct(product)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);

 
