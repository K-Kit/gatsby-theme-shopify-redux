import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from '../redux/index'
const store = configureStore();
export const wrapRootElement = ({element, ...props}) => <Provider {...props} store={store} />

export default wrapRootElement