import React  from 'react'
import {useSelector} from 'react-redux'


const Buttons = (props) => {
    const {headerWishListCounter, headerCartCounter} = useSelector(store => store.counters)

    return(
        <div className='productButtons'>
            <button style={{
                background: headerWishListCounter.includes(props.id) && 'darkred'
            }} onClick={
                !headerWishListCounter.includes(props.id)?
                  ()=> {
                        props.onClickAddToWish();
                        props.sumWishList()
                    }
                    :
                    ()=> {
                        props.RemoveWish();
                        props.minusSumWishList()
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
                        props.sumCart()
                    }
                    :
                    ()=> {
                        props.RemoveCart();
                        props.minusSumCart()
                    }
            }>
            {!headerCartCounter.includes(props.id)? 'Add to Cart' : 'Remove Cart'}</button>
        </div>
    )
}
export default Buttons