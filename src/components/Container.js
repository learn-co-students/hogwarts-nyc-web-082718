import React, { Component } from 'react';
import Tile from './Tile'


export default class Container extends Component {

  state = {
    isGreasy: '',
  }

  weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  sortPigs = (event) => {
    if (event.target.value === 'Weight') {
      this.props.pigs.sort((currPig, nextPig) => currPig[this.weight] - nextPig[this.weight])
      this.setState({
        sortBy: 'Weight'
      })
    } else if (event.target.value === 'Name') {
      this.props.pigs.sort((currPig, nextPig) => {
        if (currPig.name > nextPig.name) {
          return 1
        }
        if (nextPig.name > currPig.name) {
          return -1
        }
        return 0
      })
      this.setState({
        sortBy: 'Name'
      })
    }
  }

  renderGreasyPigs = () => {
    return this.props.pigs.filter(pig => {
      return pig.greased
    })
  }

  setGreasiness = () => {
    this.setState({
      isGreasy: !this.state.isGreasy
    })
  }

  renderEachPig = (hogArray) => {
    // console.log(this.props);
    return hogArray.map(pig => {
      return <Tile key={pig.name} datum={pig} />
    })
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <select onChange={this.sortPigs}>
          <option value=''>Sort</option>
          <option value='Name'>Name</option>
          <option value='Weight'>Weight</option>
        </select>
        <span>
          <p>Filter by greasiness</p>
        </span>
        <input type='checkbox' onChange={this.setGreasiness}></input>
        <hr></hr>
        <div className="ui grid container">
          {this.state.isGreasy ? this.renderEachPig(this.renderGreasyPigs()): this.renderEachPig(this.props.pigs)}
        </div>
      </div>
    )
  }
}
