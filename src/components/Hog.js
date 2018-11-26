import React, {Component} from 'react'

export default class Hog extends Component {

  getImage = hogName => {
    let formattedName = hogName.split(' ').join('_').toLowerCase()
    let pigPics = require (`../hog-imgs/${formattedName}.jpg`)
    return pigPics
  }


  render() {
    return (
      <div className="ui card eight wide column ">
        <div className="image" id={this.props.id}>
          <img src={this.getImage(this.props.name)}  atl="hogPic" />
        </div>
        <div>
          <h2 className="header">{this.props.name}</h2>
        </div>
      </div>
    )
  }
}
