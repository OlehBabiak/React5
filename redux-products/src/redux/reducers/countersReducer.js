import {
    ADD_TO_WISHLIST,
    ADD_TO_CART,
    REMOVE_WISHLIST,
    REMOVE_CART,
    SUMM_WISHLIST,
    MINUS_SUMM_WISHLIST,
    SUMM_CART,
    MINUS_SUMM_CART
} from '../action-types/index'

const initFromLS = localStorage.getItem('counters')
const initialState = initFromLS? JSON.parse(initFromLS) : {

    headerWishListCounter: [],
    headerCartCounter: [],
    wishListSumm : 0,
    cartSumm : 0
}

const reducer = (state = initialState, action) => {
    console.log('headerWishListCounter: ', state)
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: [...state.headerWishListCounter, action.payload],
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                headerCartCounter: [...state.headerCartCounter, action.payload],
            }
        }
        case REMOVE_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: state.headerWishListCounter.filter(el => el !== action.payload),
            }
        }
        case REMOVE_CART: {
            return {
                ...state,
                headerCartCounter: state.headerCartCounter.filter(el => el !== action.payload),
            }
        }
        case SUMM_WISHLIST: {
            return {
                ...state,
                wishListSumm: state.wishListSumm + action.payload,
            }
        }
        case MINUS_SUMM_WISHLIST: {
            return {
                ...state,
                wishListSumm: state.wishListSumm - action.payload,
            }
        }

        case SUMM_CART: {
            return {
                ...state,
                cartSumm: state.cartSumm + action.payload,
            }
        }
        case MINUS_SUMM_CART: {
            return {
                ...state,
                cartSumm: state.cartSumm - action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer
