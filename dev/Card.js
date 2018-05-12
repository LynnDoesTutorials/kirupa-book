import React from 'react';
import createReactClass from 'create-react-class';

import Square from './Square';
import Label from './Label';

const Card = createReactClass({
  render: function () {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: '#FFF',
      WebKitFilter: 'drop-shadow(0px 0px 5px #666',
      filter: 'drop-shadow(0px 0px 5px #666'
    }
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  }
});
export default Card;