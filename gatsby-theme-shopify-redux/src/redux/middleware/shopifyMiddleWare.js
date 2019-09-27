export const createShopifyMiddleware = client => _store => next => action => {
    action.meta = { ...action.meta, client }

  return next(action)
}