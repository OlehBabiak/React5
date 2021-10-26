import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductInput from "./inputs/ProductInput";
import {useDispatch, useSelector} from "react-redux";
import {
    clearInput,
    createInputError,
    handleItemChange,
    loadCategories,
    openModal,
    putProducts
} from "../../redux/action-creators";
import {useEffect} from "react";
import ModalWindow from "./ModalWindow";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalEditProduct({id}) {
    const dispatch = useDispatch()
    const {categories, inputValue, modalOpen, inputError, updatedProductsId} = useSelector(store => store.modals)
    console.log('updatedProductsId: ', updatedProductsId)
    const defoltValue = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    }

    console.log('ProductsId: ', id)


    const onChange = ({ target: { name, value } }) => {
        dispatch(handleItemChange(name, value))
    }

    const handleClose = () => {
        dispatch(openModal(false))
        dispatch(clearInput(defoltValue))
        dispatch(createInputError(null))
    };
    const addForm = () => {dispatch(putProducts(inputValue, id))} //!!!!!!!!!!!!!!
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
            <Button onClick={() => dispatch(openModal(true))}>Update product</Button>
            <ModalWindow
                modalOpen={modalOpen}
                handleClose={handleClose}
                categories={categories}
                onChange={onChange}
                inputValue={inputValue}
                inputError={inputError}
                onCreate={onCreate}
                button='Update'
            />
        </div>
    );
}