import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductInput from "./inputs/ProductInput";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

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

function ModalWindow({
                         modalOpen,
                         handleClose,
                         categories,
                         onChange,
                         inputValue,
                         inputError,
                         onCreate,
                         button

                     }) {
    return (
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
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button onClick={onCreate}>{button}</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Typography>
            </Box>
        </Modal>
    );
}

export default ModalWindow;