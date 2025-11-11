import { useState, useEffect, useRef } from 'react';
import './Animation.css';

import basketImg from '../../assets/Animation/basket.jpg';
import footballImg from '../../assets/Animation/football.png';
import volleyImg from '../../assets/Animation/volley.png';
import meImg from '../../assets/Animation/me.jpg';
import cartoonImg from '../../assets/Animation/cartoon.jpg';

function Animation() {
  const fieldWidth = 750;
  const fieldHeight = 400;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [selectedObject, setSelectedObject] = useState(0);
  
  const goRight = useRef(true);
  const goDown = useRef(true);

  const runClicked = () => {
    setRunning(!running);
  };

  const calculate = () => {
    setX(prevX => {
      let newX = prevX;
      if (goRight.current) {
        newX = prevX + vx;
        if (newX >= maxLeft) {
          goRight.current = false;
        }
      } else {
        newX = prevX - vx;
        if (newX <= 0) {
          goRight.current = true;
        }
      }
      return newX;
    });

    setY(prevY => {
      let newY = prevY;
      if (goDown.current) {
        newY = prevY + vy;
        if (newY >= maxTop) {
          goDown.current = false;
        }
      } else {
        newY = prevY - vy;
        if (newY <= 0) {
          goDown.current = true;
        }
      }
      return newY;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        runClicked();
      }
      if (event.key >= '0' && event.key <= '5') {
        selectObject(parseInt(event.key));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [running]);

  const selectObject = (num) => {
    setSelectedObject(num);
  };

  const getBackgroundImage = () => {
    switch(selectedObject) {
      case 1: return `url(${basketImg})`;
      case 2: return `url(${footballImg})`;
      case 3: return `url(${volleyImg})`;
      case 4: return `url(${meImg})`;
      case 5: return `url(${cartoonImg})`;
      default: return '';
    }
  };

  return (
    <div className="anim-container">
      <div className="anim-field">
        <div 
          className="anim-ball"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            width: `${diameter}px`,
            height: `${diameter}px`,
            backgroundImage: getBackgroundImage(),
            backgroundSize: 'cover'
          }}
        />
      </div>
      <div className="anim-control d-flex justify-content-between">
        <button 
          className="btn btn-success" 
          onClick={runClicked}
        >
          <i className={`bi bi-${running ? 'pause' : 'play'}`}></i>
          {running ? ' PAUSE' : ' RUN'}
        </button>

        <div>
          <button 
            className={`btn ${selectedObject === 0 ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => selectObject(0)}
          >
            NONE
          </button>
          <button 
            className={`btn ${selectedObject === 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => selectObject(1)}
          >
            BASKETBALL
          </button>
          <button 
            className={`btn ${selectedObject === 2 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => selectObject(2)}
          >
            FOOTBALL
          </button>
          <button 
            className={`btn ${selectedObject === 3 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => selectObject(3)}
          >
            VOLLEYBALL
          </button>
          <button 
            className={`btn ${selectedObject === 4 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => selectObject(4)}
          >
            HUMAN
          </button>
          <button 
            className={`btn ${selectedObject === 5 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => selectObject(5)}
          >
            CARTOON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Animation;