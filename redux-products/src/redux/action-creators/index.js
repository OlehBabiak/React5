import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    END_PRODUCTS_LOADING,
    REMOVE_CART,
    REMOVE_WISHLIST,
    SET_PRODUCTS,
    START_PRODUCTS_LOADING
} from '../action-types/index'


export const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
export const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startProductsLoading())
        const resp = await fetch('https://my-json-server.typicode.com/jubs16/Products/Products');
        const json = await resp.json();
        dispatch(setProducts(json))

    }catch (e) {
        console.error(e)
    }finally {
        dispatch(endProductsLoading())
    }
}
export const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload});
export const addToCard = (payload) => ({type: ADD_TO_CART, payload});
export const RemoveWishList = (payload) => ({type: REMOVE_WISHLIST, payload});
export const RemoveCard = (payload) => ({type: REMOVE_CART, payload});
