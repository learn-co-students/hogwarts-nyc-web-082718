import React, { Component } from 'react'
import HogCard from './HogCard'

export default class CardContainer extends Component {
  render() {
    return (
      <div className="card-container ui grid container">
      {this.props.hogs.map(hog => <HogCard hog={hog} />)}
      </div>
    )
  }
}
