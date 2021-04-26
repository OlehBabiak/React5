import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addToCard, addToWishList, minusSumCart, minusSumWishList, RemoveCard, RemoveWishList, sumCart, sumWishList
} from "../redux/action-creators";


const OneProd = ({product, id}) => {
    const dispatch = useDispatch();
    const {headerWishListCounter, headerCartCounter} = useSelector(store => store.counters);

    return (
        <div key={product.name}
             style={{
                 width: '70%',
                 margin: '100px auto'
             }}>
            <h2>{'Description: '}{product.name}</h2>
            <h3>{'Price: '}{product.price}{'$'}</h3>
            <img style={{width: '100%'}} src={product.imgUrl} alt={'img'}/>

            <div className='productButtons'>
                <button style={{
                    background: headerWishListCounter.includes(id) && 'darkred'
                }} onClick={
                    !headerWishListCounter.includes(id) ?
                        () => {
                            dispatch(addToWishList(product.name));
                            dispatch(sumWishList(product.price));
                        }
                        :
                        () => {
                            dispatch(RemoveWishList(product.name));
                            dispatch(minusSumWishList(product.price));
                        }
                }>
                    {!headerWishListCounter.includes(id) ? 'Add to wishList' : 'Remove wishList'}
                </button>
                <button style={{
                    background: headerCartCounter.includes(id) && 'darkred'
                }} onClick={
                    !headerCartCounter.includes(id) ?
                        () => {
                            dispatch(addToCard(product.name));
                            dispatch(sumCart(product.price));
                        }
                        :
                        () => {
                            dispatch(RemoveCard(product.name));
                            dispatch(minusSumCart(product.price));
                        }
                }>
                    {!headerCartCounter.includes(id) ? 'Add to Cart' : 'Remove Cart'}</button>
            </div>
        </div>
    )
}
export default OneProd;