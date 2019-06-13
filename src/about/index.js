import React from 'react'

import Newsletter from '../newsletter'

import './style.css'
import logoImg from './images/abr-logo.png'
import sponsorsImg from './images/sponsors.png'

export default () => (
  <section className="about">
    <h1>Production</h1>
    <div className="box-container">
      <div className="box">
        <p>
          The Festival is organized by the non-profit organization “<strong>
            ABR - Alternative Brains Rule
          </strong>”. Its team is composed of young people from different
          professional fields, that are involved in the arts, and have set out
          to develop the Cypriot creative alternative scene.
        </p>
        <p>
          By encouraging collaborations between different fields they aim to
          explore the potential of home grown talent. By providing a platform
          for these artists to produce and present their work, they allow for
          them to promote their art and themselves in Cyprus and the rest of the
          world.
        </p>
      </div>
      <div className="box">
        <p>
          <strong>ABR</strong> has managed to put Cyprus on the creative map of
          Europe, by developing an internationally recognized, alternative,
          creative scene.
        </p>
        <p>
          Bringing artists from Cyprus and abroad together to collaborate on
          projects, will allow them to display their creative abilities as well
          as the intricacies of modern Cypriot culture through their work.
        </p>
      </div>
      <div className="box">
        <img src={logoImg} alt="ABR stands for Alternative Brains Rule" />
      </div>
    </div>
    <Newsletter />
    <p className="sponsors">
      <img src={sponsorsImg} alt="These are good people" />
    </p>
  </section>
)
