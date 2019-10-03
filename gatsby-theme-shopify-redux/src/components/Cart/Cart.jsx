/** @jsx jsx */
import {jsx } from 'theme-ui'
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {CartList} from "./Cart.styles";
//import { Test } from './Cart.styles';
import {Box, Flex, Button} from "rebass";
import {toggleCart} from '../../redux/old/actions'

// todo move styles out of here
const Cart = (props) => (
  <div>
      <Button
          onClick={props.toggle}
          sx={{
          width: [50],
          height: 50,
          position: 'fixed',
          top: [20],
          left: -50,
          transform: `translateX(${props.open ? '50px' : '3px'})`,
          transition: '0.8s',
          bg: 'muted',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
              color: 'black',
      }}>
          Cart
      </Button>
      {/*ikik naming conventions are a mess will fix soontm*/}
      <CartList
          sx={{minWidth: 300}}
          items={props.checkout.lineItems}
          handleRemove={props.removeLineItem}
          updateQuantity={props.updateLineItem}
          // setCartLoading={setCartLoading}
          // isCartLoading={this.state.isLoading}
      />
      <a href={props.checkoutUrl}>
      <Button> Check Out </Button>
      </a>
  </div>
);

Cart.propTypes = {
  // bla: PropTypes.string,
    checkoutUrl: PropTypes.string,
    checkout: PropTypes.object
};

Cart.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  checkout: state.shopify.checkout,

});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
    toggle: () => dispatch(toggleCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
