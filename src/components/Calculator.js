/* eslint-disable no-unused-vars */
import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
  }

  handleButton(event) {
    const obj = calculate(this.state, event.target.innerText);
    this.setState(obj);
    if (obj.total === null && obj.next === null && obj.operation === null) {
      document.querySelector('input').value = '';
    }
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="grid-container">
        <div className="input-number">
          <input
            type="text"
            readOnly="readonly"
            value={next === null ? total : next}
          />
        </div>
        <div className="ac">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            AC
          </button>
        </div>
        <div className="plus-less">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            +/-
          </button>
        </div>
        <div className="percentage">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            %
          </button>
        </div>
        <div className="division">
          <button
            type="button"
            className="orange-btn"
            onClick={this.handleButton}
          >
            ÷
          </button>
        </div>
        <div className="seven">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            7
          </button>
        </div>
        <div className="eight">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            8
          </button>
        </div>
        <div className="nine">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            9
          </button>
        </div>
        <div className="by">
          <button
            type="button"
            className="orange-btn"
            onClick={this.handleButton}
          >
            x
          </button>
        </div>
        <div className="four">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            4
          </button>
        </div>
        <div className="five">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            5
          </button>
        </div>
        <div className="six">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            6
          </button>
        </div>
        <div className="less">
          <button
            type="button"
            className="orange-btn"
            onClick={this.handleButton}
          >
            -
          </button>
        </div>
        <div className="one">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            1
          </button>
        </div>
        <div className="two">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            2
          </button>
        </div>
        <div className="three">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            3
          </button>
        </div>
        <div className="plus">
          <button
            type="button"
            className="orange-btn"
            onClick={this.handleButton}
          >
            +
          </button>
        </div>
        <div className="zero">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            0
          </button>
        </div>
        <div className="dot">
          <button
            type="button"
            className="grey-btn"
            onClick={this.handleButton}
          >
            .
          </button>
        </div>
        <div className="equal">
          <button
            type="button"
            className="orange-btn"
            onClick={this.handleButton}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
