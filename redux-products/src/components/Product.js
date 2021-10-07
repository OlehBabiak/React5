import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToCard,
    addToWishList,
    loadProducts,
    RemoveWishList,
    RemoveCard,
} from '../redux/action-creators';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Buttons from "./Buttons";



const Products = () => {
    const dispatch = useDispatch()
  const {products, isLoading} = useSelector(store => store.products)

    useEffect(()=>{
        dispatch(loadProducts())
    }, [])

    return (
        <div>
            {isLoading &&
                <Loader
                    style={{marginTop: '200px'}}
                    type="Circles"
                    color="darkGrey"
                    height={50}
                    width={50}
                    timeout={3000} //3 secs
                />
            }

            {!isLoading && products.map(product => (

                <div key={product.title}
                     style={{
                    width: '50%',
                    margin: '100px auto'
                }}>
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h3>{'Price: '}{product.price}{'$'}</h3>
                    <img style={{width: '50%'}} src={product.image} alt={'img'}/>
                   <Buttons
                product={product}
                id={product.id}
                onClickAddToWish = {()=>dispatch(addToWishList(product.id))}
                onClickAddToCart = {()=>dispatch(addToCard(product.id))}
                RemoveWish = {()=>dispatch(RemoveWishList(product.id))}
                RemoveCart = {()=>dispatch(RemoveCard(product.id))}
                />
                    <hr/>
                </div>
                )
            )}
        </div>
    )
}
export default Products