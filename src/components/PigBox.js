import React, { Component } from 'react';

export default class PigBox extends Component {

  constructor(props){
    super(props)
    this.state ={
      displayFacts: false
    }
  }

  handleClick= event => {
    console.log(this.state)
    this.setState({
      displayFacts: !this.state.displayFacts
    })
  }

  displayPigFacts = () => {
  	 return (
       <div>
       <h2>🐖:❄️📦 =  {this.props.pigObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
       <p>Specialty: {this.props.pigObj.specialty}</p>
       <p>Greased: {this.props.pigObj.greased ? 'Yes' : 'No'}</p>
       <p>Highest Medal Achieved: {this.props.pigObj['highest medal achieved']}</p>
       </div>
     )
  }

  hidePig = (event) =>{
    // debugger
    event.target.parentElement.style.display = "none"
  }

  render() {
    return(
              <div className="card">
                <div onClick={this.handleClick}>
                    <img src={require("../hog-imgs/" + this.props.pigObj.name.toLowerCase().replace(/ /gi, '_') + ".jpg")} />
                    <h1> {this.props.pigObj.name}</h1>
                     {this.state.displayFacts ? this.displayPigFacts() : null }
              </div>
              <button onClick={this.hidePig}> Hide Piggy </button>
            </div>
  )}
};
