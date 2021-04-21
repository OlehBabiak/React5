import {
    INC,
    INC_CUSTOM,
    DEC,
    RES,
    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RES_TWO,
} from '../action-types/index'


const incAction = () => ({type: INC})
const incCustom = (payload) => ({type: INC_CUSTOM, payload})
const incDec = () => ({type: DEC})
const incRes = () => ({type: RES})

const incAction_two = () => ({type: INC_TWO})
const incCustom_two = (payload) => ({type: INC_CUSTOM_TWO, payload})
const incDec_two = () => ({type: DEC_TWO})
const incRes_two = () => ({type: RES_TWO})




export {
    incAction,
    incCustom,
    incDec,
    incRes,
    incAction_two,
    incCustom_two,
    incDec_two,
    incRes_two,
}