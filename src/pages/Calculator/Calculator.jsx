import { useState } from 'react';
import './Calculator.css'

function Calculator() {
  const [screen, setScreen] = useState('0');
  const [state, setState] = useState('S1');
  const [lastOperator, setLastOperator] = useState('');
  const [firstOperand, setFirstOperand] = useState(0);

  const numberClicked = (number) => {
    if (state === 'S1' || state === 'S3') {
      setScreen(number.toString());
      setState('S2');
    } else if (state === 'S2') {
      if (screen.length < 9) {
        setScreen(screen + number.toString());
      }
    }
  };

  const operatorClicked = (operator) => {
    setFirstOperand(Number(screen));
    setLastOperator(operator);
    setState('S3');
  };

  const equalClicked = () => {
    if (state === 'S2' || state === 'S3') {
      const secondValue = Number(screen);
      let result = firstOperand;

      if (lastOperator === '+') {
        result = firstOperand + secondValue;
      } else if (lastOperator === '-') {
        result = firstOperand - secondValue;
      }

      setScreen(result.toString());
      setFirstOperand(0);
      setLastOperator('');
      setState('S1');
    }
  };

  const ceClicked = () => {
    setScreen('0');
    setState('S1');
    setLastOperator('');
    setFirstOperand(0);
  };

  const getOperatorClass = (operator) => {
    return lastOperator === operator ? 'calc-btn calc-btn-yellow calc-btn-active-yellow' : 'calc-btn calc-btn-green calc-btn-active-yellow';
  };

  return (
    <div className="calculator-page">
      <div className="cal-container">
        <div>
          <div className="cal-screen">{screen}</div>
        </div>
        <div>
          <button className="calc-btn calc-btn-green" disabled>MC</button>
          <button className="calc-btn calc-btn-green" disabled>MR</button>
          <button className="calc-btn calc-btn-green" disabled>M+</button>
          <button className="calc-btn calc-btn-green" disabled>M&minus;</button>
          <button className="calc-btn calc-btn-red calc-btn-active-red" onClick={ceClicked}>CE</button>
        </div>
        <div>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(7)}>7</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(8)}>8</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(9)}>9</button>
          <button className="calc-btn calc-btn-green" disabled>&divide;</button>
          <button className="calc-btn calc-btn-green" disabled>&radic;</button>
        </div>
        <div>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(4)}>4</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(5)}>5</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(6)}>6</button>
          <button className="calc-btn calc-btn-green" disabled>&times;</button>
          <button className="calc-btn calc-btn-green" disabled>%</button>
        </div>
        <div>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(1)}>1</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(2)}>2</button>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(3)}>3</button>
          <button className={getOperatorClass('-')} onClick={() => operatorClicked('-')}>&minus;</button>
          <button className="calc-btn calc-btn-green" disabled>1/x</button>
        </div>
        <div>
          <button className="calc-btn calc-btn-blue calc-btn-active-yellow" onClick={() => numberClicked(0)}>0</button>
          <button className="calc-btn calc-btn-blue" disabled>.</button>
          <button className="calc-btn calc-btn-blue" disabled>
            +/-
          </button>
          <button className={getOperatorClass('+')} onClick={() => operatorClicked('+')}>+</button>
          <button className="calc-btn calc-btn-green calc-btn-active-yellow" onClick={equalClicked}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator