/** @jsx jsx */
import {jsx } from 'theme-ui'
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {CartList} from "./Cart.styles";
//import { Test } from './Cart.styles';

const Cart = (props) => (
  <div>
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
  checkout: state.shop.checkout
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
