import React, { PureComponent } from 'react'

import Thumbnail from '../Thumbnail'
import './style.css'
import mapImg from './images/google-map.png'

export default class Directions extends PureComponent {
  render() {
    return (
      <section className="directions">
        <h1>Getting Here</h1>
        <div className="box-container">
          <div className="box">
            <h2>CAR SHARING</h2>
            <p>
              Why not get your friends together to make the most of the drive
              down to the festival? Sharing a ride is fun, will save you petrol
              money, it’s environmentally friendly, and it will be easier for
              everyone to park once on site!
            </p>
            <p>
              Keep an eye out for the ‘car sharing’ post on the festival’s
              Facebook and Instagram pages where you can offer or request rides.
            </p>
          </div>
          <div className="box">
            <h2>PARKING</h2>
            <p>
              This year the new venue provides heaps of space to park your car in a designated
              parking area, right beside the entrance, for the ultimate ease of access and convenience. 
            </p>
          </div>
        </div>
        <div className="maps box-container">
          <Thumbnail className="box">
            <a
              href="https://www.google.com/maps/place/The+Afro+Banana+Republic+Festival/@34.8126483,33.5318724,15.5z/data=!4m5!3m4!1s0x14de04a7d9365cb9:0xbd7734f7a94bf975!8m2!3d34.8132764!4d33.5382322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mapImg} alt="Google Map" />
            </a>
          </Thumbnail>
        </div>
        <div className="directions-drive box-container">
          <div className="box">
            <h3>FROM NICOSIA / LARNACA / FAMAGUSTA</h3>
            <ol>
              <li>
                (From Nicosia/Famagusta) At the Rizoelia roundabout take the
                exit towards the airport.
              </li>
              <li>
                Take the THIRD exit on the Dromolaxia roundabout towards
                Pervolia.
              </li>
              <li>At the end of the road turn LEFT at the traffic lights.</li>
              <li>At the end of the road turn RIGHT.</li>
              <li>
                Continue straight through the village for about 5km, at the
                roundabout just after the Police station take the third exit.
              </li>
              <li>
                Keep Straight for about 8km and turn LEFT at the big AFROBANANA
                sign.
              </li>
              <li>
                At the end of the road turn LEFT and you will see the festival
                on your RIGHT.
              </li>
              <li>
                Crew assistants and signage will direct you to the Parking Area.
              </li>
            </ol>
          </div>
          <div className="box">
            <h3>From Limassol</h3>
            <ol>
              <li>Take the exit for Ζύγι.</li>
              <li>At the end of the road, turn LEFT.</li>
              <li>At the end of the road, turn RIGHT.</li>
              <li>
                Keep going straight and then keep LEFT until the end of the
                road, and then turn left.
              </li>
              <li>At the end of the road turn, RIGHT.</li>
              <li>At the end of the road turn LEFT on the coastal road.</li>
              <li>Keep going STRAIGHT for 24 km.</li>
              <li>You will then see the festival on your RIGHT.</li>
              <li>
                Crew assistants and signage will direct you to the Parking Area
              </li>
            </ol>
          </div>
        </div>
      </section>
    )
  }
}
