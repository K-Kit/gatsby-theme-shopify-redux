import {handleActions} from "redux-actions";
import {
    addLineItem,
    addToCart, closeCart, openCart,
    removeLineItem,
    setCheckout,
    setFeatured, setIsDesktop, setProduct, toggleCart,
    toggleImageBrowser,
    updateLineItem
} from "./actions";
import {combineReducers} from "redux";
import shop from "./old/reducers/shop";
import ui from "./old/reducers/ui";


/**
 * todo refactor actions to take in specified values, just quickly refactoring for now
 * */
const defaultState={}
const shopify = handleActions(
    {
        // [addToCart]: (state, {payload}) => {},
        // [addLineItem]: (state, {payload}) => {},
        // [removeLineItem]: (state, {payload}) => {},
        // [updateLineItem]: (state, {payload}) => {},
        [setCheckout]: (state, {payload}) => ({...state, checkout: payload}),
    },
    {
        checkoutId: null,
        adding: false,
        isCartError: false,
        checkout: { lineItems: [] },
        products: [],
        client: null
    }
);


const productPage = handleActions(
    {
        [setFeatured]: (state, {payload}) => ({...state, featuredImage: payload}),
        [toggleImageBrowser]: (state, {payload}) => ({...state, imageBrowserOpen: payload}),
        [setProduct]: (state, {payload}) => ({
            ...state,
            currentProduct: payload,
            featuredImage: payload.images[0]
        }),
        [setIsDesktop]: (state, {payload}) => ({...state, isDesktop: payload}),
    },
    {
        isDesktop: false,
        featuredImage: null,
        currentProduct: {},
        imageBrowserOpen: false,
        loginModalStatus: false,
        selectedVariant: null
    }
);

const cart = handleActions(
    {
        [openCart]: (state, {payload}) => ({...state, isOpen: true}),
        [closeCart]: (state, {payload}) =>  ({...state, isOpen: false}),
        [toggleCart]: (state, {payload}) =>  ({...state, isOpen: !state.isOpen}),
    },
    {isOpen: false, adding: false, error: false}
);

export default combineReducers({
    shopify,
    cart,
    productPage
})
