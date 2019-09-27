export const setCartStatus = ({payload}) => {
  return ({
    type: "SET_CART_STATUS",
    payload
  })
}

export const toggleCartStatus = ({payload}) => {
  return ({
    type: "TOGGLE_CART_STATUS",
    payload
  })
}


export const setFeaturedProduct = ({payload}) => {
  return ({
    type: "SET_FEATURED_PRODUCT",
    payload
  })
}

export const toggleProductImages = ({payload}) => {
  return ({
    type: "TOGGLE_PRODUCT_IMAGES",
    payload
  })
}
