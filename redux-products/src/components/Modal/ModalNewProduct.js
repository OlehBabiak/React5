import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductInput from "./inputs/ProductInput";
import {
    uploadProducts,
    loadCategories,
    handleItemChange,
    clearInput,
    openModal,
    createInputError
} from '../../redux/action-creators';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalWindow from "./ModalWindow";




export default function ModalNewProduct() {
    const dispatch = useDispatch()
    const {categories, inputValue, modalOpen, inputError, newProductId} = useSelector(store => store.modals)
    console.log('newProductId: ', newProductId)
    const defoltValue = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    }



    const onChange = ({ target: { name, value } }) => {
        dispatch(handleItemChange(name, value))
    }

    const handleClose = () => {
        dispatch(openModal(false))
        dispatch(clearInput(defoltValue))
        dispatch(createInputError(null))
    };
    const addForm = () => {dispatch(uploadProducts(inputValue))}
    const onCreate = () => {
        if (inputValue.title.trim().length !== 0 &&
            inputValue.price.trim().length !== 0 &&
            inputValue.description.trim().length !== 0 &&
            inputValue.image.trim().length !== 0 &&
            inputValue.category.trim().length !== 0) {
            addForm()
            dispatch(clearInput(defoltValue))
            handleClose()
        } else {
            dispatch(createInputError("Not valid value"))

        }
    };

    useEffect(() => {
        dispatch(loadCategories())
    }, [])


    return (
        <div>
            <Button onClick={() => dispatch(openModal(true))}>Add new product</Button>
            <ModalWindow
                modalOpen={modalOpen}
                handleClose={handleClose}
                categories={categories}
                onChange={onChange}
                inputValue={inputValue}
                inputError={inputError}
                onCreate={onCreate}
                button='Adddddd'
            />
        </div>
    );
}