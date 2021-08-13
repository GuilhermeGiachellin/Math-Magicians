/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CalcButtons from './Button.js';
import calculate from '../logic/calculate.js';

/* eslint-disable class-methods-use-this */
export default function Calculator() {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const updateOperation = ({ next, total, operation }) => {
    if (total || total === null) {
      obj.total = total;
    }
    if (next || next === null) {
      obj.next = next;
    }
    if (operation || operation === null) {
      obj.operation = operation;
    }
    return obj;
  };

  const clickHandler = (e) => {
    const result = calculate(obj, e.target.value);
    const { next, total, operation } = updateOperation(result);
    setObj({ next, total, operation });
  };

  return (
              <table>
                  <tbody>
              <tr>
                  <td colSpan="4" className="display">{obj.next === null ? obj.total : obj.next}
                  </td>
              </tr>
              <tr>
                  <td><CalcButtons number="AC" clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="+/-" clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="%"clickHandler={clickHandler} /></td>
                  <td className="orange"><CalcButtons number="÷"clickHandler={clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="7"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="8"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="9"clickHandler={clickHandler} /></td>
                  <td className="orange"><CalcButtons number="x"clickHandler={clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="4"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="5"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="6"clickHandler={clickHandler} /></td>
                  <td className="orange"><CalcButtons number="-"clickHandler={clickHandler} /></td>
              </tr>
              <tr>
                  <td><CalcButtons number="1"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="2"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="3"clickHandler={clickHandler} /></td>
                  <td className="orange"><CalcButtons number="+"clickHandler={clickHandler} /></td>
              </tr>
              <tr>
                  <td colSpan="2"><CalcButtons number="0"clickHandler={clickHandler} /></td>
                  <td><CalcButtons number="."clickHandler={clickHandler} /></td>
                  <td className="orange"><CalcButtons number="="clickHandler={clickHandler} /></td>
              </tr>
              </tbody>
          </table>
  );
}
