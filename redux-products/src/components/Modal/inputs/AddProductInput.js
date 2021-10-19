import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FormHelperText, InputAdornment, MenuItem, Select} from "@mui/material";


export default function AddProductInput({categories, titleChangeHandler,
                                            priceChangeHandler,
                                            descriptionChangeHandler,
                                            imageChangeHandler,
                                            categoryChangeHandler, itemInput, titleError}) {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    error={!!titleError}
                    required={true}
                    value={itemInput.title}
                    id="outlined-helperText"
                    label="Title"
                    helperText={titleError || "Enter title"}
                    onChange={titleChangeHandler}
                />
                <TextField
                    error={!!titleError}
                    required={true}
                    value={itemInput.price}
                    id="outlined-number"
                    label="Price"
                    type="number"
                    helperText={titleError || "Enter price"}
                    onChange={priceChangeHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    error={!!titleError}
                    required={true}
                    value={itemInput.description}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    helperText={titleError || "Enter description"}
                    onChange={descriptionChangeHandler}
                />
                <TextField
                    error={!!titleError}
                    required={true}
                    value={itemInput.image}
                    type='url'
                    id="outlined-helperText"
                    label="Image link"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                    }}
                    helperText={titleError || "Enter image"}
                    onChange={imageChangeHandler}
                />
                    <Select
                        error={!!titleError}
                        sx={{ m: 1, minWidth: 220 }}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={itemInput.category}
                        helperText={titleError || "Enter image"}
                        label="Category"
                        onChange={categoryChangeHandler}
                    >
                        {categories.map(ctg =>
                            <MenuItem
                                value={ctg}
                                key={ctg}
                            >{ctg}
                            </MenuItem>
                        )}
                    </Select>
                    <FormHelperText>{titleError || "Enter category"}</FormHelperText>
            </div>
        </Box>
    );
}
