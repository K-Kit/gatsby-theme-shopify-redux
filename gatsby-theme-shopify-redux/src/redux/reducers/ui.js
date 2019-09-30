import React from 'react'
import {} from 'lodash'
import * as actions from '../actions/actionTypes'
export const defaultInterfaceContext = {
    isDesktopViewport: false,
    cartStatus: 'initial',
    featuredImage: null,
    currentProduct: {},
    productImagesBrowserStatus: 'initial',
    loginModalStatus: false,
    selectedVariant: null
}

const interfaceReducer = (state = defaultInterfaceContext, action) => {
    switch (action.type) {
        case actions.OPEN_CART:
            return {...state, cartStatus: 'open'}
        case actions.CLOSE_CART:
            return {...state, cartStatus: 'closed'}

        case actions.SET_CURRENT_PRODUCT:
            return {...state, currentProduct: action.payload, featuredImage: action.payload.images[0]}
        case actions.SET_FEATURED_IMAGE:
            return {...state, featuredImage: action.payload}
        case actions.SET_SELECTED_VARIANT:
            return {...state, selectedVariant: action.payload}
        case actions.SET_IS_DESKTOP_VIEWPORT:
            return {...state, isDesktopViewport: action.payload}
        default:
            return state
    }
}
export default interfaceReducer