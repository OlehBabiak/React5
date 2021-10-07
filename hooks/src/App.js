import React, {useState,useMemo, memo, useCallback, useReducer} from 'react'
import './App.css';

const Child = memo(()=> {
    const [counter, setCounter] = useState(0)
    const inc = () => {
        setCounter(prev=>prev+1)
    }
    console.log('Child rerendered')
    return (
        <>
            <h2>Child comp</h2>
            <button onClick={inc}>{counter}</button>
        </>
    )
})

function App() {
    const fn = (a, b) => {
        console.log('called')
        return Math.pow(a, b)
    }
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(2)

    const inc = useCallback(() => {
        setCounter(prev=>prev+1)
    },[])
    const inc2 = useCallback(() => {
        setCounter2(prev=>prev+1)
    },[])

    const complexLogic = useMemo(()=> { //між рендерами useMemo буде памятати початковий стан, в депси кладем значення яке
        // буде змінюватись при ререндері і викликати запуск ф-ції
        return fn(4, counter2)
    }, [counter2])

    console.log('rerender', complexLogic)
  return (
    <div className="App">
        <button onClick={inc}>{counter}</button>
        <button onClick={inc2}>{counter2}</button>
        <Child inc={inc}/>
    </div>
  );
}
//
// const initialState = {
//     counter: 0
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {counter: state.counter+1};
//         case 'DECREMENT':
//             return {counter: state.counter-1}
//     }
// }
//
// function App() {
// const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div className="App">
//             <h1>{state.counter}</h1>
//             <button onClick={()=> dispatch({type: 'INCREMENT'})}>inc</button>
//             <button onClick={()=> dispatch({type: 'DECREMENT'})}>dec</button>
//         </div>
//     )
// }


export default App;

