import React, { Component } from 'react';
import Tile from './Tile';

export default class TileContainer extends Component {
  render() {
    return(
      <div className="tile-container ui grid container">
        {this.props.hogs.map(hog => <Tile hog={hog} />)}

      </div>
    )
  }
}
