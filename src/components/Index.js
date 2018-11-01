import React, { Component } from 'react'
import Tile from './Tile.js'


export default class Index extends Component {
  constructor(props){
    super(props)
  }

  getImagePrefix = (name) => {
    let splitname = name.split(" ")
    return splitname.map(word =>{return word.toLowerCase()}).join("_")
  }

  renderHogs = () => {
      return(
        this.props.displayedHogs.map(hog => {
          return <Tile hog={hog} selectHog={this.props.selectHog} prefix={this.getImagePrefix(hog.name)}/>
        }))
  }

  render(){
    return (<div className="ui cards">
      {this.renderHogs()}
    </div>
  )}
}
