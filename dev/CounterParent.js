import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import LightningCounterDisplay from './LightningCounterDisplay';

const Counter = createReactClass({
  render: function () {
    const textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };
    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
});

const CounterParent = createReactClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  increase: function (e) {
    let currentCount = this.state.count;

    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }

    this.setState({
      count: currentCount
    });
  },
  decrease: function (e) {
    let currentCount = this.state.count;

    if (e.shiftKey) {
      currentCount -= 10;
    } else {
      currentCount -= 1;
    }

    this.setState({
      count: currentCount
    });
  },
  render: function () {
    const backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };
    const buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#FFF",
      backgroundColor: "#1313F3",
      fontWeight: "bold",
      lineHeight: "3px",
      margin: ".5em"
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button onClick={this.increase} style={buttonStyle}>+</button>
        <button onClick={this.decrease} style={buttonStyle}>-</button>
      </div>
    );
  }
});

export default CounterParent;