import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from '../redux/index'
const store = configureStore();
export const wrapRootElement = ({element, ...props}) => {
    const [viewport, setViewport] = React.useState()
    React.useEffect(() => {

    })
    return <Provider {...props} store={store}>
    {element}
</Provider>}

export default wrapRootElement