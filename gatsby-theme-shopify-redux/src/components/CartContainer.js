/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Card, Link} from 'rebass'
import {Text, Box, Heading} from 'rebass'
import Img from 'gatsby-image'
import {navigate} from 'gatsby'
import {CompareAtPrice} from './CompareAtPrice'
import {useSelector} from "react-redux";
import Cart from "./Cart/Cart";
import {SideBar} from "./SideBar";


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
    return (

        <SideBar pos={'right'} isOpen={isOpen}>
             <Cart open={isOpen}  />
        </SideBar>
    )
}
