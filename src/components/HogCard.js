import React from 'react'

class HogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayInfo: false
    }
  }

  handleClick = () => {
    this.setState({
      displayInfo: !this.state.displayInfo
    })
  }


  render() {
    const {name, specialty, greased, 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water':weight, 'highest medal achieved':achieved} = this.props.hog

    return(
      <div onClick={this.handleClick}>
        <h2>{ name }</h2>
        <img src={require(`../hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`)}/>
        {this.state.displayInfo
          ?
          <div>
            <div> specialty: { specialty } </div>
            <div> greased: { greased } </div>
            <div> weight: { weight } </div>
            <div> achieved: { achieved } </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default HogCard
