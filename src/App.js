import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  border: 1px solid blue;
`;
const buttonElement = <Button>Hello</Button>;

console.log(styled);
console.log(styled.button);
console.log(Button);
console.log(buttonElement);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {buttonElement}
      </div>
    );
  }
}

export default App;
