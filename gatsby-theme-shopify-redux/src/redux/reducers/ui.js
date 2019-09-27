import React from 'react'

export const defaultInterfaceContext = {
    isDesktopViewport: null,
    cartStatus: 'initial',
    toggleCart: () => {},
    productImageFeatured: null,
    featureProductImage: () => {},
    currentProductImages: [],
    setCurrentProductImages: () => {},
    productImagesBrowserStatus: 'initial',
    toggleProductImagesBrowser: () => {},
    contributorAreaStatus: 'initial',
    toggleContributorArea: () => {},
    loginModalStatus: false,
    toggleLoginModalStatus: () => {},
}

const interfaceReducer = (state = defaultInterfaceContext, action) => {
    switch (action.type) {
        case 'OPEN_CART':
            return {...state, cartStatus: 'open'}
        case 'CLOSE_CART':
            return {...state, cartStatus: 'closed'}
        default:
            return state
    }
}
export default interfaceReducer