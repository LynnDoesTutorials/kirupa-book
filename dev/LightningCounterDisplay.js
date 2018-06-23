import React from 'react';
import createReactClass from 'create-react-class';

const LightningCounter = createReactClass({
  getInitialState: function () {
    return {
      strikes: 0
    };
  },
  timerTick: function () {
    this.setState({
      strikes: this.state.strikes + 100
    });
  },
  componentDidMount: function () {
    setInterval(this.timerTick, 1000);
  },
  render: function () {
    return (
      <div>
        <h1>Hello from Lightning Counter</h1>
        <h1>{this.state.strikes}</h1>
        <h2>LIGHTNING STRIKES</h2>
        <h2>WORLDWIDE</h2>
        <p>(since you loaded this example)</p>
      </div>
    );
  }
});

const LightningCounterDisplay = createReactClass({
  render: function () {

    const divStyle = {
      width: 250,
      textAlign: 'center',
      backgroundColor: '#A0A',
      padding: 40,
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: 10
    };

    return (
      <div style={divStyle}>
        <LightningCounter />
      </div>
    );
  }
});
export default LightningCounterDisplay;