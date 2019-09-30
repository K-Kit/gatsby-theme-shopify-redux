/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Card, Link} from 'rebass'
import {Text, Box, Heading} from 'rebass'
import Img from 'gatsby-image'
import {navigate} from 'gatsby'
import {CompareAtPrice} from './CompareAtPrice'
import {useSelector} from "react-redux";
import Cart from "./Cart/Cart";


const sideStyles = {
    right: {
        top: 0, right: 0
    },
    left: {
        top: 0, left: 0
    },
}

export const Sidebar = ({pos='right', children, ...props}) => {
    const isOpen = useSelector(state => state.ui.cartStatus)
    return (
        <div sx={{
            ...sideStyles[pos],
            position: 'fixed',
            height: '100vh',
            transform: isOpen ? 'translateX(0%)':'translateX(100%)',
            bg: 'lightgrey',
            px: 4,
            transition: `transform 0.8s`,

        }} >
            <Box sx={{width: ['88vw', 320]}}  >
             <Cart  />
                {children}
            </Box>
        </div>
    )
}
