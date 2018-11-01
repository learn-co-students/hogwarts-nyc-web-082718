import React, { Component } from 'react';

export default class TileFront extends Component {

  parseName = () => {
    return this.props.hog.name.toLowerCase().replace(/ /g, '_')
  }

  render() {
    let url = `../hog-imgs/${this.parseName()}.jpg`;
    // debugger
    const style = {
      backgroundImage: `url('${url}')`
    }
    return (
      <div className="tile-front" style={{backgroundImage: `url(${this.props.image})`}}>
      <h4>{this.props.hog.name}</h4>
      </div>
    )
  }
}


// https://images-na.ssl-images-amazon.com/images/I/71XW7n99efL._SX425_.jpg
