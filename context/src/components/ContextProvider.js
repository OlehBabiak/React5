import React from 'react'
import CounterContext from "./CounterContext";



function ContextProvider({children}) {
    const [counter, setCounter] = React.useState(0)
    const incCounter = () => {
        setCounter(counter +1)
    }

    const decCounter = () => {
        setCounter(counter -1)
    }

    return (
            <CounterContext.Provider value = {{
                counter,
                incCounter,
                decCounter
            }}>
                
                {children}
            </CounterContext.Provider>
    )
}

export default ContextProvider