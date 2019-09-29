

export const defaultShopState = {
  checkoutId: null,
  isCartOpen: false,
  adding: false,
  isCartError: false,
  lineItems: [],
  checkout: { lineItems: [] },
  products: [],
  shop: {}
}
const t = {
  type: 'ADD_VARIANT_TO_CART_SAGA',
    payload: {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM4MjY2NDUwMDg0Mzc=', quantity:1}
}


const shopReducer = (state = defaultShopState, action) => {

  const {payload} = action
  const client = {}
  // const {client} = action.meta && action.meta
  switch (action.type) {
    case 'SET_CHECKOUT_ID':
      return {...state, checkoutId: payload}
    case 'SET_CHECKOUT':
      // localStorage.setItem(payload.id)
      return {...state, checkout: payload}
    case 'OPEN_CART':
      return {...state, isCartOpen: true};
    case 'CLOSE_CART':
      return {...state, isCartOpen: false};
    case 'SET_ADDING':
      return {...state, adding: action.payload};
    case 'SET_CART_ERROR':
      return {...state, isCartError: action.payload};

    // case 'REMOVE_LINE_ITEM':
    //   return
    case 'ADD_LINE_ITEM':
      return {state, lineItems:[...state.lineItems, 1]}
    // case 'UPDATE_LINE_ITEM':
    //   return state
    default:
      return state
  }
}

export default shopReducer
