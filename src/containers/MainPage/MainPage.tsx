import { useEffect, useState } from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { Button } from "@mui/material";

const MainPath = () => {
    const navigate = useNavigate();
    const [currVal, setCurrVal] = useState(0);

    useEffect(() => {
        currVal !== 60 && setTimeout(setCurrVal, 50, currVal + 1);
    }, [currVal]);


    return (
        <div className="main-container">
            <Confetti />
            {(currVal === 60) && <div className="photo" />}
            <div className="number">{currVal}
                {(currVal === 60) && <Button variant="contained" color="success" onClick={() => navigate('/celebration')}>Начать празднование!</Button>}
            </div>
        </div>
    );
};

export default MainPath;
