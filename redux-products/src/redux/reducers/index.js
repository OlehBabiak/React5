import {combineReducers} from "redux";
import productReducer from './products-reducer'
import cartReducer from './cart-reducer'
import wishlistreducer from './wishlist-reducer'



export const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistreducer,
})
console.log('reducer: ', reducer.products)