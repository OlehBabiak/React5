import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST,
} from '../action-types'
import {addToCard, RemoveCard} from "./cart-action-creator";




const addToWishList = (payload) => ({type: ADD_TO_WISHLIST, payload})
const removeWishList = (payload) => ({type: REMOVE_WISHLIST, payload})
const toggleItemInWishList = (payload) => (dispatch, getState) => {
    const {wishlist: {headerWishListCounter}} = getState();
    const alreadyExist = !!headerWishListCounter.find(el => el === payload);
    dispatch(alreadyExist ? removeWishList(payload) : addToWishList(payload))
}

export {
    addToWishList,
    removeWishList,
    toggleItemInWishList
}