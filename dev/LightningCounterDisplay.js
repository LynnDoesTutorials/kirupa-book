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
        <h1>{this.state.strikes}</h1>
      </div>
    );
  }
});

const LightningCounterDisplay = createReactClass({
  render: function () {
    const commonStyle = {
      margin: 0,
      padding: 0
    }

    const divStyle = {
      width: 250,
      textAlign: 'center',
      backgroundColor: '#A0A',
      padding: 40,
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: 10
    };

    const textStyles = {
      emphasis: {
        fontSize: 38
      },
      smallEmphasis: {
      },
      small: {
        fontSize: 17,
        opacity: 0.5
      }
    }

    return (
      <div style={divStyle}>
        <LightningCounter />
        <h2 style={textStyles.smallEmphasis}>Where is this?</h2>
        <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
        <p style={textStyles.small}>(since you loaded this example)</p>
      </div>
    );
  }
});
export default LightningCounterDisplay;