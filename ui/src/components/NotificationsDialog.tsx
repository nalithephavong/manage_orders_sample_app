import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

interface DeleteDialogProps {
    notifications: string[];
    showDialog: boolean;
    setShowDialog: (value:boolean) => void;
}

export default function NotificationsDialog(props:DeleteDialogProps) {
    const { notifications, showDialog, setShowDialog } = props;

    const handleClose = () => {
        setShowDialog(false);
    };

    const handleDelete = () => {
        setShowDialog(false);
    };

    return (
        <div>
            <Dialog
                open={showDialog}
                onClose={handleClose}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                    Notifications
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="delete-dialog-description">
                    {notifications.length > 0 ? (
                        notifications.join("\n")
                        ): ("Yay! No notifications to display.")
                    }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
