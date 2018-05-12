import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

//const destination = document.querySelector("#container");

const Letter = createReactClass({
  render: function () {
    const letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center"
    };

    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
});

// ReactDOM.render(
//   <div>
//     <h1>From Vowels</h1>
//     <Letter>A</Letter>
//     <Letter>E</Letter>
//     <Letter>I</Letter>
//     <Letter>O</Letter>
//     <Letter>U</Letter>
//     <Letter>Y (sometimes)</Letter>
//   </div>,
//   destination
// );

export default Letter;