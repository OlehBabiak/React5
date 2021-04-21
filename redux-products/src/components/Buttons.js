import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToWishList,
    addToCard
} from '../redux/action-creators'

const Buttons = (id) => {
    const {products} = useSelector(store => store.products)
//style={{background: isButtonOnclick && 'darkred'}}
    console.log('id: ',id)
    const dispatch = useDispatch()
    return(
        <div className='productButtons'>
            <button style={{
                background: products.includes(id.name) && 'darkred'
            }} onClick={()=>dispatch(addToWishList(id.name))}>Add to wishList</button>
            <button style={{
                background: products.includes(id.name) && 'darkred'
            }} onClick={()=>dispatch(addToCard(id.name))}>Add to Cart</button>
        </div>
    )
}
export default Buttons