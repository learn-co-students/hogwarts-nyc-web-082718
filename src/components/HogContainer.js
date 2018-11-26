import React, { Component } from 'react';
import hogs from '../porkers_data';
import Hog from './Hog'


export default class HogContainer extends Component {

 getTheHogs =()=>{
    return hogs.map((hogsObj, idx) =>
    <Hog
      key={idx}
      name={hogsObj.name}
      specialty={hogsObj.specialty}
      greased={hogsObj.greased}
      weight={hogsObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} medal={hogsObj['highest medal achieved']}
    />)
  }

  render() {
    return (
      <div className="ui three stackable cards">
        {this.getTheHogs()}
      </div>
    )
  }
}
