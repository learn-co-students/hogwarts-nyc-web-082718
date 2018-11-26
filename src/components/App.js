import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'


class App extends Component {
  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          < Nav/>
        </div>
        <div className="sixteen wide column centered">
          < HogContainer/>
        </div>
      </div>
    )
  }
}

export default App;
