import {
    ON_USERS_LOADED,
    GRAYSCALE_ACTION,
    GRAYSCALE_ACTION_NONE
} from '../action-types/index'


const onUserLoaded = (payload) => ({type: ON_USERS_LOADED, payload})
const grayScaleAction = (payload) => ({type: GRAYSCALE_ACTION, payload})
const grayScaleActionNone = (payload) => ({type: GRAYSCALE_ACTION_NONE, payload})


export {
    grayScaleAction,
    onUserLoaded,
    grayScaleActionNone
}