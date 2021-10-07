import React, {useMemo} from 'react'
import {useSelector} from 'react-redux'

const Header = () => {
    const {headerCartCounter} = useSelector(store => store.cart)
    const {headerWishListCounter} = useSelector(store => store.wishlist)
    const {products} = useSelector(store => store.products)
    const totalCounter = headerWishListCounter.length + headerCartCounter.length

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
        background: "#fff",
        padding: "15px 0",
        zIndex: "100",
        WebkitBoxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
        position: 'fixed',
        left: '0',
        top: '0',
    }

    const headerInner = {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: '-webkit-box',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        WebkitBoxPack: 'justify',
        msFlexPack: 'justify',
        justifyContent: 'space-between',
        padding: '0 15px',
    }

    return (
        <header style={headerStyle}>
            <div style={headerInner}>
                <h3>{`Wish list: ${headerWishListCounter.length} ($${calculatedWishListSum})`}</h3>
                <h3>{`Cart: ${headerCartCounter.length} ($${calculatedCartSum})`}</h3>
                <h3>{`Total: ${totalCounter}`}</h3>
            </div>
        </header>
    )
}

export default Header