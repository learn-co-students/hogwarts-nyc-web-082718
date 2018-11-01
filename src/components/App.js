import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Index from './Index.js'
import View from './View.js'
import Filter from './Filter.js'
const worstkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

  constructor(){
    super()
      this.state = {
        displayedHogs: hogs,
        selectedHog: null
      }
  }

  sortByPorkRatio = (event) => {
    return null
  }

  porkRatio = (event) => {
    this.setState({
      displayedHogs: hogs.filter(hog => hog[worstkey] >= Number(event.target.value))
    })
  }

  greasedHogs = (event) => {
    if(event.target.checked){
      this.setState({
        displayedHogs: hogs.filter(hog => hog.greased)
      })
    }
    else{
      this.setState({
        displayedHogs: hogs
      })
    }
  }

  namedHogs = (event) => {
      this.setState({
        displayedHogs: hogs.filter(hog => hog.name.toLowerCase().includes(event.target.value.toLowerCase()))
      })
  }

  selectHog = (name) => {
    this.setState({
      selectedHog: hogs.find(hog => hog.name === name)
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter greasedHogs={this.greasedHogs} namedHogs={this.namedHogs} porkRatio={this.porkRatio}/>
        {this.state.selectedHog ? <View selectedHog={this.state.selectedHog}/> : null}
        <Index displayedHogs={this.state.displayedHogs} selectHog={this.selectHog}/>
      </div>
    )
  }
}

export default App;
