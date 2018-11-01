import React, { Component } from 'react'

export default class CardFront extends Component {
  slugify = (string) => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "_")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
  }

  // slugifyName = () => {
  //   // debugger
  //   this.slugify(this.props.hog.name)
  // }

  render() {
    // debugger
    return (
      <div className='card-front' style={{backgroundImage: `url(${this.props.image})`}}>
        <h3 id='hog-name'>{this.props.hog.name}</h3>
      </div>
    )
  }
}
