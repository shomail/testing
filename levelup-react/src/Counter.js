import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button data-testid="counter-btn">{count}</button>
      </div>
    );
  }
}
