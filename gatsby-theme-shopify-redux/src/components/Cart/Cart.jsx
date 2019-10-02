/** @jsx jsx */
import {jsx } from 'theme-ui'
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {CartList} from "./Cart.styles";
//import { Test } from './Cart.styles';
import {Box, Flex, Button} from "rebass";
import {toggleCart} from '../../redux/old/actions'
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
      <CartList
          items={props.checkout.lineItems}
          // handleRemove={handleRemove}
          // updateQuantity={handleQuantityChange}
          // setCartLoading={setCartLoading}
          // isCartLoading={this.state.isLoading}
      />
  </div>
);

Cart.propTypes = {
  // bla: PropTypes.string,
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
