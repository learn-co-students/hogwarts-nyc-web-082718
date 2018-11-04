import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
          < Nav />

      </div>
    )
  }
}

export default App;
