import React from 'react'
let hogInfo

export default class HogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      image: this.props.image,
      clicked: this.props.clicked
    }
  }

  clickHandler = (event) => {
    console.log(this.state.clicked);
    this.setState({
      clicked: !this.state.clicked
    })
  }

  unClicked = () => {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} />
      </div>
    )
  }

  clicked = () => {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.specialty}</p>
        <p>{this.props.info1} : {this.props.info2}</p>
        <p>{this.props.info3} : {this.props.info4}</p>
        <img src={this.props.image} />
      </div>
    )
  }


  render() {
    return (
      <div onClick={this.clickHandler}>
          {this.state.clicked ? this.clicked() : this.unClicked()}
      </div>
    )
  }
}
