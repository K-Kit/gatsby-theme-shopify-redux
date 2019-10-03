/** @jsx jsx */
import { keyframes } from '@emotion/core'
import {jsx, Styled} from 'theme-ui'
import Img from 'gatsby-image'
import React from 'react'
import {Flex, Box} from "rebass";
import {Input} from "@rebass/forms";
import {MdClose} from 'react-icons/md'

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
  <Flex justifyContent={'space-evenly'} alignItems={'center'}>
    <Box width={'auto'}>
      <img sx={{
        width: 36,
      }} src={props.item.variant.image.src} />
    </Box>
    <Box width={'auto'}>
      <Styled.p>{props.item.title}</Styled.p>
      <Styled.p>{props.item.variant.title}, ${props.item.variant.price}</Styled.p>
    </Box>
    <Box width={'auto'}>
      <Input sx={{
        p: 1,
        m: 1,
        width: 40,
      }}
             onChange={e => props.updateQuantity(e.target.value)}
             value={props.item.quantity}
      type={'number'}
             // value={it}
      />
    </Box>
    <Box width={'auto'}>
        <MdClose onClick={props.handleRemove} />
    </Box>
  </Flex>
</li>

// probably refactor to table later
export const CartList = ({
                    items,
                    handleRemove,
                    updateQuantity,
                    setCartLoading,
                    isCartLoading,
                  }) => (
    <div sx={{mt: 6, width: ['100%'], minWidth: 280}}>
      <Headers>
        <Box width={1/4}>Product</Box>
        <Box width={1/2}></Box>
        <Box  sx={{'div': {display: 'inline'}, ml: 'auto'}}>
            <Box sx={{mr: [1,2]}} >Qty.</Box>
            <Box>Remove</Box>
        </Box>
      </Headers>
      <CartListRoot>
        {items.map(item => {

            console.log('cart item', item)
            return(
            <CartListItem
                key={item.id}
                item={item}
                handleRemove={handleRemove(item.id)}
                updateQuantity={updateQuantity(item.id)}
                // setCartLoading={setCartLoading}
                // isCartLoading={isCartLoading}
            />
        )}
        )}
      </CartListRoot>
    </div>
)
