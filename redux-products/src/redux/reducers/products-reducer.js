import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,

} from '../action-types/index'

const initialState = {
    products: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_PRODUCTS_LOADING: {
            return {
                ...state,
            }
        }
        case END_PRODUCTS_LOADING: {
            return {
                ...state,
            }
        }
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            }
        }


        default:
            return state
    }
}
export default reducer