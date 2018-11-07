import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import HogSort from './HogSort'

class App extends Component {
  state = {
    clicked: null,
    greasedOnly: false,
    sortType: "Name"
  }

  toggleGreased = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    });
  } // we can pass this method as a prop to the filter component

  filterGreased = (hogs) => {
    return this.state.greasedOnly
      ? hogs.filter((hog) => {
        return hog.greased;
      })
      : hogs;
  }

  setSortType = (event) => {
    this.setState({sortType: event.target.value})
  }

  sortHogs = hogs => {
    let filteredHogs = this.filterGreased(hogs)
    if (this.state.sortType === "Name") {
      return filteredHogs.sort((a, b) => a.name.localeCompare(b.name.localeCompare))
    } else if (this.state.sortType === "Weight") {
      return filteredHogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']);
    } else {
      return filteredHogs;
    }
  }

  render() {
    return (<div className="App">
      < Nav/>
      <HogSort toggleGrease={this.toggleGreased} setSortType={this.setSortType}/>
      <HogContainer hogs={this.sortHogs(hogs)}/>
    </div>)
  }
}

export default App;
