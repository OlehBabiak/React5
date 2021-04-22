import {
    ADD_TO_WISHLIST,
    ADD_TO_CART

} from '../action-types/index'

const initialState = {

    headerWishListCounter: [],
    headerCartCounter: [],
}

const reducer = (state = initialState, action) => {

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

        default:
            return state
    }
}
export default reducer