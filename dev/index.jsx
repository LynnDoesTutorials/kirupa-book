import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

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

ReactDOM.render(
  <div>
    <h1>Lynn, you are amazing!</h1>
    <HelloWorld greetTarget="Batman" />
    <HelloWorld greetTarget="Back to Beginning" />
    <HelloWorld greetTarget="Another Item In List" />
    <HelloWorld />
    <div>
      <Buttonify behavior="Submit">SEND DATA</Buttonify>
    </div>
  </div>,
  destination
);