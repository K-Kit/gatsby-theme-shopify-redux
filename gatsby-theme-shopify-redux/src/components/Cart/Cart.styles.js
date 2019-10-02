/** @jsx jsx */
import { keyframes } from '@emotion/core'
import {jsx, Styled} from 'theme-ui'
import Img from 'gatsby-image'
import React from 'react'
import {Flex, Box} from "rebass";
import {Input} from "@rebass/forms";

export const CartListRoot = props => <ul {...props} sx={{
  listStyle: 'none',
  m: 0,
  p: 0,
}} />

export const Headers = (props) => <div {...props} sx={{
    borderBottom: '1px solid light',
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    color: 'light',
    flexBasis: 60,
    flexGrow: 0,
    fontSize: 1,
    paddingBottom: 1,
    textAlign: 'center',
}}} />

export const CartListItem = (props) => <li {...props} sx={{

}}>
  <Flex justifyContent={'space-between'} alignItems={'center'}>
    <Box w={1/4}>
      <img sx={{
        width: 36,
      }} src={props.item.variant.image.src} />
    </Box>
    <Box w={1/4}>
      <Styled.p>{props.item.title}</Styled.p>
      <Styled.p>{props.item.variant.title}, ${props.item.variant.price}</Styled.p>
    </Box>
    <Box w={1/4}>
      <Input sx={{
        p: 1,
        m: 1,
        width: 80,
        // height: 48
      }}
      type={'number'}
      />
    </Box>
    <Box w={1/4}>
        X
    </Box>
  </Flex>
</li>

export const CartList = ({
                    items,
                    handleRemove,
                    updateQuantity,
                    setCartLoading,
                    isCartLoading,
                  }) => (
    <div sx={{mt: 6, width: ['100%'], minWidth: 280}}>
      <Headers>
        <Box w={1/4}>Product</Box>
        <Box w={1/4}></Box>
        <Box w={1/4}>Qty.</Box>
        <Box w={1/4}>Remove</Box>
      </Headers>
      <CartListRoot>
        {items.map(item => (
            <CartListItem
                key={item.id}
                item={item}
                // handleRemove={handleRemove(item.id)}
                // updateQuantity={updateQuantity(item.id)}
                // setCartLoading={setCartLoading}
                // isCartLoading={isCartLoading}
            />
        ))}
      </CartListRoot>
    </div>
)
