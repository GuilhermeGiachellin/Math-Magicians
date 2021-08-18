import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcButtons from '../Button.js';

describe('<CalcButtons /> tests', () => {
    const click = () => {};
    const div = document.createElement('div');
  
    test('Renders', () => {
      ReactDOM.render(<CalcButtons number="AC" clickHandler={() => click()} />, div);
      expect
    });  
  });