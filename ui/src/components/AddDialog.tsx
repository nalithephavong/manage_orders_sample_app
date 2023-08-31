import * as React from 'react';
import { useState } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

interface AddDialogProps {
    showDialog: boolean;
    setShowDialog: (value:boolean) => void;
    callbackFn: (value:unknown) => void;
    title: string;
    description: string;
}

export default function AddDialog(props:AddDialogProps) {
    const { showDialog, setShowDialog, callbackFn, title, description } = props;
    const [customer, setCustomer] = useState('');
    const [total, setTotal] = useState('');

    const handleClose = () => {
        setShowDialog(false);
    };

    const handleAdd = () => {
        callbackFn( {
            customer: customer,
            total: total
        });
        setShowDialog(false);
    };

    const handleCustomerChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCustomer(event.target.value);
    };

    const handleTotalChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTotal(event.target.value);
    };

    return (
        <div>
            <Dialog open={showDialog} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="customer"
                        label="Customer"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleCustomerChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="total"
                        label="Total"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleTotalChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd} autoFocus>Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
