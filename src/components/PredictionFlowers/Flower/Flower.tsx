
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './Flower.scss';
import { useState } from 'react';

export const Flower = ({ item }: any) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="item">
            <img src={process.env.PUBLIC_URL + item.img} />
            <div className="itemText">
                <div className="itemInner">
                    <button className="itemButton" onClick={handleClickOpen}>Узнать значение!</button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {item.name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {item.description}
                        <div className='flower-img'>
                            <img src={process.env.PUBLIC_URL + item.img} />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Понятно!
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
