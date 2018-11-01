import React, { Component } from 'react'
import ButtonContainer from './ButtonContainer'
import CardContainer from './CardContainer'
import hogs from '../porkers_data';

export default class ParentContainer extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filter: false,
      sortedByName: false,
      sortedByWeight: false
    }
  }

  filterToggle = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  nameSortToggle = () => {
    this.setState({
      sortedByName: !this.state.sortedByName
    })
  }

  weightSortToggle = () => {
    this.setState({
      sortedByWeight: !this.state.sortedByWeight
    })
  }

  processedHogs = () => {
    let pork = this.state.hogs.slice()
    if (this.state.filter) {
      pork = pork.filter(hog => hog.greased)
    }
    if (this.state.sortedByName) {
      pork.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }
    if (this.state.sortedByWeight) {
      pork.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : 0))
    }
    return pork
  }

  render() {
    return (
      <div>
        <ButtonContainer
        filterToggle={this.filterToggle}
        nameSortToggle={this.nameSortToggle}
        weightSortToggle={this.weightSortToggle}
        />
        <CardContainer hogs={this.processedHogs()}/>
      </div>
    )
  }
}
