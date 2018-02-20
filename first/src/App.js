import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          BLANKET CHILD
          <Child blanket='500 thread count royalty blanket'/>
        </p>
      </div>
    );
  }
}

export default App;
