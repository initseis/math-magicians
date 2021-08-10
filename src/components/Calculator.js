/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div id="input-number">
          <input type="text" />
        </div>
        <div id="ac">
          <button type="button" className="grey-btn">
            AC
          </button>
        </div>
        <div id="plus-less">
          <button type="button" className="grey-btn">
            +/-
          </button>
        </div>
        <div id="percentage">
          <button type="button" className="grey-btn">
            %
          </button>
        </div>
        <div id="division">
          <button type="button" className="orange-btn">
            ÷
          </button>
        </div>
        <div id="seven">
          <button type="button" className="grey-btn">
            7
          </button>
        </div>
        <div id="eight">
          <button type="button" className="grey-btn">
            8
          </button>
        </div>
        <div id="nine">
          <button type="button" className="grey-btn">
            9
          </button>
        </div>
        <div id="by">
          <button type="button" className="orange-btn">
            x
          </button>
        </div>
        <div id="four">
          <button type="button" className="grey-btn">
            4
          </button>
        </div>
        <div id="five">
          <button type="button" className="grey-btn">
            5
          </button>
        </div>
        <div id="six">
          <button type="button" className="grey-btn">
            6
          </button>
        </div>
        <div id="less">
          <button type="button" className="orange-btn">
            -
          </button>
        </div>
        <div id="one">
          <button type="button" className="grey-btn">
            1
          </button>
        </div>
        <div id="two">
          <button type="button" className="grey-btn">
            2
          </button>
        </div>
        <div id="three">
          <button type="button" className="grey-btn">
            3
          </button>
        </div>
        <div id="plus">
          <button type="button" className="orange-btn">
            +
          </button>
        </div>
        <div id="zero">
          <button type="button" className="grey-btn">
            0
          </button>
        </div>
        <div id="dot">
          <button type="button" className="grey-btn">
            .
          </button>
        </div>
        <div id="equal">
          <button type="button" className="orange-btn">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
