import React from 'react'
import HogCard from './HogCard'

class Hogs extends React.Component {

  hogsMapToCard = () => {
    return this.props.hogs.map(hog => {
      return <HogCard hog={hog}/>
    })
  }

  render() {
    return(
      <div>
        {this.hogsMapToCard()}
      </div>
    )
  }
}

export default Hogs
