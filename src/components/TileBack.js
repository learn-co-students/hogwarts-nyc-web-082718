import React, { Component } from 'react';

export default class TileBack extends Component {

  render() {
    return (
      <div className="tile-back">
        <h3 className="name">{this.props.hog.name}</h3>
        <p>Specializes in {this.props.hog['specialty']}</p>
        <p>Is {this.props.hog['greased'] ? 'greased' : 'not greased'}</p>
        <p>Fridge weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Peaked in {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }
}
