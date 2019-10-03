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
import { AccordionNav } from '@theme-ui/sidenav'
import Links from '../links.mdx'
import {NavLink} from "./Layout/Layout.styles";
import {MdClose} from "react-icons/md";
import {toggleSideNav} from "../store/actions";

export const Accordian = props => (
    <Links
        {...props}
        components={{
            wrapper: AccordionNav,
            a: NavLink,
        }}
    />
)

const sideStyles = {
    right: {
        top: 0, right: 0
    },
    left: {
        top: 0, left: 0
    },
}

export const SideNav = ({pos='left', children, ...props}) => {
    const isOpen = useSelector(state => state.sideNav);
    const dispatch = useDispatch()
    // const isOpen =true
    return (
        <SideBar pos={'left'} isOpen={isOpen}>
            <Box  my={4}  sx={{float: 'right'}}>
                <MdClose sx={{width: '30px', height: '30px'}} onClick={() => dispatch(toggleSideNav())} />
            </Box>

            <Accordian {...props} />
                {children}
        </SideBar>
    )
}
