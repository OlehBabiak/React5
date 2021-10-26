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
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <ProductInput
                            categories={categories}
                            onChange={onChange}
                            itemInput={inputValue}
                            titleError={inputError}
                            onCreate={onCreate}
                            handleClose={handleClose}
                        />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}