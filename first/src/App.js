import React, { Component } from 'react';
import './App.css';
import Second from './components/02';
import Third from './components/03';
import Fourth from './components/04';
import Fifth from './components/05';
import Sixth from './components/06';
import Seventh from './components/07';
import Eighth from './components/08';
import Ninth from './components/09';


class App extends Component {
  render() {
    return (
      <div className="App">
          BLANKET CHILDREN
          <Second blanket='500 thread count royalty blanket'/>
          <Third />
          <Fourth />
          <Fifth />
          <Sixth />
          <Seventh />
          <Eighth />
          <Ninth />
      </div>
    );
  }
}

export default App;
