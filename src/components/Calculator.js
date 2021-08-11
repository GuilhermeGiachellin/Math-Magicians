/* eslint-disable no-unused-vars */
import React from 'react';
import CalcButtons from './Button.js';

/* eslint-disable class-methods-use-this */
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: '0' };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    this.setState({ display: e.target.value });
  }

  render() {
    return (
              <table>
                  <tbody>
              <tr>
                  <td colSpan="4" className="display">{this.state.display}</td>
              </tr>
              <tr>
                  <td><CalcButtons number="AC"/></td>
                  <td><CalcButtons number="+/-"/></td>
                  <td><CalcButtons number="%"/></td>
                  <td className="orange"><CalcButtons number="÷"/></td>
              </tr>
              <tr>
                  <td><CalcButtons number="7"/></td>
                  <td><CalcButtons number="8"/></td>
                  <td><CalcButtons number="9"/></td>
                  <td className="orange"><CalcButtons number="X"/></td>
              </tr>
              <tr>
                  <td><CalcButtons number="4"/></td>
                  <td><CalcButtons number="5"/></td>
                  <td><CalcButtons number="6"/></td>
                  <td className="orange"><CalcButtons number="-"/></td>
              </tr>
              <tr>
                  <td><CalcButtons number="1"/></td>
                  <td><CalcButtons number="2"/></td>
                  <td><CalcButtons number="3"/></td>
                  <td className="orange"><CalcButtons number="+"/></td>
              </tr>
              <tr>
                  <td colSpan="2"><CalcButtons number="0"/></td>
                  <td><CalcButtons number="."/></td>
                  <td className="orange"><CalcButtons number="="/></td>
              </tr>
              </tbody>
          </table>
    );
  }
}