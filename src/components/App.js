import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogs from './Hogs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs:hogs
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Hogs hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
