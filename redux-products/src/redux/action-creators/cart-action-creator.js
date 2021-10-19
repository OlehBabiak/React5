import {
    ADD_TO_CART,
    REMOVE_CART,
} from '../action-types'

const addToCard = (payload) => ({type: ADD_TO_CART, payload})
const RemoveCard = (payload) => ({type: REMOVE_CART, payload})
const toggleItemInCart = (payload) => (dispatch, getState) => {
    const {cart: {headerCartCounter}} = getState();
    const alreadyExist = !!headerCartCounter.find(el => el === payload);
    dispatch(alreadyExist ? RemoveCard(payload) : addToCard(payload))
}

export {
    addToCard,
    RemoveCard,
    toggleItemInCart
}