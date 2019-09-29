import React from 'react'
import {} from 'lodash'
import * as actions from '../actions/actionTypes'
export const defaultInterfaceContext = {
    isDesktopViewport: null,
    cartStatus: 'initial',
    productImageFeatured: null,
    currentProduct: {},
    productImagesBrowserStatus: 'initial',
    loginModalStatus: false,
}

const interfaceReducer = (state = defaultInterfaceContext, action) => {
    switch (action.type) {
        case actions.OPEN_CART:
            return {...state, cartStatus: 'open'}
        case actions.CLOSE_CART:
            return {...state, cartStatus: 'closed'}

        case actions.SET_CURRENT_PRODUCT:
            return {...state,}
        default:
            return state
    }
}
export default interfaceReducer