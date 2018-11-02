import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import OptionsBar from './OptionsBar'
import BiggyPiggyBox from "./BiggyPiggyBox"
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: '',
      greasedOnly: false,
    }
  }

  handleSortChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  handleGreasedOnlyChange = (event) => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
  }

  filterGreased(hogs) {
    if (this.state.greasedOnly) {
      return hogs.filter( hog => {
        return hog.greased === true
      })
    } else {
      return hogs
    }
  }

  byName(a,b) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }

  sortHogs(hogs) {
    if (this.state.sortBy === 'name') {
      return hogs.sort(this.byName)
    } else if (this.state.sortBy === 'weight') {
      return hogs.sort( (a, b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    } else {
      return hogs
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <OptionsBar
          handleSortChange={this.handleSortChange}
          handleGreasedOnlyChange={this.handleGreasedOnlyChange} />
  		<BiggyPiggyBox
          hogs={this.sortHogs(this.filterGreased(hogs))}/>
      </div>
    )
  }
}

export default App;
