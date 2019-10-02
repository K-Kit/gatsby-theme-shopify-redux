/** @jsx jsx */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Layout as ThemeLayout, Header, Styled, Main, Container, jsx, useThemeUI} from "theme-ui";
import {Global} from "@emotion/core";
import { Text, Flex, Box} from "rebass";
import {navigate} from 'gatsby'
import {NavLink as Link} from "./Layout.styles";
import config from '../../../data/SiteConfig'
import {useDispatch, useSelector} from "react-redux";
// import {setIsDesktop, } from '../../redux/old/actions'
import {CartContainer} from "../CartContainer";
import {TOGGLE_CART, setIsDesktop, toggleCart,closeCart} from '../../redux/actions'
const Layout = (props) => {
    const dispatch = useDispatch()
    const isDesktop = useSelector(state => state.productPage.isDesktop)
    const checkoutExists = useSelector(state => state.shopify.checkout.id)
    useEffect(() => {
        if (typeof window !== 'undefined'){
            if (!checkoutExists) {
                dispatch({type: 'CREATE_CHECKOUT'})
            }
            const viewport = window.visualViewport.width
            const check = viewport > 900
            if (check !== isDesktop) {
                dispatch(setIsDesktop(check))
            }
        }
    })
    // close cart on page change
    useEffect(() => {
        dispatch(closeCart())
    },[props.path])
    return (
  <>
      <Global
          styles={theme => ({
              body: {
                  margin: 0,
                  padding: 0
              }
          })}
      />
      <ThemeLayout>
          <Header sx={{
              display: 'grid',
              gridGap: 3,
              gridTemplateColumns: 'repeat(3, 1fr)',
              px: 3,
              py: 4,
              alignItems: 'center',
          }}>

                  <button
                      title='Toggle Menu'
                      onClick={() => dispatch(toggleCart())}
                      sx={{
                          appearance: 'none',
                          width: 32,
                          height: 32,
                          m: 0,
                          p: 1,
                          color: 'inherit',
                          bg: 'transparent',
                          border: 0,
                          ':focus': {
                              outline: '2px solid',
                          },
                          ':hover': {
                              color: 'primary',
                          },
                      }}

                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width='24'
                          height='24'
                          fill="currentcolor"
                          viewBox="0 0 24 24"
                          sx={{
                              display: 'block',
                              margin: 0,
                          }}>
                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                      </svg>
                  </button>
                  <div
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                      }}>
                      <Link
                          to='/'
                          sx={{
                              variant: 'styles.navlink',
                              px: 3,
                              py: 1,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              border: '4px solid',
                              color: 'primary',
                          }}>
                          {config.siteTitleShort || config.siteTitle}
                      </Link>
                  </div>
                  <div
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                      }}>
                      {/*<Link*/}
                      {/*    to='/blog'*/}
                      {/*    sx={{*/}
                      {/*        variant: 'styles.navlink',*/}
                      {/*        ml: 3,*/}
                      {/*        py: 3,*/}
                      {/*    }}>*/}
                      {/*    Blog*/}
                      {/*</Link>*/}
                      {/*<Link*/}
                      {/*    to='/about'*/}
                      {/*    sx={{*/}
                      {/*        variant: 'styles.navlink',*/}
                      {/*        ml: 3,*/}
                      {/*        py: 3,*/}
                      {/*    }}>*/}
                      {/*    About*/}
                      {/*</Link>*/}
                  </div>

          </Header>
          <Main>
              <Container>
                  {props.children}
              </Container>
          </Main>
          <CartContainer />
      </ThemeLayout>
      </>
)};

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
