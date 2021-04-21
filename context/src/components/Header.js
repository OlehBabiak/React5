import React, {useContext} from 'react'
import CounterContext from "./CounterContext";



export default function Header() {
   const {counter} = useContext(CounterContext)

    return (
       <h1>Header counter:{counter}</h1>
    )
}
