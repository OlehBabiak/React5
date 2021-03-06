import {
    INC,
    INC_CUSTOM,
    DEC,
    RES
} from '../action-types/index'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                counter: state.counter+1
            }
        }
        case INC_CUSTOM: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DEC: {
            return {
                ...state,
                counter: state.counter-1
            }
        }
        case RES: {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
    }
}
export default reducer