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


export const addVariantToCart = payload => ({
  type: actionTypes.ADD_VARIANT_TO_CART_SAGA,
  payload: payload
})

export const setCurrentProduct = (payload) => ({
  type: actionTypes.SET_CURRENT_PRODUCT,
  payload: payload
})


export const setFeaturedImage = (payload) => ({
  type: actionTypes.SET_FEATURED_IMAGE,
  payload: payload
})
export const setIsDesktop = (payload) => ({
  type: actionTypes.SET_IS_DESKTOP_VIEWPORT,
  payload: payload
})


export const toggleImageBrowser = () => ({
  type: actionTypes.TOGGLE_IMAGE_BROWSER
})
export const toggleCart = () => ({
  type: actionTypes.TOGGLE_CART
})

export const setSelectedVariant = (payload) => ({
  type: actionTypes.SET_SELECTED_VARIANT,
  payload: variant
})

export const addToCart = (payload) => ({
  type: actionTypes.ADD_VARIANT_TO_CART_SAGA,
  payload: payload
})

