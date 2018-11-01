import React, { Component } from 'react';

export default class Tile extends Component {

  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
    }
  }

  renderDetails = () => {
    return (
      <div>
        <p>{this.props.datum.specialty}</p>
        <p>{this.props.datum.greased}</p>
        <p>{this.props.datum['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>{this.props.datum['highest medal achieved']}</p>
      </div>
    )
  }

  setClicked = () => {
    this.setState({
      isClicked: !this.state.isClicked
      //could be written as a function because it DEPENDS on its previous state
    })
  }

  convertHogName = (hogName) => {
    return `${hogName.toLowerCase().split(' ').join('_')}.jpg`
  }



  render(){
    const fileName = this.convertHogName(this.props.datum.name)
    const imgSrc = require(`../hog-imgs/${fileName}`)
    console.log(imgSrc)
    console.log(this.props)
    return(
      <div className="ui eight wide column" onClick={this.setClicked}>
        <h1>{this.props.datum.name}</h1>
        <img src={imgSrc} />
        {this.state.isClicked ? this.renderDetails() : null}
      </div>
    )
  }
}
