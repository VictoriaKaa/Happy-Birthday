import { useState } from "react";
import "./CelebrationPage.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Roulette } from "../../components/Roulette/Roulette";
import { Constants } from "../../components/BalloonGame/Balloon/Balloon";
import { BalloonGame } from "../../components/BalloonGame/BalloonGame";
import { PredictionFLowers } from "../../components/PredictionFlowers/PredictionFlowers";

const CelebrationPage = () => {
    const navigate = useNavigate();
    const [currentActivity, setCurrentActivity] = useState('');

    return (
        <>
            <div className="celebration-container">
                <div>С ЮБИЛЕЕМ</div>
                <div className="buttons-container">
                    <Button variant="contained" color="success" onClick={() => setCurrentActivity('roulette')}>Рулетка поздравлений</Button>
                    <Button variant="contained" color="success" onClick={() => setCurrentActivity('game')}>Игра в шарики</Button>
                    <Button variant="contained" color="success" onClick={() => setCurrentActivity('flowers')}>Цветы и предсказания</Button>
                </div>
                <div className="activity-container">
                    {currentActivity === 'roulette' && <Roulette />}
                    {currentActivity === 'game' && <BalloonGame
                        numberOfBalloons={Constants.gameCells}
                        gameDuration={Constants.gameDuration}
                    />}
                    {currentActivity === 'flowers' && <PredictionFLowers />}
                </div>

            </div>
        </>
    );
};

export default CelebrationPage;
