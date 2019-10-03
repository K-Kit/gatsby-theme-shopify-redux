import {createActions, handleActions, createAction, handleAction} from 'redux-actions'
import {SET_CHECKOUT} from "./old/actions/actionTypes";
export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'
export const TOGGLE_CART = 'TOGGLE_CART'
export const SET_FEATURED = 'SET_FEATURED'
export const SET_SELECTED_VARIANT = 'SET_SELECTED_VARIANT'
export const TOGGLE_IMAGE_BROWSER = 'TOGGLE_IMAGE_BROWSER'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_ADDING = 'SET_ADDING'
export const SET_IS_DESKTOP = 'SET_IS_DESKTOP'
export const ADD_VARIANT_TO_CART = 'ADD_VARIANT_TO_CART'
export const ADD_LINE_ITEM = 'ADD_LINE_ITEM'
export const REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM'
export const UPDATE_LINE_ITEM = 'UPDATE_LINE_ITEM'
export const SET_CHECKOUT_ID = 'SET_CHECKOUT_ID'
export const SET_SELECTED_VARIANT_SAGA = 'SET_SELECTED_VARIANT_SAGA'
export const UPDATE_LINE_ITEM_SAGA = 'UPDATE_LINE_ITEM_SAGA'
export const REMOVE_LINE_ITEM_SAGA = 'REMOVE_LINE_ITEM_SAGA'
export const ADD_TO_CART_SAGA = 'ADD_TO_CART_SAGA'
export const CREATE_CHECKOUT = 'CREATE_CHECKOUT'
export const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT'
// Cart actions
export const {
    openCart,
    closeCart,
    toggleCart
} = createActions({
    [OPEN_CART]: undefined ,
    [CLOSE_CART]: undefined ,
    [TOGGLE_CART]: undefined ,
})

// product page actions
export const {
    setFeatured,
    toggleImageBrowser,
    setProduct,
    setAdding,
    setIsDesktop,
    setSelectedVariant
} = createActions({
    [SET_FEATURED]: undefined ,
    [SET_SELECTED_VARIANT]: undefined ,
    [TOGGLE_IMAGE_BROWSER]: undefined ,
    [SET_PRODUCT]: undefined ,
    [SET_ADDING]: undefined ,
    [SET_IS_DESKTOP]: undefined ,
})

// shopify page actions
export const {
    addToCart,
    addLineItem,
    removeLineItem,
    updateLineItem,
    setCheckout,
} = createActions({
    [ADD_VARIANT_TO_CART]: undefined ,
    [ADD_LINE_ITEM]: undefined ,
    [REMOVE_LINE_ITEM]: undefined ,
    [UPDATE_LINE_ITEM]: undefined ,
    [SET_CHECKOUT_ID]: undefined ,
    [SET_CHECKOUT]: undefined ,
})

// saga page actions
export const {
    setSelectedVariantSaga,
    updateLineItemSaga,
    removeLineItemSaga,
    addToCartSaga,
    createCheckout,
    updateCheckout,
} = createActions({
    [SET_SELECTED_VARIANT_SAGA]: undefined ,
    [UPDATE_LINE_ITEM_SAGA]: undefined ,
    [REMOVE_LINE_ITEM_SAGA]: undefined ,
    [ADD_TO_CART_SAGA]: undefined ,
    [CREATE_CHECKOUT]: undefined ,
    [UPDATE_CHECKOUT]: undefined ,
})
