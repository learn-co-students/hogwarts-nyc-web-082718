import React, { Component } from 'react'
const worstkey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

export default class View extends Component {


  renderSelectedHog(){
    return (
      <div className="ui card">
        <h1>
        <img className="ui image" src={require(`../hog-imgs/${this.getImagePrefix(this.props.selectedHog.name)}.jpg`)} />
        <p>{this.props.selectedHog.name}</p>
        <p>Specialty: {this.props.selectedHog.specialty}</p>
        <p>Weight Ratio:{this.props.selectedHog[worstkey]}</p>
        <p>Achievement: {this.props.selectedHog[medal]}</p>
        </h1>
      </div>
    )
  }

  getImagePrefix = (name) => {
    let splitname = name.split(" ")
    return splitname.map(word =>{return word.toLowerCase()}).join("_")
  }

  render(){
    return (
      <div>
        {this.props.selectedHog ? this.renderSelectedHog() : null}
      </div>
  )}

}
