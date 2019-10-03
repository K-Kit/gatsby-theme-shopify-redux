import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions/actionTypes'
import {setAdding, setCheckoutId, setCheckout, toggleCart} from "../actions"
import { ensureState } from 'redux-optimistic-ui'
import { isBrowser } from "../../../utils"


// todo maybe load checkout, this func is sloppy right now but works
export function* createCheckout({ meta: { client } }) {
  const checkout = yield call(client.checkout.create.bind(client))
  // temp set client need to refactor
  yield put({type: 'SET_CLIENT', payload: client})
  yield put(setCheckout(checkout))
  yield put(setCheckoutId(checkout.id))
}


//WORKER SAGA
// todo add line item to state before checkout returns and update if error for preceived speed
export function* addVariantSaga({payload, meta: { client }}) {
  const {variantId, quantity} = payload

  // set adding to true for display indicator
  yield put(setAdding(true))

  // get checkout id to use in add line item
  const checkoutId = yield select(state => ensureState(state.shop.checkout).id)

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

  yield put(toggleCart())

  // finally set adding to false
  yield put(setAdding(false))

}

export function setVariantSaga({payload, meta: {client}}) {
  /**
   * @payload: {product, selectedOptions}
   * uses shopify client from meta to fetch variant info
   * needs to update inStock: bool, price: float, and selected image (maybe)
   *
   */
}

//watcher saga
export function* watchAddItemSaga(){
  yield takeEvery(actions.ADD_VARIANT_TO_CART_SAGA, addVariantSaga)
}


//watcher saga
export function* watchSetVariantSaga(){
  yield takeEvery(actions.ADD_VARIANT_TO_CART_SAGA, addVariantSaga)
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
const saga = [
  takeEvery(actions.CREATE_CHECKOUT, createCheckout),
  takeEvery(actions.ADD_VARIANT_TO_CART_SAGA, addVariantSaga),
]

export default saga