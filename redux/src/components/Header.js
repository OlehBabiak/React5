import React from 'react'
import {useSelector} from 'react-redux'
export const Header = () => {
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees)
    return (
        <div style={
            {background: 'lime',
                height: '60px'
            }
        }>
            <h1>
                {'Bad employees: '}
                {badEmployees.length}
            </h1>
        </div>
    )
}
