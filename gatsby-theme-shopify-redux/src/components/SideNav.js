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

export const SideNav = ({pos='left', children, ...props}) => {
    const isOpen = useSelector(state => state.ui.cartStatus)
    return (
        <SideBar pos={'left'}>
                {children}
        </SideBar>
    )
}
