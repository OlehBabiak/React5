import {ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_CART, REMOVE_WISHLIST} from '../action-types/index';

const initFromLS = localStorage.getItem('counters');
const initialState = initFromLS ? JSON.parse(initFromLS) : {
    headerWishListCounter: [],
    headerCartCounter: [],
    wishListSumm: 0,
    cartSumm: 0
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: [...state.headerWishListCounter, payload.name],
                wishListSumm: state.wishListSumm + payload.price
            }
        }
        case REMOVE_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: state.headerWishListCounter.filter(el => el !== payload.name),
                wishListSumm: state.wishListSumm - payload.price
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                headerCartCounter: [...state.headerCartCounter, payload.name],
                cartSumm: state.cartSumm + payload.price
            }
        }
        case REMOVE_CART: {
            return {
                ...state,
                headerCartCounter: state.headerCartCounter.filter(el => el !== payload.name),
                cartSumm: state.cartSumm - payload.price
            }
        }
        default:
            return state
    }
};

export default reducer;
