/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const handleButton = (event) => {
    if (
      !(
        state.operation
        && (event.target.innerText === '+'
          || event.target.innerText === '-'
          || event.target.innerText === 'x'
          || event.target.innerText === '÷'
          || event.target.innerText === '%')
      )
    ) {
      const obj = calculate(state, event.target.innerText);
      setState(obj);
      if (obj.total === null && obj.next === null && obj.operation === null) {
        document.querySelector('input').value = '';
      }
    }
  };

  return (
    <div className="grid-container">
      <div className="input-number">
        <input
          type="text"
          readOnly="readonly"
          value={state.next === null ? state.total : state.next}
        />
      </div>
      <div className="ac">
        <button type="button" className="grey-btn" onClick={handleButton}>
          AC
        </button>
      </div>
      <div className="plus-less">
        <button type="button" className="grey-btn" onClick={handleButton}>
          +/-
        </button>
      </div>
      <div className="percentage">
        <button type="button" className="grey-btn" onClick={handleButton}>
          %
        </button>
      </div>
      <div className="division">
        <button type="button" className="orange-btn" onClick={handleButton}>
          ÷
        </button>
      </div>
      <div className="seven">
        <button type="button" className="grey-btn" onClick={handleButton}>
          7
        </button>
      </div>
      <div className="eight">
        <button type="button" className="grey-btn" onClick={handleButton}>
          8
        </button>
      </div>
      <div className="nine">
        <button type="button" className="grey-btn" onClick={handleButton}>
          9
        </button>
      </div>
      <div className="by">
        <button type="button" className="orange-btn" onClick={handleButton}>
          x
        </button>
      </div>
      <div className="four">
        <button type="button" className="grey-btn" onClick={handleButton}>
          4
        </button>
      </div>
      <div className="five">
        <button type="button" className="grey-btn" onClick={handleButton}>
          5
        </button>
      </div>
      <div className="six">
        <button type="button" className="grey-btn" onClick={handleButton}>
          6
        </button>
      </div>
      <div className="less">
        <button type="button" className="orange-btn" onClick={handleButton}>
          -
        </button>
      </div>
      <div className="one">
        <button type="button" className="grey-btn" onClick={handleButton}>
          1
        </button>
      </div>
      <div className="two">
        <button type="button" className="grey-btn" onClick={handleButton}>
          2
        </button>
      </div>
      <div className="three">
        <button type="button" className="grey-btn" onClick={handleButton}>
          3
        </button>
      </div>
      <div className="plus">
        <button type="button" className="orange-btn" onClick={handleButton}>
          +
        </button>
      </div>
      <div className="zero">
        <button type="button" className="grey-btn" onClick={handleButton}>
          0
        </button>
      </div>
      <div className="dot">
        <button type="button" className="grey-btn" onClick={handleButton}>
          .
        </button>
      </div>
      <div className="equal">
        <button type="button" className="orange-btn" onClick={handleButton}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
