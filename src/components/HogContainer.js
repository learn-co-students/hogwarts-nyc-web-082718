import React from 'react'
import HogCard from './HogCard'

const HogContainer = ({hogs}) => {

  return (
    <div className="ui grid container">
      {hogs.map((hog) => {
        return <HogCard key={hog.name} hog={hog}/>
      })}
    </div>
  )
}//end of functional component

//Notes: pass in the KEY AS A PROP to other components
export default HogContainer;
