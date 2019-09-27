import * as actionTypes from './actionTypes'

export const setAdding = (payload) => ({
  type: actionTypes.SET_ADDING,
  payload: payload
})

export const setCheckoutId = (payload) => ({
  type: actionTypes.SET_CHECKOUT_ID,
  payload: payload
})

export const setCheckout = (payload) => ({
  type: actionTypes.SET_CHECKOUT,
  payload: payload
})


export const addVariantToCart = ({variantId, quantity}) => ({
  type: actionTypes.ADD_VARIANT_TO_CART,
  payload: {variantId,quantity}
})
// export const addLineItem = (
//   {
//     variantId,
//   quantity= 1,
//   customAttributes= [],
//   }
// ) => (state) => ({
//   ...state,
//   checkout: {
//     ...state.checkout,
//     lineItems: state.lineItems.concat([
//       {variantId, quantity, customAttributes },
//     ])
//   }
//   ,
// })
//
// export const updateLineItem = ({
//   variantId, quantity, customAttributes
// }) => {
//   return (
//
//   )
// }