import { useEffect, useState } from "react";
import { Balloon, Constants } from "./Balloon";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


export const BalloonGrid = ({ numberOfBalloons, onBalloonClick }: any) => {
    const [activeBalloons, setActiveBalloons] = useState([] as any);
  
    const handleBalloonClick = (id: any) => {
      if (onBalloonClick) {
        onBalloonClick(id);
      }
    };
  
    useEffect(() => {
      const intervalIds: any[] = [];
  
      const generateRandomBalloon = () => {
        const randomBalloonId = Math.floor(Math.random() * numberOfBalloons);
  
        setActiveBalloons((prevActiveBalloons: any) => {
          if (prevActiveBalloons.includes(randomBalloonId)) {
            return prevActiveBalloons.filter(
              (activeId: number) => activeId !== randomBalloonId
            );
          } else {
            return [...prevActiveBalloons, randomBalloonId];
          }
        });
      };
  
      for (let i = 0; i < numberOfBalloons; i++) {
        const intervalId = setInterval(
          generateRandomBalloon,
          getRandomNumber(
            Constants.randomnessLimits.lower,
            Constants.randomnessLimits.upper
          )
        );
        intervalIds.push(intervalId);
      }
  
      return () => {
        intervalIds.forEach((intervalId) => clearInterval(intervalId));
      };
    }, []);
  
    const balloons = [];
  
    for (let i = 0; i < numberOfBalloons; i++) {
      balloons.push(
        <Balloon
          key={i}
          id={i}
          color={Constants.balloonColor}
          isActive={activeBalloons.includes(i)}
          onClick={() => handleBalloonClick(i)}
        />
      );
    }
  
    return (
      <div className="balloon-grid-wrapper">
        <p className="balloon-grid-caption">Нажмите на шарик для получения очков</p>
        <div className="balloon-grid">{balloons}</div>
      </div>
    );
  };
  