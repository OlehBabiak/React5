import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
} from '../action-types/index'

const initFromLS = localStorage.getItem('products')
const initialState = initFromLS? JSON.parse(initFromLS) : {
    products: [],
    isLoading: false,
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case START_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: false
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