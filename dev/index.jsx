import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

import Square from './Square';
import Label from './Label';
import Card from './Card';
import Jsxquirks from './Jsxquirks';
import LightningCounterDisplay from './LightningCounterDisplay';
//import Circle from './Circle';
import showCircle from './showCircle';


const destination = document.querySelector("#container");

const HelloWorld = createReactClass({
  render: function () {
    return (
      <p>Hello, {this.props.greetTarget}</p>
    );
  }
});

const Buttonify = createReactClass({
  render: function () {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
});


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
      textAlign: "center",
      backgroundColor: this.props.bgcolor,
    };

    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
});



ReactDOM.render(
  <div>
    <div>This is before the circle</div>
    <div>
      {showCircle()}
    </div>
    <div>
      <LightningCounterDisplay></LightningCounterDisplay>
    </div>
    <div>
      <Jsxquirks>Saying quirks</Jsxquirks>
    </div>
    <div>
      <Card color='#FFA737'>
      </Card>
    </div>
    <h1>From Vowels</h1>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#AE99FF">I</Letter>
    <Letter bgcolor="#FFD52E">O</Letter>
    <Letter bgcolor="#49DD8E">U</Letter>
    <Letter bgcolor="#69C4EE">Y (sometimes)</Letter>
    <div>
      <h1>Lynn, you are amazing!</h1>
      <HelloWorld greetTarget="Batman" />
      <HelloWorld greetTarget="Back to Beginning" />
      <HelloWorld greetTarget="Another Item In List" />
      <HelloWorld />
      <div>
        <Buttonify behavior="Submit">SEND DATA</Buttonify>
      </div>
    </div>
  </div>,
  destination
);


// ReactDOM.render(
//   <div>
//     <h1>Lynn, you are amazing!</h1>
//     <HelloWorld greetTarget="Batman" />
//     <HelloWorld greetTarget="Back to Beginning" />
//     <HelloWorld greetTarget="Another Item In List" />
//     <HelloWorld />
//     <div>
//       <Buttonify behavior="Submit">SEND DATA</Buttonify>
//     </div>
//<div>
//<Letter />
// </div>
//   </div >,
//   destination
// );