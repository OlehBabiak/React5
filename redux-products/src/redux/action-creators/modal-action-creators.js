import {
    GET_CATEGORY,
    ADD_PRODUCT_ID
} from '../action-types'


const getCategories = (payload) => ({type: GET_CATEGORY, payload})
const addProductId = (payload) => ({type: ADD_PRODUCT_ID, payload})

const uploadProducts = (payload) => async (dispatch) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products`,{
            method:"POST",
            body:JSON.stringify(
                payload
            )
        });
        const json = await resp.json();
        dispatch(addProductId(json))
    }catch (e) {
        console.error(e)
    }finally {

    }
}

const loadCategories = () => async (dispatch) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products/categories`);
        const json = await resp.json();
        dispatch(getCategories(json))

    }catch (e) {
        console.error(e)
    }finally {
    }
}

export {
    uploadProducts,
    loadCategories,
}