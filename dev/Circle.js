import React from 'react';
import createReactClass from 'create-react-class';

const Circle = createReactClass({
  render: function () {
    const circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100,
    }
    return (
      <div style={circleStyle}>
      </div>
    );
  }
});

export default Circle;