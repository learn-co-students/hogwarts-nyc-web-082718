import React, { Component } from 'react'

export default class OptionsBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <span><strong>Sort:  </strong></span>
        <select name="sort-select" onChange={this.props.handleSortChange}>
          <option value=""></option>
          <option value="name">By Name</option>
          <option value="weight">By Weight</option>
        </select>
        <span><strong>Greased Only:  </strong></span>
        <input type="checkbox" name="greased-only-checkbox" onChange={this.props.handleGreasedOnlyChange}/>
      </div>
    )
  }
}
