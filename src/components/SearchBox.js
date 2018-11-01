import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.filterToggle}>🐖filter🛢 </button>
        <button onClick={this.props.sortByNameToggle}>🐖sort📛</button>
        <button onClick={this.props.sortByWeightToggle}>🐖sort⚖</button>
      </div>
    )
  }
}
