import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import rootReducer from './reducers'
import {createShopifyMiddleware} from "./middleware/shopifyMiddleWare"
import {throttle,} from 'lodash'
import checkoutSagas from "./sagas/checkout"
import Client from "shopify-buy"
import { loadState, saveState } from "./utils"
import config from '../../data/SiteConfig'

console.log('redux store logic index, node env: ', process.env.SHOP_NAME)
// initialize shopify client
const client = Client.buildClient({
  storefrontAccessToken: config.shopify.accessToken,
  domain: `${config.shopify.name}.myshopify.com`,
})
console.log(process, process.env, process.env.SHOP_NAME)
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

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    loadState()|| {},
    enhancer,
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

// Saga
  function* makeCheckoutSagas() {
    yield all([...checkoutSagas])
  }

// then run the saga
  sagaMiddleware.run(makeCheckoutSagas)
  // store.dispatch('CREATE_CHECKOUT')
  return store
}

