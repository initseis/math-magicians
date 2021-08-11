/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="input-number">
          <input type="text" />
        </div>
        <div className="ac">
          <button type="button" className="grey-btn">
            AC
          </button>
        </div>
        <div className="plus-less">
          <button type="button" className="grey-btn">
            +/-
          </button>
        </div>
        <div className="percentage">
          <button type="button" className="grey-btn">
            %
          </button>
        </div>
        <div className="division">
          <button type="button" className="orange-btn">
            ÷
          </button>
        </div>
        <div className="seven">
          <button type="button" className="grey-btn">
            7
          </button>
        </div>
        <div className="eight">
          <button type="button" className="grey-btn">
            8
          </button>
        </div>
        <div className="nine">
          <button type="button" className="grey-btn">
            9
          </button>
        </div>
        <div className="by">
          <button type="button" className="orange-btn">
            x
          </button>
        </div>
        <div className="four">
          <button type="button" className="grey-btn">
            4
          </button>
        </div>
        <div className="five">
          <button type="button" className="grey-btn">
            5
          </button>
        </div>
        <div className="six">
          <button type="button" className="grey-btn">
            6
          </button>
        </div>
        <div className="less">
          <button type="button" className="orange-btn">
            -
          </button>
        </div>
        <div className="one">
          <button type="button" className="grey-btn">
            1
          </button>
        </div>
        <div className="two">
          <button type="button" className="grey-btn">
            2
          </button>
        </div>
        <div className="three">
          <button type="button" className="grey-btn">
            3
          </button>
        </div>
        <div className="plus">
          <button type="button" className="orange-btn">
            +
          </button>
        </div>
        <div className="zero">
          <button type="button" className="grey-btn">
            0
          </button>
        </div>
        <div className="dot">
          <button type="button" className="grey-btn">
            .
          </button>
        </div>
        <div className="equal">
          <button type="button" className="orange-btn">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
