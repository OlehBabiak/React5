import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    END_PRODUCTS_LOADING,
    REMOVE_CART,
    REMOVE_WISHLIST,
    SET_PRODUCTS,
    START_PRODUCTS_LOADING,
    ERROR
} from '../action-types/index'


export const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
export const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const loadProducts = () => async (dispatch) => {

        dispatch(startProductsLoading())
        const resp = await fetch('https://my-json-server.typicode.com/jubs16/Products/Productss');
        if(resp.status !== 200){
            console.error(resp);
            dispatch({type: ERROR, payload: 'Server error '+ resp.status})
        }
        const json = await resp.json();
        dispatch(setProducts(json))
        dispatch(endProductsLoading())
}
export const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload});
export const addToCard = (payload) => ({type: ADD_TO_CART, payload});
export const RemoveWishList = (payload) => ({type: REMOVE_WISHLIST, payload});
export const RemoveCard = (payload) => ({type: REMOVE_CART, payload});
