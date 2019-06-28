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
              href="https://goo.gl/maps/ze6UTzuJNXLLP1d78"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mapImg} alt="Google Map" />
            </a>
          </Thumbnail>
        </div>
        <div className="directions-drive box-container">
          <div className="box">
            <h3>FROM NICOSIA / LIMASSOL / LARNACA / FAMAGUSTA / </h3>
            <ol>
              <li>
                Follow the signs in your city towards Paphos.
              </li>
              <li>
                When you reach the Paphos roundabout (with the traffic lights) you go straight.
              </li>
              <li>At the next roundabout you go right towards Πόλη Χρυσοχούς.</li>
              <li> At the end of the road you reach another roundabout and you turn right.</li>
              <li>
                Keep going STRAIGHT for 30km until you reach Πόλη Χρυσοχούς.
              </li>
              <li>
                When you enter Πόλη Χρυσοχούς you will see to your left a Petrol Station and turn right on the next turn.
              </li>
              <li>
                Keep Straight for 11km and turn right at the Πάνω Γιαλία sign towards Gialia's Village
              </li>
              <li>
                You will see the festival to your LEFT after 600m and the Parking to the right.
              </li>
            </ol>
          </div>
          <div className="box">
            <h3>From PAPHOS</h3>
            <ol>
              <li>Follow the signs towards Πόλη Χρυσοχούς.</li>
              <li>When you enter Πόλη Χρυσοχούς you will see to your left a Petrol Station and turn right on the next turn.<li>
              </li>
              <li>
                Keep Straight for 11km and turn right at the Πάνω Γιαλία sign towards Gialia's Village
              </li>
              <li>
                You will see the festival to your LEFT after 600m and the Parking to the right.
              </li>
            </ol>
          </div>
        </div>
      </section>
    )
  }
}
