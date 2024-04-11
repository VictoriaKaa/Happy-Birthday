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
    'Счастья, здоровья, успехов во всём и везде! Не болеть, не грустить, радоваться и наслаждаться жизнью. Пусть судьба преподносит только приятные подарки и сюрпризы! Успехов, процветания во всём. Всех благ!',
    'Пусть сбываются мечты, пусть всё вокруг радует, вдохновляет и приносит самые яркие эмоции! Приятных путешествий и море удовольствия от всего!',
    'Крепкого здоровья, удачи, благополучия, добра, радости, любви, счастья, хорошего настроения, улыбок, ярких впечатлений. Пусть тепло и уют всегда наполняют дом, пусть солнечный свет согревает в любую погоду, а желания исполняются при одной мысли о них.',
    'Пусть сбываются все мечты, воплотятся в реальность планы. Пусть в жизни всегда царят любовь и гармония. Желаю, чтобы жизнь была полна ярких счастливых моментов.',
    'Здоровья, счастья и успеха во всех начинаниях. Пусть каждый день приносит радость, новые открытия и удовольствие, а мечты и планы сбудутся с легкостью. Пусть твоя жизнь будет наполнена яркими эмоциями и событиями.',
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