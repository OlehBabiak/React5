import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadProducts} from '../redux/action-creators';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import OneProd from "./OneProd";


const Products = () => {
    const dispatch = useDispatch();
    const {products, isLoading, error} = useSelector(store => store.products);

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    console.log(error);

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

            {!isLoading && !error.bool && products.map(product =>
                <OneProd
                    product={product}
                    id={product.name}
                    key={product.name}
                />
            )}
            {
                error && alert(error.msg)
            }
        </div>
    )
}

export default Products;
