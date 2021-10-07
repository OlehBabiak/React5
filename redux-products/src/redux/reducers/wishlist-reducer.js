import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST,
} from '../action-types/index'

const initFromLS = localStorage.getItem('counters')
const initialState = initFromLS? JSON.parse(initFromLS) : {
    headerWishListCounter: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: [...state.headerWishListCounter, action.payload],
            }
        }
        case REMOVE_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: state.headerWishListCounter.filter(el => el !== action.payload),
            }
        }
        default:
            return state
    }
}
export default reducer