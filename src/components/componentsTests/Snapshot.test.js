/* eslint-disable no-unused-vars */
import TestRenderer from 'react-test-renderer';
import CalcButtons from '../Button.js';
import Calculator from '../Calculator.js';
import Quote from '../Quote.js';
import Home from '../Home.js';

describe('Button', () => {
  it('Renders the Button', () => {
    const button = TestRenderer.create(
        <CalcButtons />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});

describe('Calculator', () => {
  it('Renders the Calculator', () => {
    const calculator = TestRenderer.create(
        <Calculator />,
    ).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Quote', () => {
  it('Renders the Quote', () => {
    const quote = TestRenderer.create(
    <Quote />,
    ).toJSON();
    expect(quote).toMatchSnapshot();
  });
});

describe('Home', () => {
  it('Renders the Home', () => {
    const home = TestRenderer.create(
        <Home />,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});