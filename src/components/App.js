import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import ParentContainer from './ParentContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < ParentContainer />
      </div>
    )
  }
}

export default App;
