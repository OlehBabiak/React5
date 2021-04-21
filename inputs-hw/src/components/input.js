import React, {useState} from 'react'


export default function Input({
endpoint, 
id, 
setEndpointsData,
setId,
onSubmit}) {


    return (
        <div>
            <h1>This is input</h1>
    
    <input 
    value={endpoint}
    onChange={({target: {value}}) => setEndpointsData(value)} 
    type="text" 
    name = "endpoint"
    placeholder = "Enter endpoint name"
    />  
    <br/>
    <br/>
    <input 
    value={id}
    onChange={({target: {value}}) => setId(value)} 
    type="text" 
    name = "number"
    placeholder = "Enter number"
    /> 
    <br/>
    <br/>
    <button onClick={onSubmit}>Fetch data</button>
    </div>
    )
}
