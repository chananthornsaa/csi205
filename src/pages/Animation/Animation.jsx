import { useState, useEffect, useRef } from 'react';
import './Animation.css';

import basketImg from '../../assets/Animation/basket.jpg';
import footballImg from '../../assets/Animation/football.png';
import volleyImg from '../../assets/Animation/volley.png';
import meImg from '../../assets/Animation/me.jpg';
import cartoonImg from '../../assets/Animation/cartoon.jpg';
import fieldImg from '../../assets/Animation/field.jpg';

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
    setRunning(r => !r);
  };

  const calculate = () => {
    setX((prevX) => {
      let newX = prevX;
      if (goRight.current) {
        newX = prevX + vx;
        if (newX >= maxLeft) goRight.current = false;
      } else {
        newX = prevX - vx;
        if (newX <= 0) goRight.current = true;
      }
      return newX;
    });

    setY((prevY) => {
      let newY = prevY;
      if (goDown.current) {
        newY = prevY + vy;
        if (newY >= maxTop) goDown.current = false;
      } else {
        newY = prevY - vy;
        if (newY <= 0) goDown.current = true;
      }
      return newY;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (running) calculate();
    }, 25);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        runClicked();
      }
      if (e.key >= '0' && e.key <= '5') {
        setSelectedObject(parseInt(e.key, 10));
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectObject = (num) => {
    setSelectedObject(num);
  };

  const getBackgroundImage = () => {
    switch (selectedObject) {
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
      <div
        className="anim-field"
        style={{
          width: `${fieldWidth}px`,
          height: `${fieldHeight}px`,
          backgroundImage: `url(${fieldImg})`,
          backgroundSize: 'cover',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="anim-ball"
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: `${diameter}px`,
            height: `${diameter}px`,
            borderRadius: '50%',
            backgroundImage: getBackgroundImage(),
            backgroundSize: 'cover'
          }}
        />
      </div>

      <div className="anim-control d-flex justify-content-between mt-3">
        <button className="btn btn-success" onClick={runClicked}>
          <i className={`bi bi-${running ? 'pause' : 'play'}`}></i>
          {running ? ' PAUSE' : ' RUN'}
        </button>

        <div>
          <button className={`btn ${selectedObject === 0 ? 'btn-secondary' : 'btn-outline-secondary'} me-1`} onClick={() => selectObject(0)}>NONE</button>
          <button className={`btn ${selectedObject === 1 ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => selectObject(1)}>BASKETBALL</button>
          <button className={`btn ${selectedObject === 2 ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => selectObject(2)}>FOOTBALL</button>
          <button className={`btn ${selectedObject === 3 ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => selectObject(3)}>VOLLEYBALL</button>
          <button className={`btn ${selectedObject === 4 ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => selectObject(4)}>HUMAN</button>
          <button className={`btn ${selectedObject === 5 ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => selectObject(5)}>CARTOON</button>
        </div>
      </div>
    </div>
  );
}

export default Animation;