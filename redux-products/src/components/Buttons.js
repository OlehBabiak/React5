import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToWishList,
    addToCard
} from '../redux/action-creators'

const Buttons = (props) => {
    const {headerWishListCounter, headerCartCounter} = useSelector(store => store.counters)
    console.log('props: ', props)
    // const dispatch = useDispatch()
    return(
        <div className='productButtons'>
            <button style={{
                background: headerWishListCounter.includes(props.id) && 'darkred'
            }} onClick={props.onClickAddToWish}>Add to wishList</button>
            <button style={{
                background: headerCartCounter.includes(props.id) && 'darkred'
            }} onClick={props.onClickAddToCart}>Add to Cart</button>
        </div>
    )
}
export default Buttons