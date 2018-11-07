import React, {Component} from 'react'
import HogDetail from './HogDetail'

class HogCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }//end of constructor

  nameFormat = (name) => {
    let format = name.replace(/ /g, '_');
      return format.toLowerCase()
    }

  handleClickDetail = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    console.log(this.props.hog)
    return (
      <div className='ui eight wide column'>
          <h1>{this.props.hog.name}</h1>
            <img src={require(`../hog-imgs/${this.nameFormat(this.props.hog.name)}.jpg`)}/>
          <div>
            <button className='ui basic pink button' onClick={this.handleClickDetail}>Details</button>
          </div>
            {this.state.clicked ? <HogDetail hog={this.props.hog}/> : null }
      </div>
      )
    }//end of render function

}//end of functional component

export default HogCard;
