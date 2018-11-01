import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const hogsMap = {
  'augustus_gloop': augustus_gloop,
  'bay_of_pigs': bay_of_pigs,
  'cherub': cherub,
  'galaxy_note': galaxy_note,
  'leggo_my_eggo': leggo_my_eggo,
  'mudblood': mudblood,
  'piggy_smalls': piggy_smalls,
  'porkchop': porkchop,
  'rainbowdash': rainbowdash,
  'sobriety': sobriety,
  'the_prosciutto_concern': the_prosciutto_concern,
  'trouble': trouble,
  'truffleshuffle': truffleshuffle
}

export default class CardContainer extends Component {
  render() {
    return (
      <div className='hog-card'>
        <CardFront image={hogsMap[this.props.hog.name.toLowerCase().replace(/ /g, '_')]} hog={this.props.hog}/>
        <CardBack hog={this.props.hog}/>
      </div>
    )
  }
}
