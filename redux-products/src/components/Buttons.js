import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToWishList,
    addToCard
} from '../redux/action-creators'

const Buttons = (isButtonOnclick) => {
//style={{background: isButtonOnclick && 'darkred'}}
    console.log('isButtonOnclick: ',isButtonOnclick)
    const dispatch = useDispatch()
    return(
        <div className='productButtons'>
            <button style={{background: isButtonOnclick && 'darkred'}} onClick={()=>dispatch(addToWishList())}>Add to wishList</button>
            <button  onClick={()=>dispatch(addToCard())}>Add to Cart</button>
        </div>
    )
}
export default Buttons