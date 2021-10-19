import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {useHistory} from "react-router-dom";

export default function MediaCard(
    {
        product,
        isInCart,
        isInWishList,
        toggleItemInCart,
        toggleItemInWishList
    }) {
    const history = useHistory()
    return (
        <Card sx={{
            width: '100%',
            margin: '2px',
            height: '100%'
        }}>
            <CardMedia
                component="img"
                src={product.image}
                alt="items"
                onClick={() => history.push(`/products/:${product.id}`)}
            />
            <CardContent>
                <Typography
                    gutterBottom variant="h5"
                    component="div">
                    {product.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary">
                    {product.description}
                </Typography>
                <Rating
                    precision='0.5'
                />
                <Typography
                    variant="h6"
                    color="black"
                >
                    Price: {product.price}{'$'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color={!isInWishList ? 'secondary' : 'error'}
                    onClick={
                        () => toggleItemInWishList()
                    }
                    size="small">{!isInWishList ? 'ADD TO WISLIST' : 'REMOVE FROM WISLIST'}</Button>
                <Button
                    variant="contained"
                    color={!isInCart ? 'secondary' : 'error'}
                    onClick={
                        () => {
                            toggleItemInCart();
                        }
                    }
                    size="small">{!isInCart ? 'ADD TO CART' : 'REMOVE FROM CART'}</Button>
            </CardActions>
        </Card>
    );
}