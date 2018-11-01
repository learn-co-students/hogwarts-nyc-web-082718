import React, { Component } from 'react'
const worstkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

export default class Tile extends Component {


  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.selectHog(this.props.hog.name)
  }

  render(){
    return (
      <div className="ui card" onClick={this.handleClick}>
        <div className="content" >
          <img className="ui image" src={require(`../hog-imgs/${this.props.prefix}.jpg`)} />
          <p className="normalText" ><h3>{this.props.hog.name}</h3></p>
          <p className="hoggyText" >Specialty: {this.props.hog.specialty}</p>
          <p className="normalText" >Weight Ratio:{this.props.hog[worstkey]}</p>
          <p className="achievementText" >Achievement: {this.props.hog[medal]}</p>
        </div>
      </div>
  )}

}
