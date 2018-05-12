import React from 'react';
import createReactClass from 'create-react-class';

const Label = createReactClass({
  render: function () {
    const labelStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      padding: 13,
      margin: 0
    }
    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
});

export default Label;