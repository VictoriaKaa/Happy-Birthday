import { useEffect, useRef, useState } from 'react';
import './BalloonGame.scss'
import { Constants } from './Balloon/Balloon';
import { BalloonGrid } from './Balloon/BalloonGrid';
import { CSSTransition } from 'react-transition-group';

// github.com/c99rahul/pop-a-balloon/" 
export const BalloonGame  = ({ numberOfBalloons, gameDuration }: any) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [activeBalloons, setActiveBalloons] = useState([]);
    const [score, setScore] = useState(-1);
    const [timeRemaining, setTimeRemaining] = useState(gameDuration);
    const [stop, setStop] = useState(false);
    const [hit, setHit] = useState(false);
  
    const timerRef = useRef<any>(null);
  
    const handleBalloonClick = (id: any) => {
      setScore((prevScore) => prevScore + 1);
      setHit(true);
      setActiveBalloons((prevActiveBalloons) =>
        prevActiveBalloons.filter((activeId) => activeId !== id)
      );
  
      setTimeout(() => {
        setHit(false);
      }, Constants.randomnessLimits.lower);
    };
  
    const startGame = () => {
      setGameStarted(true);
      setScore(0);
      setActiveBalloons([]);
      setTimeRemaining(gameDuration);
      setStop(false);
    };
  
    const stopGame = () => {
      setGameStarted(false);
      setStop(true);
    };
  
    useEffect(() => {
      if (gameStarted && !stop) {
        timerRef.current = setInterval(() => {
          setTimeRemaining((prevTimeRemaining: any) => {
            if (prevTimeRemaining > 0) {
              return prevTimeRemaining - 1;
            } else {
              clearInterval(timerRef.current);
              setGameStarted(false);
              return 0;
            }
          });
        }, 1000);
      }
  
      return () => {
        clearInterval(timerRef.current);
      };
    }, [gameStarted, stop]);
  
    return (
      <div className="game-container">
        {(!gameStarted || stop) && (
          <CoverScreen
            score={score}
            onStartGame={startGame}
            duration={Constants.gameDuration}
          />
        )}
        <CSSTransition
          in={gameStarted}
          timeout={250}
          classNames="balloons-screen"
          mountOnEnter
          unmountOnExit
        >
          {(state: any) => (
            <div className={`balloons-screen balloons-screen--${state}`}>
              <div className="game-nav">
                <h1 className="game-title">Лопни шарик!</h1>
                <div className="game-settings">
                  <ScoreCard score={score} time={timeRemaining} />
                  <GameButton type={"alert"} onClick={stopGame}>
                    Stop
                  </GameButton>
                </div>
              </div>
              <BalloonGrid
                numberOfBalloons={numberOfBalloons}
                activeBalloons={activeBalloons}
                onBalloonClick={handleBalloonClick}
              />
            </div>
          )}
        </CSSTransition>
        <Toast message={"+1 hits"} trigger={hit} />
      </div>
    );
  };
  
  const GameButton = ({ width, onClick, children }: any) => {
    const widthMap: any = {
      wide: "btn--wide",
      full: "btn--full"
    };
    const buttonClassNames = `btn ${widthMap[width] || ""}`;
    return (
      <button className={buttonClassNames} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  const Toast = ({ message, trigger }: any) => {
    return (
      <CSSTransition
        in={trigger}
        timeout={250}
        classNames="toast"
        mountOnEnter
        unmountOnExit
      >
        {(state: any) => <div className={`toast toast--${state}`}>{message}</div>}
      </CSSTransition>
    );
  };
  
  const ScoreCard = ({ score, time }: any) => {
    return (
      <div className="game-score">
        {score} попаданий / {time}с осталось
      </div>
    );
  };
  
  const CoverScreen = ({ score, onStartGame, duration }: any) => (
    <div className="intro">
      <h1 className="title">{score > -1 ? "Игра Окончена!" : "Лопните воздушный шар! 🎈"}</h1>
      {score > -1 ? (
        <p className="description">
          {`Ваши очки: ${
            score === 0 ? "пусто" : `${score} удара(ов)`}
          `}
        </p>
      ) : (
        <p className="description">
          За 30 секунд лопните как можно больше шариков.
        </p>
      )}
      <div className="action">
        <GameButton onClick={onStartGame} width={"wide"}>
          {score > -1 ? "Играть снова" : "Начать игру"}
        </GameButton>
      </div>
    </div>
  );
  