import React from 'react';

const HogDetails = (props) => {
  return (
    <div>
      <div>Specialty {props.specialty}</div>
      <div>Greased: {props.greased ? 'yes' : 'no'}</div>
      <div>Weight: {props.weight}</div>
      <div>Medal: {props.medal}</div>
    </div>
  )
}

export default HogDetails;
