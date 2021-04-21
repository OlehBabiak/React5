import React  from 'react'
import {useSelector} from 'react-redux'

const Header = () => {
    const {headerWishListCounter, headerCartCounter} = useSelector(store => store.counters)

    const totalCounter = headerWishListCounter.length + headerCartCounter.length
    const headerStyle = {
        width: "100%",
        background: "#fff",
        padding: "15px 0",
        zIndex: "100",
        WebkitBoxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
        boxShadow: '0 5px 25px rgba(0, 0, 0, 0.15)',
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
                <h3>{'Wish list: '}{headerWishListCounter.length}</h3>
                <h3>{'Cart: '}{headerCartCounter.length}</h3>
                <h3>{'Total: '}{totalCounter}</h3>
            </div>
        </header>
    )
}

export default Header