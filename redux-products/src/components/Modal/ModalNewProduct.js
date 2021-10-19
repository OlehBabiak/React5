import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddProductInput from "./inputs/AddProductInput";
import {
    uploadProducts,
    loadCategories,
} from '../../redux/action-creators';
import {useEffect, useState} from "react";
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setTitleError(null)
    };
    const addForm = () => {dispatch(uploadProducts(itemInput))}
    const {categories} = useSelector(store => store.modals)
    const [titleError, setTitleError] = useState(null);


    const defoltValue = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    }

    const [itemInput, setItemInput] = useState(defoltValue);

    const handleItemChange = (name, value) =>{                                      //adding data from input
        setItemInput({...itemInput, [name]: value})
    }

    const titleChangeHandler = (event) => {
        handleItemChange('title', event.target.value)
        setTitleError(null);
    }
    const priceChangeHandler = (event) => {
        handleItemChange('price', event.target.value)
        setTitleError(null);
    }
    const descriptionChangeHandler = (event) => {
        handleItemChange('description', event.target.value)
        setTitleError(null);
    }
    const imageChangeHandler = (event) => {
        handleItemChange('image', event.target.value)
        setTitleError(null);
    }
    const categoryChangeHandler = (event) => {
        handleItemChange('category', event.target.value)
        setTitleError(null);
    }

    const onCreate = () => {
        if (itemInput.title.trim().length !== 0 &&
            itemInput.price.trim().length !== 0 &&
            itemInput.description.trim().length !== 0 &&
            itemInput.image.trim().length !== 0 &&
            itemInput.category.trim().length !== 0) {
            addForm()
            setItemInput(defoltValue)
            handleClose()
        } else {
            setTitleError("Not valid value");
        }
    };

    useEffect(() => {
        dispatch(loadCategories())
    }, [])


    return (
        <div>
            <Button onClick={handleOpen}>Add new product</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <AddProductInput
                            categories={categories}
                            titleChangeHandler={titleChangeHandler}
                            priceChangeHandler={priceChangeHandler}
                            descriptionChangeHandler={descriptionChangeHandler}
                            imageChangeHandler={imageChangeHandler}
                            categoryChangeHandler={categoryChangeHandler}
                            itemInput={itemInput}
                            titleError={titleError}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button onClick={onCreate}>Add</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}