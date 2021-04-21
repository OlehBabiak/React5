import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
    ADD_TO_WISHLIST,
    ADD_TO_CART
} from '../action-types/index'
import { v4 as uuidv4 } from 'uuid'


const startProductsLoading = () => ({type: START_PRODUCTS_LOADING})
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING})
const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload})
const addToCard = (payload) => ({type: ADD_TO_CART, payload})
const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startProductsLoading())
        const resp = await fetch('https://my-json-server.typicode.com/jubs16/Products/Products');
        const json = await resp.json();
        console.log('json: ',json)
        dispatch(setProducts(json))

    }catch (e) {
        console.error(e)
    }finally {
        dispatch(endProductsLoading())
    }
}


export {
    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts,
    addToWishList,
    addToCard
}