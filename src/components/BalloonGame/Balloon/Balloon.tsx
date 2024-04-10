import classnames from "classnames";
import { useState } from "react";
import './Balloon.scss'


export const Constants = {
  gameDuration: 30,
  gameCells: 9,
  balloonWidth: 120,
  threadHeight: 50,
  randomnessLimits: { upper: 3000, lower: 1000 },
  balloonColor: "#b6667d"
};
export const Balloon = ({ id, color, isActive, onClick }: any) => {
  const [isPopped, setIsPopped] = useState(false);

  const classNames = classnames("balloon balloon--moving", {
    "balloon--active": isActive,
    "balloon--popping": isPopped
  });

  const clickHandler = (e: any) => {
    if (!isPopped) {
      setIsPopped(true);
      onClick();

      setTimeout(() => {
        setIsPopped(false);
      }, Constants.randomnessLimits.lower);
    }
  };

  const balloonWidth = Constants.balloonWidth;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = Constants.threadHeight;

  return (
    <div className="balloon-cell">
      <div
        onClick={clickHandler}
        className={classNames}
        style={{ color: color }}
      >
        <svg
          className="balloon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
        >
          <defs>
            <radialGradient
              id={`balloon-gradient-${id}`}
              cx="40%"
              cy="40%"
              r="50%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="currentColor" />
            </radialGradient>
          </defs>

          <rect
            x={balloonWidth / 2}
            y={balloonHeight}
            width="1"
            height={threadHeight}
            fill="currentColor"
          />
          <polygon
            points={`${balloonWidth / 2},${balloonHeight - 3} ${balloonWidth / 2 + 8
              },${balloonHeight + 5} ${balloonWidth / 2 - 8},${balloonHeight + 5
              }`}
            fill="currentColor"
          />
          <ellipse
            cx={balloonWidth / 2}
            cy={balloonHeight / 2}
            rx={balloonWidth / 2}
            ry={balloonHeight / 2}
            fill={`url(#balloon-gradient-${id})`}
            filter={`url(#balloon-shadow-${id})`}
          />
        </svg>
      </div>
    </div>
  );
};