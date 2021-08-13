/* eslint-disable no-unused-vars */
import React from 'react';
import CalcButtons from './Button.js';
import calculate from '../logic/calculate.js';

/* eslint-disable class-methods-use-this */
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      currentOp: {
        total: '0',
        next: null,
        operation: null,
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const { currentOp } = this.state;
    this.setState({ total: e.target.value });
    const result = calculate(currentOp, e.target.value);
    this.setState({ currentOp: this.updateOperation(result) });
  };

  updateOperation = ({ next, total, operation }) => {
    const { currentOp } = this.state;
    if (total || total === null) {
      currentOp.total = total;
    }
    if (next || next === null) {
      currentOp.next = next;
    }
    if (operation || operation === null) {
      currentOp.operation = operation;
    }
    return currentOp;
  }

  render() {
    return (
              <table>
                  <tbody>
              <tr>
                  <td colSpan="4" className="display">{this.state.currentOp.next === null ? this.state.currentOp.total : this.state.currentOp.next}</td>
              </tr>
              <tr>
                  <td><CalcButtons number="AC" clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="+/-" clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="%"clickHandler={this.clickHandler} /></td>
                  <td className="orange"><CalcButtons number="÷"clickHandler={this.clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="7"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="8"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="9"clickHandler={this.clickHandler} /></td>
                  <td className="orange"><CalcButtons number="x"clickHandler={this.clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="4"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="5"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="6"clickHandler={this.clickHandler} /></td>
                  <td className="orange"><CalcButtons number="-"clickHandler={this.clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="1"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="2"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="3"clickHandler={this.clickHandler} /></td>
                  <td className="orange"><CalcButtons number="+"clickHandler={this.clickHandler} /></td>
              </tr>
              <tr>
                  <td colSpan="2"><CalcButtons number="0"clickHandler={this.clickHandler} /></td>
                  <td><CalcButtons number="."clickHandler={this.clickHandler} /></td>
                  <td className="orange"><CalcButtons number="="clickHandler={this.clickHandler} /></td>
              </tr>
              </tbody>
          </table>
    );
  }
}