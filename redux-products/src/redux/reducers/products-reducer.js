import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
    ERROR
} from '../action-types/index'

const initFromLS = localStorage.getItem('products')
const initialState = initFromLS ? JSON.parse(initFromLS) : {
    products: [],
    isLoading: false,
    error: { bool : false, msg: ''},
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
                products: action.payload
            }
        }
        case ERROR: {

            return {
                ...state,
                error: {bool: true, msg: action.payload}
            }
        }
        default:
            return state
    }
}
export default reducer
