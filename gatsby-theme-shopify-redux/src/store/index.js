import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import rootReducer from './reducers'
import {createShopifyMiddleware} from "./middleware/shopifyMiddleWare"
import {throttle,} from 'lodash'
import sagas from "./sagas"
import Client from "shopify-buy"
import { loadState, saveState } from "./utils"


console.log('redux store logic index, node env: ', process.env.SHOP_NAME)
// initialize shopify client
const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

const shopifyMiddleware = createShopifyMiddleware(client)

// create saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware( sagaMiddleware, shopifyMiddleware, ),
);

// apply middleware + redux devtools extension,
// todo probably remove in production?
// todo: impl better load/save state, just doing everything right now
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    loadState(),
    enhancer,
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

// Saga
  function* makeCheckoutSagas() {
    yield all([...sagas])
  }

// then run the saga
  sagaMiddleware.run(makeCheckoutSagas)
  // store.dispatch('CREATE_CHECKOUT')
  return store
}

