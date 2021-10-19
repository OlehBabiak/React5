import React, {useEffect, useState} from 'react';
import MediaCard from "./MediaCard";
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import {toggleItemInCart, toggleItemInWishList} from "../redux/action-creators";

export const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const {id} = useParams()
    const dispatch = useDispatch()
    const {headerCartCounter} = useSelector(store => store.cart)
    const {headerWishListCounter} = useSelector(store => store.wishlist)

    const fetchItem = async () => {
        if (!id) return;
        try {
            setIsLoading(true)
            const resp = await fetch(`https://fakestoreapi.com/products/${id.slice(1)}`)
            const json = await resp.json();
            console.log('json: ', json)
            setProduct(json)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchItem()
    }, [])

    return (
        <div style={{
            width: '600px',
            margin: '100px auto'
        }}>
            {!isLoading && !!product &&
            <MediaCard
                product={product}
                isInCart={headerCartCounter.includes(product.id)}
                isInWishList={headerWishListCounter.includes(product.id)}
                toggleItemInCart={() => dispatch(toggleItemInCart(product.id))}
                toggleItemInWishList={() => dispatch(toggleItemInWishList(product.id))}
            />}
            {isLoading &&
            <Loader
                style={{marginTop: '200px'}}
                type="Circles"
                color="darkGrey"
                height={50}
                width={50}
                timeout={3000}
            />
            }
        </div>
    );
}

