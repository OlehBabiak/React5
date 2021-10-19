import {
    GET_CATEGORY,
    ADD_PRODUCT_ID
} from '../action-types/index'


const initialState =  {
    categories: [],
    newProductId: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY: {
            return {
                ...state,
                categories: action.payload,
            }
        }
        case ADD_PRODUCT_ID: {
            return {
                ...state,
                newProductId: action.payload,
            }
        }
        default:
            return state
    }
}

export default reducer