import { useState } from 'react';
import './Roulette.scss'
import { Wheel } from 'react-custom-roulette';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const data = [
    { option: '1', style: { backgroundColor: '#b6667d' } },
    { option: '2', style: { backgroundColor: '#eec6db' } },
    { option: '3', style: { backgroundColor: '#f7ebf4' } },
    { option: '4', style: { backgroundColor: '#62806c' } },
    { option: '5', style: { backgroundColor: '#055755' } },
]

const congratulationTexts = [
    'Счастья здоровья!',
    'Всего наилучшего!',
    'Крепкого здоровья и долгих лет жизни!',
    'Хорошего настроения!',
    'Много денег и удачи!',
]

export const Roulette = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [open, setOpen] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='roulette-container'>
            <h1 className='roulette-title'>Крутите рулетку, чтобы получить поздравление!</h1>
            <div className='roulette'>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    backgroundColors={['darkgrey', 'lightgrey']}
                    outerBorderWidth={3}
                    outerBorderColor='lightgrey'
                    innerBorderColor='lightgrey'
                    radiusLineColor='lightgrey'
                    radiusLineWidth={3}

                    onStopSpinning={() => {
                        setMustSpin(false);
                        handleClickOpen();
                    }}
                />
                <Button variant="contained" color="success" className='roulette-btn' onClick={handleSpinClick}>Крутить!</Button>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Поздравление {prizeNumber + 1}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {congratulationTexts[prizeNumber]}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Ура!
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}