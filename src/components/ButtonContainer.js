import React, { Component } from 'react'

export default class ButtonContainer extends Component {
  render() {
    return (
      <div className="button-container">
        <button className="medium ui pink button" onClick={this.props.filterToggle}>Greasy Hogs Only!</button>
        <button className="medium ui pink button" onClick={this.props.nameSortToggle}>Sort Hogs By Name</button>
        <button className="medium ui pink button" onClick={this.props.weightSortToggle}>Sort Hogs By Weight</button>
      </div>
    )
  }
}
