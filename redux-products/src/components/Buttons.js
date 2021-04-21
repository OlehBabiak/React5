import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToWishList,
    addToCard
} from '../redux/action-creators'

const Buttons = (isButtonOnclick, id) => {
    const {products, isLoading} = useSelector(store => store.products)
    console.log('products: ',products)
//style={{background: isButtonOnclick && 'darkred'}}
    const dispatch = useDispatch()
    return(
        <div className='productButtons'>
            <button style={{background: isButtonOnclick && id===products.name && 'darkred'}} onClick={()=>dispatch(addToWishList())}>Add to wishList</button>
            <button  onClick={()=>dispatch(addToCard())}>Add to Cart</button>
        </div>
    )
}
export default Buttons