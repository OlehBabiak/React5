import {useSelector, useDispatch} from 'react-redux'
//Сюди перекидуєм store(counter) з App.js
import {
    incAction,
    incCustom,
    incDec,
    incRes,
    incAction_two,
    incCustom_two,
    incDec_two,
    incRes_two
} from '../redux/action-creators'


const Counter = () => {
    const {counter1, counter2} = useSelector(({counter1, counter2})=> ({
        counter1: counter1.counter,
        counter2: counter2.counter
    }))

    const dispatch = useDispatch()

    //В payload можем класти масив елементів які берем з сервера
    return (
        <>
            <h1>{counter1}</h1>
            <button onClick={()=> dispatch(incAction())}>INC</button>
            <button onClick={()=> dispatch(incCustom(102))}>INC CUSTOM</button>
            <button onClick={()=> dispatch(incDec())}>DEC</button>
            <button onClick={()=> dispatch(incRes())}>RESET</button>
            <br/>
            <br/>
            <h1>{counter2}</h1>
            <button onClick={()=> dispatch(incAction_two())}>INC_TWO</button>
            <button onClick={()=> dispatch(incCustom_two(102))}>INC CUSTOM_TWO</button>
            <button onClick={()=> dispatch(incDec_two())}>DEC_TWO</button>
            <button onClick={()=> dispatch(incRes_two())}>RESET_TWO</button>
        </>
    )
}

export default Counter


