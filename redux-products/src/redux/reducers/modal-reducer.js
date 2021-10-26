import {
    GET_CATEGORY,
    ADD_PRODUCT_ID,
    UPDATE_PRODUCT,
    HANDLE_ITEM_CHANGE,
    CLEAR_INPUT,
    CHANGE_INPUT_ERROR,
    OPEN_MODAL
} from '../action-types/index'


const initialState =  {
    categories: [],
    newProductId: '',
    updatedProductsId: '',
    inputValue: {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    },
    inputError: null,
    modalOpen: false
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
        case UPDATE_PRODUCT: {
            return {
                ...state,
                updatedProductsId: action.payload,
            }
        }
        case HANDLE_ITEM_CHANGE: {
            const inputValue = {...state.inputValue}
            const {name, value} = action.payload;
            return {
                ...state,
                inputValue: {...inputValue, [name]: value}
            }
        }
        case CLEAR_INPUT: {
            return {
                ...state,
                inputValue: action.payload
            }
        }
        case OPEN_MODAL: {
            return {
                ...state,
                modalOpen: action.payload
            }
        }
        case CHANGE_INPUT_ERROR: {
            return {
                ...state,
                inputError: action.payload,
            }
        }
        default:
            return state
    }
}

export default reducer