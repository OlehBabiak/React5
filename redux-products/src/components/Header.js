import React, {useMemo} from 'react'
import {useSelector} from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {useHistory} from "react-router-dom";

export const Header = () => {
    const {headerCartCounter} = useSelector(store => store.cart)
    const {headerWishListCounter} = useSelector(store => store.wishlist)
    const {products} = useSelector(store => store.products)
    const totalCounter = headerWishListCounter.length + headerCartCounter.length
    const history = useHistory()
    const calculatedCartSum = useMemo(() => {
        return products
            .filter(el => headerCartCounter.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, headerCartCounter])

    const calculatedWishListSum = useMemo(() => {
        return products
            .filter(el => headerWishListCounter.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, headerWishListCounter])

    const headerStyle = {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: "#a59c9c",
        padding: "15px 0",
        zIndex: "100",
        WebkitBoxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
        position: 'fixed',
        left: '0',
        top: '0',
    }

    const siteName = {
        padding: '0 20px'
    }

    const headerInner_wrapper = {
        maxWidth: '1200px',
        display: 'flex',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        WebkitBoxPack: 'justify',
        msFlexPack: 'justify',
        justifyContent: 'end',
        padding: '0 15px',
    }

    const headerInner = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 10px',
        fontSize: '30px'
    }


    return (
        <header style={headerStyle}>
            <div style={siteName}>
                <h2 onClick={() => history.push('/')}>My site</h2>
            </div>
            <div style={headerInner_wrapper}>
                <div style={headerInner}>
                    <PlaylistAddCheckIcon sx={{ fontSize: 50 }}/>
                    <div>{`${headerWishListCounter.length} ($${calculatedWishListSum})`}</div>
                </div>
                <div style={headerInner}>
                    <ShoppingCartIcon sx={{ fontSize: 35 }}/>
                    <div>{`${headerCartCounter.length} ($${calculatedCartSum})`}</div>
                </div>
                <div style={headerInner}>{`Total: ${totalCounter}`}</div>
            </div>
        </header>
    )
}

