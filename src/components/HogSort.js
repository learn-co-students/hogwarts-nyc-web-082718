import React from 'react'
import HogCard from './HogCard'

const HogSort = ({toggleGrease, setSortType}) => {

  return (
    <div className="ui form">
      <form className="inline field">
        <select className="ui dropdown" type="select" onChange={event => setSortType(event)}>
          <option>--Choose Sort--</option>
          <option>Name</option>
          <option>Weight</option>
        </select>
        <div className="ui checkbox toggle" onChange={toggleGrease}>
          <input type="checkbox"/>
          <label>Greased Only?</label>
        </div>
      </form>
    </div>
  )
}//end of functional component
export default HogSort;
