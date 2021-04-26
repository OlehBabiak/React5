import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers/index';
import thunk from 'redux-thunk';

const persister = (store) => (next) => (action) => {
    next(action);
    const {products, counters} = store.getState();
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('counters', JSON.stringify(counters));
}
const middlewares = [thunk, persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
