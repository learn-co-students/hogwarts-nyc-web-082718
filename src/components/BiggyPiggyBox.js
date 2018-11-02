import React, { Component } from 'react';
import hogs from "../porkers_data.js"
import PigBox from "./PigBox.js"
import uuid from "uuid"

const uuidv4 = require('uuid/v4')

export default class BiggyPiggyBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return(
        <div className="ui cards">
          {this.props.hogs.map( hog => <PigBox key={uuidv4()} pigObj={hog}/>)}
        </div>
      )
    }
}
