import {
    ADD_TO_WISHLIST,
    ADD_TO_CART,
    REMOVE_WISHLIST,
    REMOVE_CART

} from '../action-types/index'

const initialState = {

    headerWishListCounter: [],
    headerCartCounter: [],
}

const reducer = (state = initialState, action) => {
    console.log('action.payload: ', action.payload)
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
                headerWishListCounter: [state.headerWishListCounter.filter(el => el === action.payload)],
            }
        }
        case REMOVE_CART: {
            return {
                ...state,
                headerCartCounter: [state.headerCartCounter.filter(el => el !== action.payload)],
            }
        }

        default:
            return state
    }
}
export default reducer