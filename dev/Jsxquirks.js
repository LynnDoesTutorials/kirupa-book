import React from 'react';
import createReactClass from 'create-react-class';

const Jsxquirks = createReactClass({
  render: function () {
    const simpleStyle = {
      fontFamily: 'Bookman',
      height: 150,
      padding: 25,
      borderStyle: 'solid',
      borderWidth: 5,
      backgroundColor: this.props.color
    }
    return (
      <div className='slideIn' style={simpleStyle}>
        <p className='emphasis'>Babadook!</p>
      </div>
    );
  }
});

export default Jsxquirks;