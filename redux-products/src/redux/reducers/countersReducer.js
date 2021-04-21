import {
    ADD_TO_WISHLIST,
    ADD_TO_CART

} from '../action-types/index'

const initialState = {

    headerWishListCounter: 0,
    headerCartCounter: 0,
    isButtonOnclick: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                headerWishListCounter: state.headerWishListCounter+1,
                isButtonOnclick: true
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                headerCartCounter: state.headerCartCounter+1,
                isButtonOnclick: true
            }
        }

        default:
            return state
    }
}
export default reducer