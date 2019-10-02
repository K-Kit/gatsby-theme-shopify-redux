import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import { ensureState } from 'redux-optimistic-ui'

import {
    toggleCart,
    setAdding,
    setCheckout,
    addToCartSaga,
    openCart,
    closeCart,
    setSelectedVariant,
    SET_SELECTED_VARIANT_SAGA, CREATE_CHECKOUT_SAGA, UPDATE_CHECKOUT, ADD_TO_CART_SAGA, CREATE_CHECKOUT
} from './actions'
// import {CREATE_CHECKOUT} from "./old/actions/actionTypes";



// todo maybe load checkout, this func is sloppy right now but works
export function* createCheckout({ meta: { client } }) {
    console.log('initializing checkout')
    const checkout = yield call(client.checkout.create.bind(client))
    yield put(setCheckout(checkout))
    console.log('success initializing checkout')
}

function* updateCheckoutSaga({ meta: { client } }) {
    const checkoutId = yield select(
        state => ensureState(state.shopify).checkout.id,
    )

    if (!checkoutId) yield put(createCheckout())

    const checkout = yield call(client.checkout.update)
}

//WORKER SAGA
// todo add line item to state before checkout returns and update if error for preceived speed
export function* addVariantSaga({payload, meta: { client }}) {
    console.log('addtocart triggered')
    const {variantId, quantity} = payload

    // set adding to true for display indicator
    yield put(setAdding(true))

    // get checkout id to use in add line item
    const checkoutId = yield select(state => ensureState(state.shopify.checkout).id)

    // maybe add support for add many to cart? probably not wurf right now
    const lineItemsToUpdate = [
        { variantId, quantity: parseInt(quantity, 10) },
    ]
    // todo refactor to request/receive pattern + naming
    // add to cart, todo add error handling
    const updatedCheckout = yield client.checkout
        .addLineItems(checkoutId, lineItemsToUpdate)

    // update checkout
    yield put(setCheckout(updatedCheckout))

    yield put(openCart())

    // finally set adding to false
    yield put(setAdding(false))

}

export function* setVariantSaga({payload: {product,options}, meta: {client}}) {
    /**
     * @payload: {product, selectedOptions}
     * uses shopify client from meta to fetch variant info
     * needs to update inStock: bool, price: float, and selected image (maybe)
     *
     */
    const selectedVariant = client.product.helpers.variantForOptions(
        product,
        options
    )
    yield put(setSelectedVariant(selectedVariant))
    // console.log('set sel variant', selectedVariant)
}
export default [
    takeEvery(SET_SELECTED_VARIANT_SAGA, setVariantSaga),
    takeEvery(CREATE_CHECKOUT, createCheckout),
    takeEvery(UPDATE_CHECKOUT, updateCheckoutSaga),
    takeEvery(ADD_TO_CART_SAGA, addVariantSaga)
]

