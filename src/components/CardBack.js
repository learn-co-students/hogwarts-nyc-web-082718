import React, { Component } from 'react'

export default class CardBack extends Component {
  render() {
    return (
      <div className='card-back'>
        <h4>Name: {this.props.hog.name}</h4>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }
}
