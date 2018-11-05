import React, { Component } from 'react';
import HogDetails from './HogDetails';

class Hog extends Component {

  constructor(props) {
    super(props)

    this.state = props
  }

  slugify = () => {
    return this.state.name.toLowerCase().split(" ").join("_")
  }

  renderHogDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render () {
    return (
      <div className="ui eight wide column" onClick={this.renderHogDetails}>
        <h1>{this.state.name}</h1>
        <img src={require(`../hog-imgs/${this.slugify()}.jpg`)}/>
        {this.state.clicked ? <HogDetails specialty={this.props.specialty} greased={this.props.greased} weight={this.props.weight} medal={this.props.medal}/> : null}
      </div>
    )
  }
}

export default Hog;
