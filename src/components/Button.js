import React from 'react';

export default class CalcButtons extends React.Component {
  render() {
    const { number, clickHandler } = this.props;
    return (
            <button
                className={`btn-${number}`}
                type="button"
                onClick={clickHandler}
                value={number}>
            {number}
            </button>
    );
  }
}