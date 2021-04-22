import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToCard,
    addToWishList,
    loadProducts,
} from '../redux/action-creators'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Buttons from "./Buttons";


const Products = () => {
    const dispatch = useDispatch()
  const {products, isLoading} = useSelector(store => store.products)




    useEffect(()=>{
        dispatch(loadProducts())
        console.log('products: ',products)
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

                <div key={product.name}
                     style={{
                    width: '70%',
                    margin: '10px auto'
                }}>
                    <h2>{'Description: '}{product.name}</h2>
                    <h3>{'Price: '}{product.price}{'$'}</h3>
                    <img style={{width: '100%'}} src={product.imgUrl} alt={'img'}/>
                   <Buttons
                product={product}
                id={product.name}
                onClickAddToWish = {()=>dispatch(addToWishList(product.name))}
                onClickAddToCart = {()=>dispatch(addToCard(product.name))}
                />
                    <hr/>
                </div>
                )
            )}
        </div>
    )
}
export default Products