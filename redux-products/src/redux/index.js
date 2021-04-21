import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers/index'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log('Store: ', store)