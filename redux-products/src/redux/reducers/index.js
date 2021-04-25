import {combineReducers} from "redux";
import productReducer from './products-reducer'
import productsCounterReducer from './countersReducer'



export const reducer = combineReducers({
    products: productReducer,
    counters: productsCounterReducer
})
console.log('reducer: ', reducer.products)