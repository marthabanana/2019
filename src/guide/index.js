import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Thumbnail from '../Thumbnail'

import mapImg from './images/map.png'

export default class Guide extends PureComponent {
  render() {
    return (
      <section className="guide">
        <h1>Your Guide to ABR</h1>
        <Thumbnail offset={[0, '40%']}>
          <a href={mapImg} target="_blank" rel="noopener noreferrer">
            <img src={mapImg} alt="Location map" />
          </a>
        </Thumbnail>
        <div className="box-container">
          <div className="box">
            <h3>AFROBANANA + FRIENDS</h3>
            <p>
              This year we are shaking things up a bit, with a new formula set to see 
              each day of the festival curated together with one of our ‘Friends’ 
              as the new name suggests. Only giving the honour to the worthiest comrades 
              in musical and artistic appreciation, The AfroBanana + Friends Festival 2019
              welcomes onboard New Division and Sousami, two of the most iconic bars on the 
              island; as well as the Brandy Sour collective, Animafest animation festival,
              Antiskino Theatre Festival and custom build Reggae sound system Roots Crew,
              as the daily custodians of festival fun.
            </p>
          </div>
          <div className="box">
            <h3>THE MUSIC</h3>
            <p>
              Music lovers listen up! This year you can look forward to five thrilling days
              of exceptional music and brilliant beats. In true AfroBanana style, we’ve put
              together an electrifying five-day line up that we think is going to soothe your
              souls and blow your minds! You can look forward to an eclectic amalgamation of 
              bands, DJs and performers from around the world, complemented by some of the 
              island’s finest music makers. We’ll be getting your feet moving to an explosive
              fusion of sounds from across the world. From psychedelic space funk to live 
              electronic music; Afro-Caribbean to futuristic house beats; spacey grooves to 
              punchy sounds, you name it. We’ve got it!
            </p>
          </div>
          <div className="box">
            <h3>DAYTIME ACTIVITIES, ART & FAMILY TIME</h3>
            <p>
              As always the festival is opening the doors to a whimsical playground infused
              by the magic of artistic innovation, curiosity and creative expression. 
              Whether you’ve come for the music, or just for the camping against the lush 
              green backdrop of Val’s Place, be sure to keep your eyes peeled for creative
              workshops; glowing light structures; animation projections curated by Animafest 
              and theatrics by Antiskino.
              For the more active Bananians, this year’s fun packed schedule includes epic 
              activities to get those bodies moving. The Festival aims to provide a holistic 
              experience with an interesting itinerary of workshops to stimulate the mind, 
              body and soul, as well as activities for all ages. So get the entire family, 
              and come down and join the fun.
            </p>
          </div>
          <div className="box">
            <h3>Camping</h3>
            <p>
              Our festival campsite this year is at the most magical location on the island.
              Really make the most of the five-day event by pitching your tent in the shady 
              oasis of Val’s sweeping gardens and sleep under the stars. Our shade-providing 
              structures and dense orange tree fields provide for a relaxing and cool outdoor 
              space for your comfort. As the festival grounds are smaller and cosier this year, 
              the AfroBanana family and friends are advised to get tickets in good time and arrive
              early to guarantee their spot at this annual gathering of like-minded individuals.{' '}
            </p>
            <Link to="/guide/camping" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="box">
            <h3>ENVIRONMENT, HEALTH & SAFETY</h3>
            <p>

              Looking after your safety as well as the environment that is so kindly hosting us,
              is one of our top priorities at AfroBanana Festival. We’re not just about dancing
              to mind-blowing music! We also have a strong environmental conscience and a dedication
              to providing the best holistic experience possible. Read on for more information on 
              how we plan to keep you and Mother Nature safe during the event.
            </p>
            <Link to="/guide/environment" className="btn btn-primary">
              Health &amp; Safety
            </Link>
          </div>
          <div className="box">
            <h3>FOOD & DRINKS FEAST</h3>
            <p>
              Foodies and gastronomes; prepare to have your taste buds tantalised by the loving
              family that runs Val’s Place. If you have already been there, you know what we are
              talking about. If you haven’t, you don’t know what you are missing! Whether it’s 
              breakfast, lunch or dinner, they’ve got you covered! It’s all about good food,
              prepared with loads of love and fresh ingredients from Val’s gardens. And let’s
              not forget the creative touch of the family’s cooks!
              Oh, and expert mixologists will also be on hand throughout, concocting delicious
              cocktails exclusively for the occasion.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
