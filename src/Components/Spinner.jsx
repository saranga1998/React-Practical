import React from 'react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
import { MotionAnimate } from 'react-motion-animate'

function Spinner() {
  return (
    <div>
      <BounceLoader size={15} color='Blue' loading/>
      <br/>
      <BarLoader size={20} color='Green' loading/>
      <br/>
      <BeatLoader size={25} color='White' loading/>
    </div>
  )
}

export default Spinner
