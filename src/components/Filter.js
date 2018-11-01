import React, { Component } from 'react'

export default class Filter extends Component {

  render() {
    return(
      <div className="ui centered vertically divided grid">
        <label className="">Greased Hogs Only!</label>
        <input className="" onChange={this.props.greasedHogs} type="checkbox" />
        <label className="">Find That Hog</label>
        <input className="" type="text" onChange={this.props.namedHogs} />
        <label className="">Find By Minimum Pork Ratio</label>
        <input className="" type="number" onChange={this.props.porkRatio} step="0.1"/>
      </div>
    )
  }

}
