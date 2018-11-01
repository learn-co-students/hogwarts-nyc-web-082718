import React, { Component } from 'react';
import hogs from '../porkers_data';
import SearchBox from './SearchBox'
import TileContainer from './TileContainer'

export default class Container extends Component {
  state = {
    filtered: false,
    sortedByName: false,
    sortedByWeight: false,
    hogs: hogs,
  }

  filterToggle = () => {
    this.setState({
      filtered: !this.state.filtered,
    })
  }

  sortByNameToggle = () => {
    this.setState({
      sortedByName: !this.state.sortedByName,
    })
  }

  sortByWeightToggle = () => {
    this.setState({
      sortedByWeight: !this.state.sortedByWeight,
    })
  }

  processedHogs = () => {
    let pork = this.state.hogs.slice();

    if (this.state.filtered) {
      pork = pork.filter(hog => hog.greased);
    }
    if (this.state.sortedByName) {
      pork.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    if (this.state.sortedByWeight) {
      pork.sort((a,b) => a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]);
    }

    return pork;
  }

  render() {
    return(
      <div>
        <SearchBox
          filterToggle={this.filterToggle}
          sortByNameToggle={this.sortByNameToggle}
          sortByWeightToggle={this.sortByWeightToggle}
        />
        <TileContainer hogs={this.processedHogs()} />
      </div>
    )
  }
}
