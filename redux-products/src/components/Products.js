import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    loadProducts,
    toggleItemInCart,
    toggleItemInWishList
} from '../redux/action-creators';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MediaCard from "./MediaCard";
import {Button} from "@mui/material";
import ModalNewProduct from "./Modal/ModalNewProduct";


export const Products = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(store => store.products)
    const {headerCartCounter} = useSelector(store => store.cart)
    const {headerWishListCounter} = useSelector(store => store.wishlist)
    const LIMIT_STEP = 5
    const [limit, setLimit] = useState(LIMIT_STEP);
    const limitAdd = () => setLimit(prev => prev += LIMIT_STEP)


    useEffect(() => {
        dispatch(loadProducts({limit: limit}))
    }, [dispatch, limit])
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gridTemplateRows: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginTop: '101px'
            }}>
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
                    <div key={product.id}>
                        <MediaCard
                            product={product}
                            id={product.id}
                            isInCart={headerCartCounter.includes(product.id)}
                            isInWishList={headerWishListCounter.includes(product.id)}
                            toggleItemInCart={() => dispatch(toggleItemInCart(product.id))}
                            toggleItemInWishList={() => dispatch(toggleItemInWishList(product.id))}
                        />
                    </div>
                    )
                )}
            </div>
            {products.length < 20 && <Button
                variant="contained"
                color='secondary'
                onClick={limitAdd}
                size="small">Load more</Button>}
            <ModalNewProduct/>
        </>
    )
}

