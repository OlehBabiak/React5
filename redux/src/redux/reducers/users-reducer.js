import {
    ON_USERS_LOADED,
    GRAYSCALE_ACTION,
    GRAYSCALE_ACTION_NONE
} from '../action-types/index'

const initialState = {
  users: [],
    badEmployees: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_USERS_LOADED: {
            return {
                ...state,
                users: action.payload
            }
        }
        case GRAYSCALE_ACTION: {
            return {
                ...state,
                badEmployees: [...state.badEmployees, action.payload]
            }
        }

        case GRAYSCALE_ACTION_NONE: {
            return {
                ...state,
                badEmployees: state.badEmployees.filter(el => el !== action.payload)
            }
        }
            default:
                return state
    }
}
export default reducer