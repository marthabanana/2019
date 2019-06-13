import React from 'react'

import './style.css'
import LandingImg from './images/landing.png'
import PosterImg from './images/poster.jpg'

export default () => (
  <div className="landing">
    <img src={LandingImg} alt="" className="hidden-xs" />
    <img src={PosterImg} alt="" className="visible-xs" />
  </div>
)
