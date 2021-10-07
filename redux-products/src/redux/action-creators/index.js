import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
    ADD_TO_WISHLIST,
    ADD_TO_CART,
    REMOVE_WISHLIST,
    REMOVE_CART,
} from '../action-types'



const startProductsLoading = () => ({type: START_PRODUCTS_LOADING})
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING})
const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startProductsLoading())
        const resp = await fetch('https://fakestoreapi.com/products');
        const json = await resp.json();
        dispatch(setProducts(json))

    }catch (e) {
        console.error(e)
    }finally {
        dispatch(endProductsLoading())
    }
}
const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload})
const addToCard = (payload) => ({type: ADD_TO_CART, payload})
const RemoveWishList = (payload) => ({type: REMOVE_WISHLIST, payload})
const RemoveCard = (payload) => ({type: REMOVE_CART, payload})

export {
    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts,
    addToWishList,
    addToCard,
    RemoveWishList,
    RemoveCard,
}