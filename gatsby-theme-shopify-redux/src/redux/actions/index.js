import * as actionTypes from './actionTypes'
import {SET_CURRENT_PRODUCT} from "./actionTypes";

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

export const setCurrentProduct = (payload) => ({
  type: actionTypes.SET_CURRENT_PRODUCT,
  payload: payload
})


export const setFeaturedImage = (payload) => ({
  type: actionTypes.SET_FEATURED_IMAGE,
  payload: payload
})


export const toggleImageBrowser = () => ({
  type: actionTypes.TOGGLE_IMAGE_BROWSER
})
