import React from 'react'
import hogs from '../porkers_data.js'
import HogCard from './HogCard.js'

export default class Index extends React.Component {

  constructor() {
    super()
    this.state = {
      array: hogs,
      clicked: false,
      weight: false,
      greased: false
    }
  }

  generateHogs = () => {
    return this.state.array.map(hog =>
      <HogCard
      name={hog.name}
      image={require(`../hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`)}
      specialty={hog.specialty}
      info1={Object.keys(hog)[3]}
      info2={Object.values(hog)[3]}
      info3={Object.keys(hog)[4]}
      info4={Object.values(hog)[4]}
      clicked={false}
      />
    )
  }

  bigHandleClickName = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    if (this.state.clicked) {
      const newHogs = hogs.sort(function(a, b) {
        var nameA = a.name;
        var nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })

      this.setState({
        array: newHogs
      })
    } else {
      const newHogs = hogs.sort(function(a, b) {
        var nameA = a.name;
        var nameB = b.name;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      })

      this.setState({
        array: newHogs
      })
    }

  }

  bigHandleClickWeight = () => {
    this.setState({
      weight: !this.state.weight
    })
    if (this.state.weight) {
      const newHogs = hogs.sort(function(a, b) {
        var weightA = Object.values(a)[3];
        var weightB = Object.values(b)[3];
        if (weightA < weightB) {
          return -1;
        }
        if (weightA > weightB) {
          return 1;
        }
      })

      this.setState({
        array: newHogs
      })
    } else {
      const newHogs = hogs.sort(function(a, b) {
        var weightA = Object.values(a)[3];
        var weightB = Object.values(b)[3];
        if (weightA > weightB) {
          return -1;
        }
        if (weightA < weightB) {
          return 1;
        }
      })

      this.setState({
        array: newHogs
      })
    }
  }

  filterGreased = () => {
    this.setState({
      greased: !this.state.greased
    })

    if (this.state.greased === true) {
      let greasedHogs = hogs.filter(hog => hog.greased === true)

      this.setState({
        array: greasedHogs
      })
    } else {
      let greasedHogs = hogs
      this.setState({
        array: greasedHogs
      })
    }
  }



  render() {
    return (
      <div>
        <button id="name" onClick={this.bigHandleClickName}>name</button>
        <button id="weight" onClick={this.bigHandleClickWeight}>weight</button>
        <button id="greased" onClick={this.filterGreased}>greased?</button>
        <h1>{this.generateHogs()}</h1>
      </div>
    )
  }
}
