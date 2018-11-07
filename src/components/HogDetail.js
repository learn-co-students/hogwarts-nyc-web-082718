import React from 'react'

const HogDetail = (props) => {

  return (
    <div>
      <br></br>
      <p>Specialty: {props.hog.specialty}</p>
      <p>Greased: {props.hog.greased ? "Yes" : "No"}</p>
      <p>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Medal: {props.hog['highest medal achieved']}</p>
    </div>
  )

}
export default HogDetail;
