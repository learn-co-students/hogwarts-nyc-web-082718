import React, { Component } from 'react';
import hogs from '../porkers_data';
import Hog from './Hog';

class Hogs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hogData: hogs,
    }
  }

  sortByName = () => {
    let sortedHogs = this.state.hogData.sort((a,b) => a['name'].localeCompare(b['name']))
    this.setState({
      hogData: sortedHogs.slice()
    })
  }

  sortByWeight = () => {
    let sortedHogs = this.state.hogData.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - (b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))
    this.setState({
      hogData: sortedHogs
    })
  }

  sortBy = (event) => {
    if (event.target.value === 'name') {
      this.sortByName()
    } else if (event.target.value === 'weight') {
      this.sortByWeight()
    }
  }

  sortByGreased = (event) => {
    if (event.target.value === 'greased') {
      let greased = this.state.hogData.filter(hog => hog.greased === true)
      this.setState({
        hogData: greased
      })
    } else {
      this.setState({
        hogData: hogs
      })
    }
  }

  createTiles = () => {
    return this.state.hogData.map(pig => {
      return <Hog
        key={pig.name}
        name={pig.name}
        specialty={pig.specialty}
        greased={pig.greased}
        weight={pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
        medal={pig['highest medal achieved']}
        clicked={false}
      />
    })
  }

  render() {
    return(
      <div>
        <div>
          <br />
          <br />
          <select onChange={this.sortBy}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <br />
          <br />
          <select onChange={this.sortByGreased}>
            <option value="all">All Hogs</option>
            <option value="greased">Greased</option>
          </select>
        </div>
        <br />
        <br />
        <div className="ui grid container" >
          {this.createTiles()}
        </div>
      </div>
    )
  }
}

export default Hogs;
