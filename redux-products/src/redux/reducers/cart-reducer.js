import {
    REMOVE_CART,
    ADD_TO_CART,
} from '../action-types/index'

const initFromLS = localStorage.getItem('counters')
const initialState = initFromLS? JSON.parse(initFromLS) : {
    headerCartCounter: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                headerCartCounter: [...state.headerCartCounter, action.payload],
            }
        }
        case REMOVE_CART: {
            return {
                ...state,
                headerCartCounter: state.headerCartCounter.filter(el => el !== action.payload),
            }
        }
        default:
            return state
    }
}
export default reducer