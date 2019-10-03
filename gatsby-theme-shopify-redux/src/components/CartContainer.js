/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Card, Link} from 'rebass'
import {Text, Box, Heading} from 'rebass'
import Img from 'gatsby-image'
import {navigate} from 'gatsby'
import {CompareAtPrice} from './CompareAtPrice'
import {useDispatch, useSelector} from "react-redux";
import Cart from "./Cart/Cart";
import {SideBar} from "./SideBar";
import {removeLineItemSaga, updateLineItemSaga} from "../redux/actions";


const sideStyles = {
    right: {
        top: 0, right: 0
    },
    left: {
        top: 0, left: 0
    },
}

export const CartContainer = ({pos='right', children, ...props}) => {
    const isOpen = useSelector(state => state.cart.isOpen)
    const checkoutUrl = useSelector(state => state.shopify.checkout.webUrl)
    const dispatch = useDispatch()
    const removeLineItem = (lineItemID) => () =>  dispatch(removeLineItemSaga(lineItemID))
    const updateLineItem = (lineItemID) => (quantity) => dispatch(updateLineItemSaga({lineItemID, quantity}))
    return (

        <SideBar pos={'right'} isOpen={isOpen} >
             <Cart open={isOpen} checkoutUrl={checkoutUrl} removeLineItem={removeLineItem} updateLineItem={updateLineItem}  />
        </SideBar>
    )
}
