/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Card, Link} from 'rebass'
import {Text, Box, Heading} from 'rebass'
import Img from 'gatsby-image'
import {navigate} from 'gatsby'
import {CompareAtPrice} from './CompareAtPrice'
import {useSelector} from "react-redux";
import Cart from "./Cart/Cart";


const sideStyles = isOpen => ({
    right: {
        top: 0, right: 0,
        transform: isOpen ? 'translateX(0%)':'translateX(100%)',
    },
    left: {
        top: 0, left: 0,
        transform: isOpen ? 'translateX(0%)':'translateX(-100%)',
    },
})

export const SideBar = ({pos='left', children, isOpen, ...props}) => {
    return (
        <div sx={{
            ...sideStyles(isOpen)[pos],
            position: 'fixed',
            height: '100vh',
            bg: 'background',
            px: [3],
            transition: `transform 0.8s`,

        }} >
            <Box sx={{width: '100%', position: 'relative'}}  >
                {children}
            </Box>
        </div>
    )
}
