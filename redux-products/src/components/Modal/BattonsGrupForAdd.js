import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function BattonGroupForAdd({onCreate, handleClose}) {
    return (
        <Typography id="modal-modal-description" sx={{mt: 2}}>
            <Button onClick={onCreate}>Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
        </Typography>
    );
}


