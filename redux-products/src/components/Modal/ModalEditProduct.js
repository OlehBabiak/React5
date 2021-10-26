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

}