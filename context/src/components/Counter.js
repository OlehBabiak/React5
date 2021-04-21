import React, {useContext} from 'react'
import CounterContext from "./CounterContext";

export default function Counter() {
    const {counter, incCounter, decCounter} = useContext(CounterContext)

    return (
        <>
       <h2>Counter:{counter}</h2>
        <button onClick={decCounter}>dec</button>
        <button onClick={incCounter}>inc</button>
        </>
    )
}
