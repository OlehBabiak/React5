import {
    GET_CATEGORY,
    ADD_PRODUCT_ID,
    UPDATE_PRODUCT,
    HANDLE_ITEM_CHANGE,
    CLEAR_INPUT,
    CHANGE_INPUT_ERROR,
    OPEN_MODAL
} from '../action-types'


const getCategories = (payload) => ({type: GET_CATEGORY, payload})
const addProductId = (payload) => ({type: ADD_PRODUCT_ID, payload})
const updateProduct = (payload) => ({type: UPDATE_PRODUCT, payload})
const handleItemChange = (name, value) =>({type: HANDLE_ITEM_CHANGE, payload:{name, value}})
const clearInput = (payload) => ({type: CLEAR_INPUT, payload})
const openModal = (payload) => ({type: OPEN_MODAL, payload})
const createInputError = (payload) => ({type: CHANGE_INPUT_ERROR, payload})

/////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

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

const putProducts = (payload, id) => async (dispatch) => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                payload
            )
        });
        const json = await resp.json();
        dispatch(updateProduct(json))
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
    handleItemChange,
    clearInput,
    openModal,
    createInputError,
    putProducts
}