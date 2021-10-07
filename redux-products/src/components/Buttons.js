import React  from 'react'
import {useSelector} from 'react-redux'


const Buttons = (props) => {
    const {headerCartCounter} = useSelector(store => store.cart)
    const {headerWishListCounter} = useSelector(store => store.wishlist)
    return(
        <div className='productButtons'>
            <button style={{
                background: headerWishListCounter.includes(props.id) && 'darkred'
            }} onClick={
                !headerWishListCounter.includes(props.id)?
                  ()=> {
                        props.onClickAddToWish();
                    }
                    :
                    ()=> {
                        props.RemoveWish();

                    }
                   }>
                {!headerWishListCounter.includes(props.id)? 'Add to wishList' : 'Remove wishList'}
            </button>
            <button style={{
                background: headerCartCounter.includes(props.id) && 'darkred'
            }} onClick={
                !headerCartCounter.includes(props.id)?
                    ()=> {
                        props.onClickAddToCart();
                    }
                    :
                    ()=> {
                        props.RemoveCart();

                    }
            }>
            {!headerCartCounter.includes(props.id)? 'Add to Cart' : 'Remove from Cart'}</button>
        </div>
    )
}
export default Buttons